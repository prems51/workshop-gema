const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const EnquiryForm = require('./models/enquiryFormSchema');
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

// lets connect to mongodb
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
}

app.get('/', (req, res) => {
    res.send('Hello from Prem');
});

app.post('/api/enquiry', (req, res) => {
    const data = req.body;
    // form validation
    const { name, email, phone } = data;
    if (!name || !email || !phone) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    if (name.length < 3) {
        res.status(400).json({ message: 'Name must be at least 3 characters long' });
        return;
    }

    if (!email.includes('@')) {
        res.status(400).json({ message: 'Invalid email address' });
        return;
    }

    if (phone.length < 10) {
        res.status(400).json({ message: 'Phone number must be at least 10 digits long' });
        return;
    }

    // save in mongo database

    const enquiryForm = new EnquiryForm({
        name,
        email,
        phone
    });

    enquiryForm.save()
    .then(() => {
        console.log('Enquiry saved successfully');
        res.json({ message: 'Enquiry received' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Error saving enquiry' });
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

