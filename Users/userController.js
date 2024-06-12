const User = require('./userSchema');


//Register User
const addUser =  (req,res)=>{
    console.log(req.body);

    let newuser= new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone:req.body.phone,
        city:req.body.city,
        // posts :[]
    })

    newuser.save()

    .then(data=>{
        console.log("Saved Successfully!")
        res.json({
            status:200,
            message:"Save Successfully",
            data:data
        })
    })
    .catch(err=>{
        console.log("Failed to save")
        res.json({
            status:500,
            message:"Failed to save",
        })
    })
}

//Login User

const login = (req,res)=>{
    email = req.body.email,
    password = req.body.password

    User.findOne({email:email})
    .exec()
    .then(data=>{
        if(password == data.password) {
            console.log("Logged in successfully")
            res.json({
                status:200,
                message:"User logged in successfully",
                data:data
            })
            }
        else{
            res.json({
                status:500,
                message:"Invalid password"
            })
            }
    })
    .catch(err=>{
        res.json({status:500,
            message:"invalid password"
    })
    
    })
}


// Admin Panel 

const ViewUser = (req,res)=>{
    User.find({})
    .exec()
    .then(data=>{
        console.log(data)
        res.json({
            status:200,
            message:"Data Fetched successfully",
            data:data
        })
    })
    .catch(err=>{
        console.log(err)
        res.json({
            status:500,
            message:"Error fetching data"
        })
    })
}

const delUser = (req,res) =>{
    User.findByIdAndDelete({
        _id:req.params.id
    })
    .exec()
    .then(data =>{
        console.log(data)
        res.json({
            status:200,
            message:"User deleted successfully",
            data:data
        })
    })
    .catch(err =>{
        console.log(err)
        res.json({
            status:500,
            message:"Error deleting user"
        })
    })
}

const idfetch = (req,res) =>{
    User
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

const editUser = (req, res) => {
    User
    .findByIdAndUpdate(
        { _id : req.params.id },
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            city: req.body.city,
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


module.exports ={addUser,login,ViewUser,delUser,idfetch, editUser}