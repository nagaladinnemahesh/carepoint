const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

// register route or signup

router.post('/signup', async (req,res) => {
    try {
        const {name, age, gender, email, password, phone, city, role, bloodGroup, specialization, experience} = req.body

        if (!name || !email || !password || !role){
            return res.status(400).json({
                message: 'Please fill all required fields'
            })
        }

        const existingUser = await User.findOne({email})
        if (existingUser){
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name, age, gender, email, password: hashedPassword, phone, city, role, bloodGroup, specialization, experience
        })

        await newUser.save()
        res.status(200).json({
            message: 'User registered successfully'
        })
    } catch (error){
        console.log('Signup Error:', error.message)
        res.status(500).json({
            message: 'Internal server error'
        })
    }
})


// user login

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body

        if (!email || !password){
            return res.status(400).json({
                message: 'Please provide email and password'
            })
        }

        const user = await User.findOne({email})

        if (!user){
            return res.status(400).json({
                message: 'User not found'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(401).json({
                message: 'Invalid password'
            })
        }

        const token = jwt.sign({id: user._id, role: user.role,}, process.env.JWT_SECRET, {expiresIn: '7d'})
        res.status(200).json({
            message: 'Login Successful', token, user: {name: user.name, email: user.email, role: user.role}
        })
    } catch (error){
        console.log('Login Error:', error.message)
        res.status(500).json({
            message: 'Internal server error'
        })
    }
})

// logout

router.post('/logout', (req,res) => {
    res.clearCookie('token');
    res.status(200).json({message: 'Logged out successfully'})
})

// only for doctors
router.get('/doctor/dashboard', authMiddleware, roleMiddleware(['Doctor']), (req, res) => {
    res.send(`Hello Doctor ${req.user.name}, welcome to your dashboard!`)
})

// only for patients
router.get('/patient/profile', authMiddleware, roleMiddleware(['Patient']), (req, res) => {
    res.send(`Hello Patient ${req.user.name}, this is your profile`)
})

module.exports = router