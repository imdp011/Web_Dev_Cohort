import { PrismaClient } from "@prisma/client";
import Crypto from "crypto";
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

const prisma=new PrismaClient().$extends({
    query:{
        user:{
             async create ({args,query}){
                if(args.data.password){
                    args.data.password=await bcrypt.hash(args.data.password,10)
                }
            
                return query(args) //it works as next
            },

            async update({args,query}){
                if(args.data.password){
                    args.data.password=await bcrypt.hash(args.data.password,10)
                }
                return query(args) 
            }
        },
    }
})

dotenv.config();

//User Registration

const userRegistration=async(req,res)=>{
const {name,email,password}=req.body

if(!name|| !email|| !password){
   return res.status(401).json({
        message:"All fields are mandatory",
        success:false,
    })
}

try {
    const user= await prisma.user.findUnique({where:{email} })
        if(user){
            return res.status(401).json({
                message:"user Already Exist"
            })
        }
        else{
            const user= await prisma.user.create({
                data:{
                    name:name,
                    email:email,
                    password:password
                }
            })
        
           
        const token=Crypto.randomBytes(32).toString("hex")


        const updatedUser=await prisma.user.update({
            where:{
                id:user.id,
            },
            data:{
                verificationToken:token,
            }
        })

            res.status(200).json({
            message:"User Register Successfully",
            success:true,
            updatedUser
        })
        
        // console.log(updatedUser);

        const transporter = nodemailer.createTransport({
            host:process.env.MAILTRAP_HOST,
            port:process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD,
            },
            });

            const mailOptions={
                from: process.env.MAILTRAP_SENDER_EMAIL,
                to: email,
                subject: "Verify Your Email",
                text: `Verify your email by click this link
                ${process.env.BASE_URL}/api/v1/user/verify/${token}`,
            }

            await transporter.sendMail(mailOptions);

        }
           

    } catch (error) {
        res.status(500).json({ 
            Error: error })

    }
    finally {
        await prisma.$disconnect()
      }
}

//Verify User

const verifyUser=async(req,res)=>{
    try {
        const {token}=req.params

        if(!token){
             return res.status(401).json({
                message:"Token missing"
            })
        }
    
        const user=await prisma.user.findFirst({
            where:{verificationToken:token},
        })
        if (!user){
            return res.status(400).json({
                message:"user not found"
            })
        }
    
        else{

            const updatedUser=await prisma.user.findFirst({
                where:{verificationToken:token},
                data:{
                    isVerified:true 
                }
            })


            return res.status(200).json({
                message:"User Verify Successfully",
                success:true,
                updatedUser
            })
        }
    
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            success:false,
            error
        })
        
    }

   
}   


const LoginUser=async(req,res)=>{

    const {email,password}=req.body

    if(!email|| !password){
        return res.status(401).json({
            message:"All fields are Mandatory",
            success:false
        })
    }

    const user=await prisma.user.findUnique({
        where:{email}
    })

    if(!user){
        return res.status(401).json({
            message:"User not exist",
            success:false
        })
    }

    const checkPassword=await bcrypt.compare(password,user.password);
    if(!checkPassword){
        return res.status(401).json({
            message:"Password incorrect",
            success:false
        })
    }

        const jwtToken=jwt.sign({id:user.id},process.env.JWT_SECRET_KEY)
        res.cookie("token",jwtToken);
        console.log(req.cookies);

        return res.status(201).json({
        message:"User Login Successfully",
        success:true,
        user,
        jwtToken
    })
}

//profile

const UserProfile=async(req,res)=>{
            // console.log(req.user.id);
    try {
            const user=await prisma.user.findUnique({
                where:{id:req.user.id}
    
                })

            if(!user){
                return res.status(400).json({
                    message:"User NOT FOund",
                    success:false,
                })
            }
            
            return res.status(200).json({
                message:"User Profile",
                success:true,
                user
            })

    } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Internal Server ERROR",
            })
    }
}

//Logout
const Logout=async(req,res)=>{
    res.cookie("token","",{expires:new Date(0)})
    res.status(200).json({
        message:"User Logout Successfully",
        success:true,
    })
}


const ForgetPassword=async(req,res)=>{
    try {
        const {email}=req.body
        if(!email){
            return res.status(401).json({
                message:"Please Enter your email",
                success:false
            })
        }

        const user=await prisma.user.findUnique({
            where:{email:email}

        })
        // console.log(user);

        if (!user){
            return res.status(401).json({
                success:false,
                message:"User not found Enter Valid Email",
            })
        }

        const resetPasswordToken=Crypto.randomBytes(32).toString("hex");
        console.log(resetPasswordToken);
        const resetPasswordExpiry=new Date(Date.now()+10*60*1000);
        console.log(resetPasswordExpiry);

        const updatedUser=await prisma.user.update({
            where:{email:email},
            data:{
                resetPasswordToken:resetPasswordToken,
                resetPasswordExpiry:resetPasswordExpiry,
            }
        })

        //Sending reset password email

        const transporter = nodemailer.createTransport({
            host:process.env.MAILTRAP_HOST,
            port:process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD,
            },
            });

            const mailOptions={
                from: process.env.MAILTRAP_SENDER_EMAIL,
                to: email,
                subject: "Reset Password",
                text: `Reset your password by clicking below link
                ${process.env.BASE_URL}/api/v1/user/reset/${resetPasswordToken}`,
            }

            await transporter.sendMail(mailOptions);

            
            return res.status(200).json({
                message:"Email sent successfully",
                success:true,
                updatedUser
            })





    } catch (error) {
        
    }
}


const ResetPassword=async(req,res)=>{

        console.log(req.params);
    try {
            const {resetPasswordToken}=req.params
            const {password}=req.body

            if(!resetPasswordToken){
                return res.status(401).json({
                    messsage:"Reset Password Token Missing",
                    success:false,
                })
            }

            if(!password){
                return res.status(401).json({
                    message:"Please enter Password",
                    success:false,
                })
            }

            const user=await prisma.user.findFirst({
                where:{resetPasswordToken:resetPasswordToken}
            })

            console.log(user);

            if(!user){
                return res.status(401).json({
                    message:"Invalid Token or Token Expire",
                    success:false,
                })
            }            

            const updatedUser= await prisma.user.update({
                where:{email:user.email},
                data:{
                    password:password,
                    resetPasswordToken:null,
                    resetPasswordExpiry:null,
                }
            })

            return res.status(200).json({
                success:true,
                message:"Password Reset Successfully",
                updatedUser,
            })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Internal Server Error",
            error:error.message,
        })
    }
}

export {userRegistration,verifyUser,LoginUser,UserProfile,Logout,ForgetPassword,ResetPassword}