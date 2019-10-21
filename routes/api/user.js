const express = require('express');
const route = express.Router();
const User = require('../../models/User');
const nodemailer = require('nodemailer');



//Forgot

route.post('/forgot',(req,res)=>{

    User.find({"Email" : req.body.Email}).then((user)=>{
        if(user.length >0){

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'siviwexakaza@gmail.com',
                    pass: 'xxxxx'
                }
            });
            
            const mailOptions = {
                from: '"Siviwe Xakaza" siviwexakaza@gmail.com', // sender address
                to: `${req.body.Email}`, // list of receivers
                subject: 'Calcit Password Reminder', // Subject line
                text: `Hello ${user[0].Name}, your password is ${user[0].Password}`// plain text body
            };

            
            
            transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                res.json([{"Message":"Email not found","Status":"Failed"}]);
                else
                res.json([{"Message":"Password Sent","Status":"Success"}]);
            });


        }else{

            res.json([{"Error":"Email not found","Status":"Failed"},{"Action":"Try again"}]);
             
        }
    });
    
    
});


//Login
route.post('/login',(req,res)=>{
    

    User.find({"Username": req.body.Username, "Password": req.body.Password}).then((user)=>{

        if(user.length > 0){
            res.json(user);
        }else{
            res.json([{"Error":"Incorrect username/password","Status":"Failed"},{"Action":"Try again"}]);
        }

    }).catch(err=> res.send(err));

});

//get user object


route.get('/profile/:id',(req,res)=>{
    User.find({"Username":req.params.id}).then((usr)=>{
        res.json(usr);

    }).catch(e=>res.send(e));
});

route.put('/profile/:id',(req,res)=>{
    User.findById(req.params.id).then((usr)=>{
        usr.Name = req.body.Name;
        usr.Surname = req.body.Surname;
        usr.Phone = req.body.Phone;

        usr.save().then((newUser)=>res.json(newUser))
        .catch(e=>res.send(e));

    }).catch(e=>res.send(e));
});

//Register
route.post('/register',(req,res)=>{

    User.find({"Username": req.body.Username}).then((user)=>{

        if(user.length > 0){

            res.json([{"Error":"Username already taken","Status":"Failed"},{"Action":"Try again"}]);

        }else{

            nUser = new User({
                Name : req.body.Name,
                Surname: req.body.Surname,
                Email: req.body.Email,
                Password: req.body.Password,
                Username: req.body.Username,
                Phone: req.body.Phone
            });
        
            nUser.save().then((newUser)=>{
        
                res.json(newUser);
        
            });

        }

    });

    

});

module.exports = route;
