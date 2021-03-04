// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    message: String,
})

module.exports = mongoose.model('messages', messageSchema)