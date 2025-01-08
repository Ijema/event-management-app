require('dotenv').config()
const port = process.env.PORT || 4000
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
mongoose.connect(process.env.DB_URL)

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

    // create a token for the password
    const data ={
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom')
    res.json({success:true, token})
    
})

// Endpoint For Login
app.post('/login', async(req,res)=>{
    let user = await Users.findOne({email:req.body.email})
    if(user){
        const checkPassword = req.body.password === user.password
        if(checkPassword){
            const data ={
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data, "secret_ecom")
            res.json({success:true, token})
        } else {
            res.json({success:false, errors:"Wrong Password"})
        }
    } else {
        res.json({success:false, errors: "Wrong Email Address Entered"})
    }
})

// Creating Endpoints to display all users
app.get('/allusers', async (req, res) => {
    try {
        let user = await Users.find({});
        console.log("All Users Fetched");
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// Delete Users Endpoint
app.post('/removeusers', async(req,res)=>{
    await Users.findOneAndDelete({id:req.body.id})
    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name
    })
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb) =>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

// Creating Upload Endoints for Images
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('portfolio'), (req,res) =>{
    res.json({
        success: 1,
        image_url: `https://uc-event-management-backend-f1f1833e6850.herokuapp.com/images/${req.file.filename}`
        // image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})


// Creating a Schema for the Portfolios
const Portfolio = mongoose.model('Portfolio', {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    }
})

// Endpoint for adding portfolios
app.post('/addportfolio', async(req, res)=>{
    let portfolios = await Portfolio.find({})
    let id
    if (portfolios.length>0) {
        let last_portfolio_array = portfolios.slice(-1)
        let last_portfolio = last_portfolio_array[0]
        id = last_portfolio.id+1
    } else {
        id = 1
    }
    const portfolio = new Portfolio ({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        location: req.body.location,
        date: req.body.date,
    })
    console.log(portfolio)
    await portfolio.save()
    console.log("Saved")
    res.json({
        success: true,
        name: req.body.name
    })
})

// Delete Portfolio Endpoint
app.post('/removeportfolio', async(req,res)=>{
    await Portfolio.findOneAndDelete({id:req.body.id})
    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name
    })
})

// Creating Endpoints to display all portfolios
app.get('/allportfolio', async(req,res)=>{
    let portfolio = await Portfolio.find({})
    console.log("All Portfolio Fetched")
    res.send(portfolio)
})

//Create Endpoints to display categories of portfolio
app.get('/portfolio/:category', async (req, res)=>{
    const { category } = req.params
    let portfolioDisplay = await Portfolio.find({category})
    console.log(`Portfolio in ${category} Fetched`);
    res.send(portfolioDisplay)
})

// Creating a schema for booking event

const Booking = mongoose.model('Booking', {
    id: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    eventType:{
        type: String,
        required: true
    },
    countryOfEvent:{
        type: String,
        required: true
    },
    stateOfEvent:{
        type: String,
        required: true
    },
    locationOfEvent:{
        type: String,
        required: true
    },
    numOfGuest:{
        type: Number,
        required: true
    },
    dateOfEvent:{
        type: Date,
        required: true
    },
    beginingTime:{
        type: String,
        required: true
    },
    endingTime:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

// Creating booking endpoint
app.post('/booking', async(req,res)=>{
    let bookings = await Booking.find({})
    let id
    if(bookings.length>0){
        let last_booking_array = bookings.slice(-1)
        let last_booking = last_booking_array[0]
        id = last_booking.id+1
    } else {
        id = 1
    }
    const booking = new Booking({
        id: id,
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        eventType: req.body.eventType,
        countryOfEvent: req.body.countryOfEvent,
        stateOfEvent: req.body.stateOfEvent,
        locationOfEvent: req.body.locationOfEvent,
        numOfGuest: req.body.numOfGuest,
        dateOfEvent: req.body.dateOfEvent,
        beginingTime: req.body.beginingTime,
        endingTime: req.body.endingTime,
        description: req.body.description,
    })

    await booking.save()
    console.log("Booking Successfully")
    res.json({success:true})
})

// Creating Endpoints to display all bookings
app.get('/allbookings', async (req, res) => {
    try {
        let booking = await Booking.find({});
        console.log("All Bookings Fetched");
        res.json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});




app.listen(port, (error)=>{
    if (!error) {
        console.log("Server running on port " + port)
    } else {
        console.log("Error: " +error)
    }
})
