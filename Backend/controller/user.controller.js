import User from "../models/user.models.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export let login = async (req , res) => {
    try{
        const {email , password , role} = req.body;
        if(!email || !password || !role) {
            return res.status(400).json({
                message : "Something is missing!",
                success : false
            })
        }

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message : "Incorrect Email Or Password!",
                success : false,
            })
        }

        let status = await bcrypt.compare(password , user.password)
        if(!status){
            return res.status(400).json({
                message : "Incorrect Email Or Password!",
                success : false,
            })
        }

        // Check if role is correct or not
        if(role != user.role){
            return res.status(400).json({
                message : "Account Does not exist with the current Role!",
                success : false,
            })
        }

        const tokenData = {
            email : user.email,
            role : user.role,
        }

        const token = jwt.sign(tokenData , process.env.SECRET_KEY , {expiresIn : "7d"})

        user = {
            _id : user._id,
            email : user.email,
            role : user.role,
        }
        
        return res.status(200).cookie("token" , token , {maxAge : 7 * 24 * 60 * 60 * 1000 , httpOnly:true , sameSite:"strict"}).json({
            user: user,
            success : true
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal Server Error",
            success : false
        })
    }
}

export let checkuser = async(req , res) => {
    try{
        let token = req.cookies.token

        if(!token){
            return res.status(401).json({
                message : "Token Expired, Please login!",
                success : false
            })
        }

        const decode =  jwt.verify(token , process.env.SECRET_KEY)
        if(!decode){
            return res.status(401).json({
                message : "Invalid Token",
                success : false
            })
        }

        const user = {
            email : decode.email,
            role : decode.role,
        }

        res.status(200).json({
            user,
            success : true
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal Server Error",
            success : false
        })
    }
}

export let showallusers = async(req , res) => {
    try{
        let allUsers = await User.find({});
        res.status(200).json({
            success : true,
            allUsers
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal Server Error",
            success : false
        })
    }
}

export let createuser = async(req , res) => {
    try{
        const {email , password , role} = req.body;
        if(!email || !password || !role) {
            return res.status(400).json({
                message : "Something is missing",
                success : false
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message : "User already exist with this email",
                success : false,
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10)

        const newUser = await User.create({
            email , password : hashedPassword , role,
        })
        
        await newUser.save();

        return res.status(200).json({
            message : "User Created Successfully!",
            success : true,
            newUser
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal server error",
            success : false
        })
    }
}

export let deleteuser = async(req , res) => {
    try{
        let params = req.params;
        let id = params.id;

        const user = await User.findOne({_id : id});
        if(!user){
            return res.status(400).json({
                message : "User Not Found",
                success : false
            })
        }

        await User.deleteOne({_id : id});

        res.status(200).json({
            success : true
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal server error",
            success : false
        })
    }
}

export let updateuser = async(req , res) => {
    try{
        let params = req.params;
        let id = params.id;

        let {role} = req.body;

        await User.findByIdAndUpdate(id , {role : role});

        res.status(200).json({
            message : "User got updated",
            success : true
        })
    }
    catch(e){
        res.status(400).json({
            message : "Internal server error",
            success : false
        })
    }
}
