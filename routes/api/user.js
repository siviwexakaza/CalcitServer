const express = require('express');
const route = express.Router();
const User = require('../../models/User');


//Login
route.get('/',(req,res)=>{
    

    User.find({"Username": req.body.Username, "Password": req.body.Password}).then((user)=>{

        if(user.length > 0){
            res.json(user);
        }else{
            res.json([{"Error":"Incorrect username/password","Status":"Failed"},{"Action":"Try again"}]);
        }



    }).catch(err=> res.send(err));

});

//Register
route.post('/',(req,res)=>{

    nUser = new User({
        Name : req.body.Name,
        Surname: req.body.Surname,
        Email: req.body.Email,
        Password: req.body.Password,
        Username: req.body.Username
    });

    nUser.save().then((newUser)=>{

        res.json(newUser);

    });

});

module.exports = route;
