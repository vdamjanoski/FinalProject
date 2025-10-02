const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: [true, `You must enter your email`],
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, `Your email is not valid`]
    },
    password: {
        type: String,
        required: [true, `You must enter your password`]
    },
    role: {
        type: String,
        required: true,
        enum: [`startup`, `mentor`],
    },
    phone: { Number },
    skills: [ String ],
    desc: String,
    representative: String,
    address: String,
    acceptedJobs: [],
    jobsPosted: [],
    profilePic: String,
    inviteEmails: String,
})

userSchema.pre(`save`, async function (next) {
    if (!this.isModified(`password`)) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const User = mongoose.model(`User`, userSchema)

module.exports = User