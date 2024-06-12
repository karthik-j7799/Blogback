const mongoose = require("mongoose");
const Post = require('./postSchema');



const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
    cb(null, "./upload");
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).single("image");

//adding a post

const newPost = (req,res) => {
    console.log(req.body);

    let newpost = new Post({
        user : req.params.id,
        title : req.body.title,
        content : req.body.content,
        image : req.file
    });
    
    newpost.save()

    .then((data)=>{
        console.log("Posted Successfully")
        res.json({
            status:200,
            message:"Posted successfully",
            data:data
        })
    })
    .catch((err)=>{
        console.log("failed to save")
        res.json({
            status:500,
            message:"Failed to post"
        })
    })
}

//viewing a post

const viewPost = (req,res)=>{
    Post.find({})
    .populate("user")
    .exec()
    .then((data)=>{
        console.log(data);
        res.json({
            status:200,
            message:"post viewed successfully",
            data:data
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            status:500,
            message : "Error fetching data"
        })
    })
}

const myPost = (req,res)=>{

    Post
    .find({ user: req.params.id })
    .populate("user")
    .exec()
    .then((data) => {
        console.log(data);
        res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data,
    });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err,
      });
    });
}
const editPost = (req, res) => {
    Post
    .findByIdAndUpdate(
        { _id : req.params.id },
        {   
        
            title: req.body.title,
            content: req.body.content,
            image: req.file,
            
        }
    )
    .exec()
    .then((data) => {
        res.json({
            status: 200,
            msg: "Updated successfully",
            data:data
        });
    })
    .catch((err) => {
        res.json({
            status: 500,
            msg: "Data not Updated",
            Error: err,
        });
    });
};
const postidfetch = (req,res) =>{
    Post
    .findById({ _id: req.params.id })
    .exec()
    .then((data) => {
        console.log(data);
        res.json({
            status: 200,
            msg: "Data obtained successfully",
            data: data,
        });
    })
    .catch((err) => {
        console.log(err);
        res.json({
            status: 500,
            msg: "No Data obtained",
            Error: err,
        });
    });
    
}

const delPost = (req, res) => {
    Post
    .findByIdAndDelete(
        { _id : req.params.id },
        {   
        
            title: req.body.title,
            content: req.body.content,
            image: req.file,
            
        }
    )
    .exec()
    .then((data) => {
        res.json({
            status: 200,
            msg: "Deleted successfully",
            data:data
        });
    })
    .catch((err) => {
        res.json({
            status: 500,
            msg: "Data not Deleted",
            Error: err,
        });
    });
}


module.exports ={newPost,upload,viewPost,myPost,editPost,postidfetch,delPost}