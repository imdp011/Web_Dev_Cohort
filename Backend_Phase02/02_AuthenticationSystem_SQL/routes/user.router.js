import express from "express"
import { Logout, LoginUser, UserProfile, userRegistration,verifyUser, ForgetPassword, ResetPassword } from "../controllers/user.controllers.js";
import isLoggedIn from "../middlewares/User.middleware.js";
const router=express.Router();


router.post("/register",userRegistration);

router.get("/verify/:token",verifyUser)

router.get("/login",LoginUser);

router.get("/me",isLoggedIn,UserProfile)

router.get("/logout", Logout)

router.get("/forget-password", ForgetPassword)

router.get("/reset/:resetPasswordToken",ResetPassword)







export default router