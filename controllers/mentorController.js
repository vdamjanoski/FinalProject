const User = require("../model/mentor")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      phone,
      skills,
      desc,
      representative,
      address,
    } = req.body;
    console.log("Received request!");

    if (!req.body) {
      console.error("req.body is undefined");
      return res.status(400).json({ message: "Missing body!" });
    }

    console.log("Request body:", req.body);

    if (
      role === "mentor" &&
      (req.body.representative || req.body.address || req.body.jobsPosted)
    ) {
      return res.status(400)
    }

    if (
      role === "startup" &&
      (req.body.skills || req.body.phone || req.body.acceptedJobs)
    ) {
      return res.status(400)
    }

    const newUser = await User.create({
      name: name || "",
      email,
      password,
      role,
      phone,
      skills,
      desc,
      representative,
      address,  
    });

    res.status(201).json({
      status: "success",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
    try {
        const {email,password} = req.body;
        if (!email || !password){
            return res.status(400).send(`Please provide email and password`)
        }
        
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).send(`Invalid email or password`)
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid){
            return res.status(400).send(`Invalid email or password`)
        }

        const token = jwt.sign({
            id: user._id, name: user.name, email: user.email, role: user.role
        }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES});

        res.cookie(`jwt`, token, {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 10000),
            secure: false,
            httpOnly: true,
        })
        res.status(200).json({
            status: `success`,
            token,
        })
        
    } catch (err) {
        res.status(500).json({
            status: `fail`,
            err: err.message
        })
    }
}