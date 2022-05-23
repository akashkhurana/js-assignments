var dbConn  = require('../db.config');

var User = function(user){
    this.username     =   user.username;
    this.password      = user.password;
}

// get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM users', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}

// get user by ID from DB
User.getUserByID = (id, result)=>{
    dbConn.query('SELECT * FROM users WHERE UserID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new user
User.createUser = (userReqData, result) =>{
    dbConn.query('INSERT INTO users SET ? ', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}

// update user
User.updateUser = (id, userReqData, result)=>{
    dbConn.query("UPDATE users SET Password WHERE id = ?", [userReqData.Password, Username, UserID], (err, res)=>{
        if(err){
            console.log('Error while updating the password');
            result(null, err);
        }else{
            console.log("Password updated successfully");
            result(null, res);
        }
    });
}

// delete user
User.deleteUser = (id, result)=>{
    dbConn.query('DELETE FROM users WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            result(null, res);
        }
    });
}

module.exports = User;