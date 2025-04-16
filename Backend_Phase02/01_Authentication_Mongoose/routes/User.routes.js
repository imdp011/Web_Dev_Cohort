import express from "express"
import { logout,getMe, loginUser, register_User, verifyUser, forgetPassword, resetPassword } from "../controller/User.controller.js";
import isLoggedIn from "../middlewares/profile.middleware.js";

const router = express.Router();

router.post("/register",register_User);

router.get("/verify/:token",verifyUser) 

router.get("/login",loginUser)

router.get("/me",isLoggedIn,getMe)

router.get("/logout",isLoggedIn,logout)

router.get("/forget",forgetPassword)

router.get("/reset/:resetPasswordToken",resetPassword)



export default router
