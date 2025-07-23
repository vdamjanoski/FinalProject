const User = require("../model/mentor")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const promisify = require("util")

exports.signup = async (req,res) => {
    try{
        await User.create({
            NameSurname: req.body.NameSurname,
            phone: req.body.phone,
            email: req.body.email
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
            id: user._id, NameSurname: user.NameSurname, email: user.email, role: user.role
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