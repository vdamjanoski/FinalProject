const Application = require("../model/applicationSchema");
const Job = require("../model/jobSchema");
const User = require("../model/mentor");

exports.create = async (req,res) => {
    try {
        const userId = req.auth.id;
        const {jobId, mentorId, jobData} = req.body;
        const userRole = req.auth.role;

        let newApp;

        if (userRole === 'mentor'){
            if(!jobId) {
                return res.status(400).json({
                    status: "Fail",
                    message: "Please enter your Job Id"
                })
            }
            const job = await Job.findById(jobId)
            if(!job) {
                return res.status(400).json({
                    status: "Fail",
                    message: "Job not found!"
                })
            }
            const companyId = job.companyId;
                newApp = await Application.create({
                mentorId: userId,
                jobId,
                companyId,
                applicationType: "mentorToCompany"
            });
            
        } else if(userRole === "startup"){
            if (!mentorId) {
                return res.status(400).json({
                    status: "Fail",
                    message: "Please enter your Mentor Id"
                })
            }
            const mentor = await User.findById(mentorId)
            if (!mentor){
                return res.status(400).json({
                    status: "Fail",
                    message: "Mentor not found!"
                })
            }
            let newJob = jobId;

            if (!jobId && jobData){
                const job = await Job.create({
                    ...jobData,
                    companyId: userId,
                })
                newJob = job._id;
            } else if (!jobId){
                return res.status(400).json({
                    status: "Fail",
                    message: "Please enter your Job Id"
                })
            }

            newApp = await Application.create({
                mentorId,
                companyId: userId,
                jobId: newJob,
                applicationType: "companyToMentor",
                status: "pending"
            })
        } else {
            return res.status(400).json({
                    status: "Fail",
                    message: "Fail"
                })
        }
        res.status(200).json({
            status: "Success",
            data: { newApp }
        })
        console.log(newApp)

    } catch (err) {
        res.status(500).json({
            status: "fail",
            err: err.message
        });
    }
}