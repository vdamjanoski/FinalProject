const express = require("express")
const dotenv = require("dotenv")
const database = require
dotenv.config({path: `${__dirname}/config.env`})
// database
const cors = require("cors")


const app = express();
app.use(cors());

//database connect

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(process.env.PORT, (err) => {
    if (err){
        console.log("Failed to start the server.")
    }
    console.log(`Server started successfully on ${process.env.PORT}`)
})