const express = require('express');
const router = express.Router();
const Bill = require('../../models/Bill');

router.get('/:id',(req,res)=>{
    Bill.find({"BusinessID":req.params.id}).then((prods)=>{

        res.json(prods);

    }).catch(err=>res.status(400).json(err));
});


router.post('/',(req,res)=>{
    nProduct = new Bill({
        Name: req.body.Name,
        Supplier: req.body.Supplier,
        Price: req.body.Price,
        BusinessID: req.body.BusinessID,
        InvoiceNo: req.body.InvoiceNo,
        Due: req.body.Due,
        Status: req.body.Status

    });

    nProduct.save().then((newProd)=>{
        res.json(newProd);
    }).catch(err=>res.send(err));
});



router.delete('/:id',(req,res)=>{

    Bill.findById(req.params.id).then((prod)=>{

        prod.delete().then((p)=>res.json(p)).catch(e=>res.send(e));

    }).catch(err=>res.status(400).json(err));

});

module.exports = router;