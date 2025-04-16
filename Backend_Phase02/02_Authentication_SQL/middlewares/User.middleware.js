import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const isLoggedIn=(req,res,next)=>{
    //token 
        // console.log(req.cookies);
        const {token}=req.cookies
        if(!token){
             return res.status(400).json({
                message:"Authentication Failed",
                success:false,
            })
        }

        try {
            
            const decodedData=jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.user=decodedData;

            next();

        } catch (error) {
            
        }

    //check existing
    //extract data from token



}



export default isLoggedIn