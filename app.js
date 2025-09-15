const express = require("express")
const dotenv = require("dotenv")
dotenv.config({path: `${__dirname}/config.env`})
const database = require("./database/database")
const cors = require("cors");
const { signup, login } = require("./controllers/mentorController");


const app = express();
app.use(cors());
database.connectDatabase();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post(`/api/v1/signup`, signup)
app.post(`/api/v1/login`, login)

app.use(
  jwt
    .expressjwt({
      algorithms: ["HS256"],
      secret: process.env.JWT_SECRET,
      getToken: (req) => {
        if (
          req.headers.authorization &&
          req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
          return req.headers.authorization.split(" ")[1];
        }
        if (req.cookies.jwt) {
          return req.cookies.jwt;
        }
        return null;
      },
    })
    .unless({
      path: ["/api/v1/signup", "/api/v1/login"],
    })
);

app.listen(process.env.PORT, (err) => {
    if (err){
        console.log("Failed to start the server.")
    }
    console.log(`Server started successfully on ${process.env.PORT}`)
})