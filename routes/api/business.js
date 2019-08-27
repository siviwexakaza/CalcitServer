const express = require('express');
const router = express.Router();
const Business = require('../../models/Business');

router.get('/:id',(req,res)=>{
    Business.find({"Username":req.params.id}).then((businesses)=>{

        res.json(businesses);

    }).catch(err=>res.send(err));
});

router.post('/',(req,res)=>{
    nBusiness = new Business({
        Name:req.body.Name,
        Address: req.body.Address,
        Phone:req.body.Phone,
        Email:req.body.Email,
        Username:req.body.Username
    });

    nBusiness.save().then(d=>res.json(d)).catch(e=>res.send(e));

});

module.exports = router;