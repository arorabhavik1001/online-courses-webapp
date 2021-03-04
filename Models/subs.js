// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const subSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String
})

module.exports = mongoose.model('Subscribers', subSchema)