const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
// Use 127.0.0.1 instead of ::1
const mongoURI = 'mongodb://127.0.0.1:27017/Test';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Server is listening on port:3000');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });