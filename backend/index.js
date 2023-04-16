const express = require("express");
const app = express();
const conn = require("./database/databaseConn.js");
const Post = require("./models/createPost.js");
const cors = require("cors")
conn();
app.use(express.json());

app.use(cors());

app.get("/", (req, res)=> {
    res.send("Hello");
})

app.post("/job", async (req, res)=> {
    try{

        const {title, description, skills, date} = req.body;
        const job = await Post.create({
            title,
            description,
            skills,
            date
        })
        res.status(200).json({
            message:"success",
            job
        })
    }catch(e) {
        res.status(409).json({
            message:e.message
        })
    }

} )


app.get("/jobs", async (req, res)=> {
    try {
        const jobs = await Post.find();

        res.status(200).json({
            message:"success",
            jobs
        })
    }catch(e){
        res.status(409).json({
            message: e.message
        })
    }
})

app.listen(8000, ()=>console.log("App is running on port 8000"));

