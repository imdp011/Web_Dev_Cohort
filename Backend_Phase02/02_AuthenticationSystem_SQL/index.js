import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/user.router.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app=express();
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const port=process.env.PORT || 4000;

app.use("/api/v1/user",userRoute);

app.get("/",(req,res)=>{
    res.send("Home route");
})


app.listen(port,(req,res)=>{
    console.log("Request listining on port",port);
})