import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const database=()=>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connection Established With DB")
    })
    .catch((err)=>{
        console.log("Error Occured While Connection to db",err);
    })
}

export default database;
