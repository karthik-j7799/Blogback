const express = require('express')
const router = express.Router();


const ControllerU = require('./Users/userController')
const ControllerP = require('./Posts/postController')




//users 

router.post('/addUser' , ControllerU.addUser);
router.post('/login' , ControllerU.login);
router.post('/ViewUser' , ControllerU.ViewUser);
router.post('/delUser/:id' , ControllerU.delUser);
router.post('/idfetch/:id' , ControllerU.idfetch);
router.post('/editUser/:id', ControllerU.editUser)


//posts 

router.post('/newPost/:id' ,ControllerP.upload, ControllerP.newPost);
router.post('/viewPost' , ControllerP.viewPost);
router.post('/myPost/:id' , ControllerP.myPost);
router.post('/editPost/:id' , ControllerP.editPost);
router.post('/postidfetch/:id' , ControllerP.postidfetch);
router.post('/delPost/:id' , ControllerP.delPost);






module.exports =router;