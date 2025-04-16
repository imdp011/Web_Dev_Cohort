import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"
dotenv.config()
import Userroutes from "./routes/User.routes.js"
import cookieParser from "cookie-parser"

const app=express();
const port=process.env.PORT || 4000

db();
app.use(cors({
    origin:process.env.ORIGIN_URL,
    methods: ['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['content-Type','Authorized'],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/v1/users", Userroutes);

app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.listen(port,()=>{
    console.log(`port listening on ${port}`);
})


