import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import validator from 'validator';
import User from './models/User.js';
import Blogs from './models/Blogs.js';
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to MongoDB');
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;



    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password });

    if (existingUser) {
        return res.json({
            success: true,
            message: "Login successful",
            data: existingUser
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

app.post('/signup', async (req, res) => {
    const { name, phone, email, password, gender } = req.body;

    // validation to check if all fields are filled starts here


    // validation to check if all fields are filled ends here

    if (!validator.isEmail(email)) {
        return res.json({
            success: false,
            message: "Please enter valid email",

        })
    }
    if (!validator.isMobilePhone(phone)) {
        return res.json({
            success: false,
            message: "Mobile must contain 10 digit",

        })
    }


    if (!validator.isStrongPassword(password)) {
        return res.json({
            success: false,
            message: "Password contains A-Z,0-9 ,a-z, @"
        })
    }

    // validation to check if email already exists starts here
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }
    // validation to check if email already exists ends here

    // validation to check if phone already exists starts here

    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }
    // validation to check if phone already exists ends here

    const user = new User({
        name: name,
        email: email,
        phone: phone,
        password: password,
        gender: gender
    })

    const savedUser = await user.save();

    res.json({
        success: true,
        message: "User created successfully",
        data: savedUser
    })


})

app.post('/addblog',async(req,res)=>{
    const{title,blog} = req.body;


    const user = new Blogs({
        title : title,
        blog : blog

    })
    const savedBlog = await Blogs.save();

    res.json({
            success: false,
            message: "Blog Added Successfully",
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})