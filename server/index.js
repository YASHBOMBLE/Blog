import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import validator from 'validator';
import User from './models/User.js';
import Blogs from './models/Blogs.js';
import path from 'path';
import { Resend } from 'resend';


const __dirname = path.resolve();
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

    const resend = new Resend('re_6NQ9hDTH_Jn23RPseef7FWCyyz1dbR2oq');



    res.json({
        success: true,
        message: "User created successfully",
        data: savedUser
    })

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: `${email}`,
        subject: 'Signup',
        html: '<p><center>Congrats You Have Successfully registered for Blog Site.<br /> </center><center><h3>Thank You !</h3></p>'
      });

})

app.post('/addblog',async(req,res)=>{
    const{title,blog,author} = req.body;

    if(!title || !blog || !author) {
       return res.json({
            success: false,
            message: "Enter All Data",
    });
    }

    const blogs = new Blogs({
        title : title,
        blog : blog,
        author : author

    })
    const savedBlog = await blogs.save();

    res.json({
            success: true,
            message: "Blog Added Successfully",
    })
})

app.post('/deleteBlog',async (req,res)=>{
    const title = req.body;

    const del = await Blogs.deleteOne(title);

    res.json({
        success : true,
        message : "Blog Deleted"
    }) 
})

app.get('/allblog',async (req,res)=>{
    const exercise = await Blogs.find();

    res.json({
        success : true,
        message : "Blog fetch successfully",
        data : exercise
    }) 
})
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})