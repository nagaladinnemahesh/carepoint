const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Patient', 'Doctor'],
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        default: null,
        required: function() {return this.role === 'Patient'}
    },
    specialization: {
        type: String,
        default: null,
        required: function() {return this.role === 'Doctor'}
    },
    experience: {
        type: Number,
        default: null,
        required: function() {return this.role === 'Doctor'}
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
