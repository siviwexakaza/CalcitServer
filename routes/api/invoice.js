const express = require('express');
const router = express.Router();
const Invoice = require('../../models/Invoice');

router.get('/business/:id',(req,res)=>{
    

    Invoice.find({"BusinessID":req.params.id}).then((invoices)=>{

        res.json(invoices);

    }).catch(e=>res.send(e));

});

router.get('/customer/:id',(req,res)=>{

    Invoice.find({"ContactID":req.params.id}).then((invoices)=>{

        res.json(invoices);

    }).catch(e=>res.send(e));

});

router.post('/',(req,res)=>{
    nInvoice = new Invoice({
        ContactID:req.body.ContactID,
        BusinessID:req.body.BusinessID,
        Amount:req.body.Amount
    });

    nInvoice.save().then((newInvoice)=>{

        res.json(newInvoice);

    }).catch(e=>res.send(e));
});

module.exports = router;