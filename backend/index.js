import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import userRouter from "./routes/users.js";
import dotenv from "dotenv";

dotenv.config()
//console.log(path.resolve(__dirname, '../.env'))
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())

app.use('/user', userRouter);

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

