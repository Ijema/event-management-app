const port = 4000
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors")

// This line enables Express to parse JSON data from incoming requests.
app.use(express.json());
// This line enables Cross-Origin Resource Sharing (CORS) in the Express application, allowing it to handle cross-origin requests
app.use(cors())

// Database Connection with Mongodb
mongoose.connect("mongodb+srv://Event_management_app:Event_management_app@cluster0.u6tlr8y.mongodb.net/")

// API Creation

app.get('/', (req,res)=>{
    res.send("Express App is Running")
})

//User Schema Model
const Users = mongoose.model('Users',{
    name:{
        type: String,
    },
    number:{
        type: Number,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// User Signup Endpoint
app.post('/signup', async(req,res)=>{
    let check = await Users.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success: false, errors:"Existing User with the Same Address"})
    }
    const user = new Users({
        name: req.body.name,
        number: req.body.number,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
    })

    await user.save()
})

app.listen(port, (error)=>{
    if (!error) {
        console.log("Server running on port " + port)
    } else {
        console.log("Error: " +error)
    }
})