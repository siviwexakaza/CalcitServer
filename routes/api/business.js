const express = require('express');
const router = express.Router();
const Business = require('../../models/Business');

router.get('/:id',(req,res)=>{
    Business.find({"Username":req.params.id}).then((businesses)=>{

        res.json(businesses);

    }).catch(err=>res.send(err));
});

router.put('/:id',(req,res)=>{
    Business.findById(req.params.id).then((business)=>{

        business.Address=req.body.Address;
        business.Name = req.body.Name;
        business.Phone = req.body.Phone;

        business.save((newBiz)=>{
            res.json(newBiz);
        });
        //res.json(businesses);

    }).catch(err=>res.send(err));
});

router.post('/GetBusinessByName',(req,res)=>{
    Business.find({"Username":req.body.Username , "Name": req.body.Name}).then((biz)=>{
        res.json(biz);
    });
});

router.get('/view/:id',(req,res)=>{
    Business.find({"_id":req.params.id}).then((businesses)=>{

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