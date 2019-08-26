const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/:id',(req,res)=>{
    Product.find({"BusinessID":req.params.id}).then((prods)=>{

        res.json(prods);

    }).catch(err=>res.status(400).json(err));
});

router.post('/',(req,res)=>{
    nProduct = new Product({
        Name: req.body.Name,
        Details: req.body.Details,
        Cost: req.body.Cost,
        BusinessID: req.body.BusinessID
    });

    nProduct.save().then((newProd)=>{
        res.json(newProd);
    }).catch(err=>res.send(err));
});

module.exports = router;