import User from "../models/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

//register user 

const register_User = async (req, res) => {
    
    //get data
    const {name,email,password} =req.body;
    //validate data
    if(!name || !email || !password){
        return res.status(400).json(
            {message:"All fields are Required"}
        )
    }
    //check if user exists 
    try {
        const existingUser= await User.findOne({name});
    //if yes -> show user already exists

        if(existingUser){
            return res.status(400).json(
                {message:"User Already Exist"}
            )
        }
    //if no -> create user
    
         const user= await User.create({
            name,
            email,
            password
        })

     
    //create verfication token

    const Token = crypto.randomBytes(32).toString("hex");

    //save vertification token in db 
    user.verificationToken=Token

    await user.save();

    //send token to user on email by nodemailer

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_TRAP_HOST,
        port: process.env.MAIL_TRAP_PORT,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: process.env.MAIL_TRAP_USER,
          pass: process.env.MAIL_TRAP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.MAIL_TRAP_SENDEREMAIL,
        to: user.email,
        subject: "Verify Your Email",
        text: `Verify Your Email By Click folowwing link
            ${process.env.ORIGIN_URL}/api/v1/users/verify/${Token} `,
      };

      await transporter.sendMail(mailOptions);

      res.status(201).json({
        message: "User registered successfully",
        success: true,
        user,
      });

    } catch (error) {
        return res.status(400).json({
            message:"User not registered",
            error,
            success:false,
        })
    }

}

// verify user 

const verifyUser=async (req,res)=>{
     const {token}= req.params
     if(!token){
        return res.status(400).json(
            {message:"Token is missing"}
        )
     }

     try {
        const verifyUser= await User.findOne({verificationToken:token});
        if(!verifyUser){
            return res.status(400).json(
                {message:"Not Verified"}
            )
        }
        verifyUser.isVerified=true;
        verifyUser.verificationToken=null;
        res.status(200).json(

            {   message:"Verified Successfully",
                success:true,
                verifyUser
            }
      
        )


     } catch (error) {
        return res.status(400).json({
            message:`${error}`
        })        
     }

}

//login user

const loginUser=async (req,res)=>{
    //get data -> email,password

    const {email,password}= req.body;
     //validate data-> 

    if(!email || !password){
        return res.status(400).json({
            message:"login creaditional mandatory"
        })
    }

    try {
        const user= await User.findOne({email})
        console.log(user);
          if(!user){
         return res.status(400).json({
             message:"Something happen!"
         })
        }

         await bcrypt.compare(password,user.password,(err,result)=>{

            if(result){
                let token=jwt.sign({email, id: user._id},process.env.JWT_SECRET_KEY);
                res.cookie("Token",token);
                return res.status(200).json({
                    success:true,
                    message:"Login Sucessfully",
                    token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                      },
                })
            }
            else{
                return res.status(400).json({
                    message:"Something Went Wrong"
                })
            }

        })

    }
     catch (error) {
        
    }

}

const getMe=async(req,res)=>{
    try {
            const user= await User.findById(req.user.id)
            if (!user) {
                return res.status(400).json({
                  success: false,
                  message: "User not found",
                });
              }
          
                res.status(200).json({
                success: true,
                user,
                });


    } catch (error) {
        console.log("Error in get me", error);

    }

}
//logout 

const logout=(req,res)=>{
        const cook=res.cookie("Token","",{expires: new Date(0)});
        console.log(cook);
        res.status(200).json({
            message:"Logout Successfully",
            success:true,
        })
}


//forget password

const forgetPassword=async(req,res)=>{
    try {
    const {email}=req.body;

    if(!email){
        return res.status(400).json({
            message:"Please Enter a Valid Email ",

        })
    }
    const user= await User.findOne({email});
    const reset_password_token=crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken=reset_password_token;
    user.resetPasswordExpires=Date.now()+10*60*1000;

    await user.save();

    //send reset-token to user  by nodemailer

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_TRAP_HOST,
        port: process.env.MAIL_TRAP_PORT,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: process.env.MAIL_TRAP_USER,
          pass: process.env.MAIL_TRAP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.MAIL_TRAP_SENDEREMAIL,
        to: user.email,
        subject: "Reset Password ",
        text: `Reset Your Password By Click following link
            ${process.env.ORIGIN_URL}/api/v1/users/reset/${reset_password_token}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(201).json({
        message: "Check Your Email to reset the password",
        success: true,
        user,
      });



    } catch (error) {
        return res.status(400).json({
            message:`${error}`
        })    
    }
    
}
//reset password

//collect token from params
//password from body

const resetPassword=async(req,res)=>{

const { resetPasswordToken }=req.params
console.log(resetPasswordToken);
const {password}=req.body

if(!resetPasswordToken){
    return res.status(400).json(
        {message:"Token is missing"}
    )
 }

 if(!password){
    return res.status(400).json(
        {
            message:"please Enter new passoword"
        }
    )
 }

try {
        const user=await User.findOne({
            resetPasswordToken:resetPasswordToken,
            resetPasswordExpires:{$gt:Date.now()}

        })

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        console.log(user);
        user.password=password;
        user.resetPasswordToken="";
        user.resetPasswordExpires="";
        console.log(user);

        await user.save();

        res.status(201).json({
            message: "password Reset successfull",
            success: true,
            user,
          });

} catch (error) {
    return res.status(400).json({
        message:`${error}`
    })    
}

}

export {
    register_User,
    verifyUser,
    loginUser,
    getMe,
    logout,
    forgetPassword,
    resetPassword,
}