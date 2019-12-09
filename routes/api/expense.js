const express = require('express');
const router = express.Router();
const Expense = require('../../models/Expense');

router.get('/:id',(req,res)=>{
    Expense.find({"BusinessID":req.params.id}).then((prods)=>{

        res.json(prods);

    }).catch(err=>res.status(400).json(err));
});


router.post('/',(req,res)=>{
    nProduct = new Expense({
        Name: req.body.Name,
        Price: req.body.Price,
        BusinessID: req.body.BusinessID,
        Status: req.body.Status

    });

    nProduct.save().then((newProd)=>{
        res.json(newProd);
    }).catch(err=>res.send(err));
});



router.delete('/:id',(req,res)=>{

    Expense.findById(req.params.id).then((prod)=>{

        prod.delete().then((p)=>res.json(p)).catch(e=>res.send(e));

    }).catch(err=>res.status(400).json(err));

});

module.exports = router;