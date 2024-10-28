import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}
//login
const loginUser = async (req,res) => {

}

//dang ky
const registerUser = async (req,res) => {
   try {
        const {name, email, password} = req.body;
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false, message:"Tài khoản hoặc email đã tồn tại"})
        }
        //dùng cái validator để kt email
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Email không hợp lệ"})
        }
        if (password.length < 8) {
            return res.json({success:false, message:"Mật khẩu phải từ 8 chữ số trở lên"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        const newUser = new userModel({
            name,
            email,
            password:hashPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
   } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
   }
}

//login cho et min
const adminLogin = async (req,res) => {

}

export { loginUser, registerUser,adminLogin }