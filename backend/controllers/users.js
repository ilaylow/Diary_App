import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

import {User} from "../models/user.js";

const errorMessageResponseSignIn = {message: "Invalid Credentials. Incorrect Username or Password"};
const errorMessageResponseSignUp = {message: "User already exists!"}

export const signin = async(req, res) => {
    const {email, password} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(404).json(errorMessageResponseSignIn);

        const passwordIsValid = await bcrypt.compare(password, existingUser.password);
        if (!passwordIsValid) return res.status(400).json(errorMessageResponseSignIn)

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'Test', {expiresIn: "1h"})
        res.status(200).json({result: existingUser, token})
    }   catch(error){
            res.status(500).json({message: "Sorry, something went wrong..."});
    }
}

export const signup = async(req, res) => {
    const {email, password} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(404).json(errorMessageResponseSignUp);

        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})
        const token = jwt.sign({email: result.email, id: result.user._id},"Test" , {expiresIn: "1h"})
        res.status(200).json({result, token})
    }   catch(error){
            res.status(500).json({message: "Sorry, something went wrong..."});
    }
}

