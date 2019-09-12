const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');

router.get('/:id',(req,res)=>{
    Contact.find({"BusinessID":req.params.id}).then((contacts)=>{

        res.json(contacts);

    }).catch(e=>res.send(e));

});


router.post('/',(req,res)=>{

    nContact = new Contact({
        Name:req.body.Name,
        Phone:req.body.Phone,
        Email:req.body.Email,
        BusinessID: req.body.BusinessID
    });

    nContact.save().then((con)=>{

        res.json(con);

    });

});

module.exports = router;