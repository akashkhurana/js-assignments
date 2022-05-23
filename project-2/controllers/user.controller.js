
const UserModel = require('../models/usermodel');

// get all User list
exports.getUserList = (req, res)=> {
    //console.log('here all Users list');
    UserModel.getAllUsers((err, users) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users)
    })
}

// get User by ID
exports.getUserByID = (req, res)=>{
    //console.log('get emp by id');
    UserModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
}

// create new User
exports.createNewUser = (req, res) =>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User Created Successfully', data: user.insertId})
        })
    }
}

// update user
exports.updateUser = (req, res)=>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}

// delete User
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'User deleted successully!'});
    })
}