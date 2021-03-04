const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors')
const Subscribers = require('./Models/subs')
const messages = require('./Models/messages')
const registrations = require('./Models/registers')
const path = require('path');

const bodyParser = require('body-parser');

// App config
const app = express();
const port = process.env.PORT || 5000;
const connection_url = process.env.MONGODB_URI || 'mongodb+srv://Bhavik:bhavik100001@cluster0.dftat.mongodb.net/divine_shiksha?retryWrites=true&w=majority';

// Middlewares

app.use(express.json());
app.use(Cors());

// DB config

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(
    success => {
        console.log(`connected to the database`)
        console.log(`running on port ${port}`)
    }
).catch(
    error => {
        console.log(`failed to connect to the database`)
        console.log(error)
    }
)

// Api endpoints
app.get('/api', (req, res) => {
    res.status(200).send(`hare krishna`);
})

app.post('/api/subscribe', (req, res) => {
    const newSub = req.body;
    
    Subscribers.create(newSub, (err, data) =>{
        if(err) {
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.post('/api/message', (req, res) => {
    const newMessage = req.body;
    
    messages.create(newMessage, (err, data) =>{
        if(err) {
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})
app.post('/api/register', (req, res) => {
    const newReg = req.body;
    
    registrations.create(newReg, (err, data) =>{
        if(err) {
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
};

// Listener

app.listen(port)