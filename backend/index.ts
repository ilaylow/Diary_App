import * as express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri: string = "mongodb+srv://Ley:AccessMongoDB3837!@diarycluster.qugu5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
mongoose.connect(uri, (err: any) => {
    if (err){
        console.log(err.message);
    }
    else{
        console.log("Successful Connection!");
    }
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection Established to MongoDB!")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

/* app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors()) */

/* app.use('/user') */