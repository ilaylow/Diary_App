const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, './.env') })
console.log(path.resolve(__dirname, '../.env'))
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())

app.use('/user', userRoutes);

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection to MongoDB Successful");
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

