// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    message: String,
    address: String
})

module.exports = mongoose.model('registrations', registerSchema)