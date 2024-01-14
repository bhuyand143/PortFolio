const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());

const mailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
});
const Mail = mongoose.model('Mail', mailSchema);
require('dotenv').config();

const mongoURI = process.env.MONGO_URL;

app.post('/sendEmail', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const mail = new Mail({ name, email, message });
        const sentmail = await mail.save();
        res.send(sentmail);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!")
    }
})

mongoose.set('strictQuery', true);

mongoose.connect(mongoURI)
.then(console.log('Connected to Mongo Succesfully!'))
.catch(error=>console.log(error));

app.listen(3000, () => {
    console.log('App is running at  server 3000!');
})