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
        Amount:req.body.Amount,
        Due: req.body.Due,
        Paid: req.body.Paid
    });

    nInvoice.save().then((newInvoice)=>{

        res.json(newInvoice);

    }).catch(e=>res.send(e));
});

router.put('/pay/:id',(req,res)=>{
    Invoice.findById(req.params.id).then((invoice)=>{
        invoice.Paid = "True";

        invoice.save().then((newInvoice)=>{
            res.json(newInvoice);
        }).catch(e=>res.send(e));
    })
    .catch(e=>res.send(e));
});

module.exports = router;