const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/:id',(req,res)=>{
    Product.find({"BusinessID":req.params.id}).then((prods)=>{

        res.json(prods);

    }).catch(err=>res.status(400).json(err));
});

router.get('/product/:id',(req,res)=>{
    Product.findById(req.params.id).then((prod)=>{
        res.json(prod);

    }).catch(e=>res.send(e));
});


router.post('/',(req,res)=>{
    nProduct = new Product({
        Name: req.body.Name,
        Details: req.body.Details,
        Cost: req.body.Cost,
        BusinessID: req.body.BusinessID,
        Username: req.body.Username
    });

    nProduct.save().then((newProd)=>{
        res.json(newProd);
    }).catch(err=>res.send(err));
});

router.put('/:id',(req,res)=>{

    Product.findById(req.params.id).then((product)=>{
        product.Name = req.body.Name;
        product.Details = req.body.Details;
        product.Cost = req.body.Cost;
        product.save().then((newProduct)=>res.json(newProduct)).catch(e=>res.send(e));

    }).catch(e=>res.send(e));

});

router.delete('/:id',(req,res)=>{

    Product.findById(req.params.id).then((prod)=>{

        prod.delete().then((p)=>res.json(p)).catch(e=>res.send(e));

    }).catch(err=>res.status(400).json(err));

});

module.exports = router;