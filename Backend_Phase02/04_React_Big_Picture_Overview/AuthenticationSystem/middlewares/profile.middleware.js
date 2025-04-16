import jwt from "jsonwebtoken"

const isLoggedIn= async (req,res,next)=>{
    try {
        let token = req.cookies?.Token;
    
        console.log("Token Found: ", token ? "YES" : "NO");
        if(!token){
            return res.status(401).json({
                message:"Authentication Failed"
            })
        }

        const decodedData=await jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log(decodedData);
        req.user=decodedData
        next();
       
    } catch (error) {
            console.log("Auth Middleware failure");
            return res.status(500).json({
                success:false,
                message:"Internal Server Error",
            })
    }
};


export default isLoggedIn