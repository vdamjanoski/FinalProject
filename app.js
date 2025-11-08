const express = require("express")
const dotenv = require("dotenv")
const jwt = require("express-jwt")
dotenv.config({path: `${__dirname}/config.env`})
const database = require("./database/database")
const cors = require("cors");
const auth = require("./controllers/mentorController")
const job = require("./controllers/jobController")
const application = require("./controllers/appController")
const multer = require("multer")



const app = express();
app.use(cors());
database.connectDatabase();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/uploads", express.static("public"));

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${Date.now()}.${ext}`);
  },
});


const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image!"), false);
  }
};


const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

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
app.post("/api/v1/signup", upload.single("photo"),auth.signup);
app.post("/api/v1/login", auth.login);
app.patch("/api/v1/uploadphoto/:id", upload.single("photo"), auth.uploadUserPhoto, auth.update);

app.get("/api/v1/users", auth.getUsers);
app.get("api/v1/user/:id", auth.getUser);
app.delete("/api/v1/user/:id", auth.deleteUser);
app.patch("/api/v1/updateUser/:id", auth.update)
app.get("/api/v1/getMentors", auth.getMentors)

app.post("/api/v1/job", job.createJob);
app.get("/api/v1/jobs", job.getAllJobs);
app.get("/api/v1/jobs/:id", job.getOneJob);
app.delete("/api/v1/job/:id", job.deleteJob);
app.patch("/api/v1/job/:id", job.updateJob);
app.get("/api/v1/jobs-startup", job.getAllStartupJobs)

app.post("/api/v1/application", application.create);
app.get("/api/v1/applications", application.getAllApps);
app.get("/api/v1/application", application.getApp);
app.get("/api/v1/application/mentor/:id", application.applicationByMentor);
app.delete("/api/v1/application/:id", application.deleteApp);
app.patch("/api/v1/application/:id", application.updateApp);
app.get("/api/v1/offers/mentor", application.getMentorOffersJob);
app.get("/api/v1/applications/startup", application.getApplicationsForStartup);
app.get("/api/v1/mentorsforstartup/:id", application.getMentorDetailsForStartup)

app.listen(process.env.PORT, (err) => {
    if (err){
        console.log("Failed to start the server.")
    }
    console.log(`Server started successfully on ${process.env.PORT}`)
})