const User = require("../model/mentor")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.signup = async (req,res) => {
    try{
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            profilePic: req.body.profilePic,
            address: req.body.address,
            password: req.body.password,
            role: req.body.role,
            skills: req.body.skills,
            desc: req.body.desc,
            representative: req.body.representative,
            jobsPosted: req.body.jobsPosted,
            acceptedJobs: req.body.acceptedJobs,
        })
         res.status(200).json({
            status: `success`,
            data: user
        })
    } catch(err){
        res.status(500).json({
            status: `fail`,
            err: err.message
        })
    }
}

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