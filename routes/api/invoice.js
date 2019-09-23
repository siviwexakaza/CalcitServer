const express = require('express');
const router = express.Router();
const Invoice = require('../../models/Invoice');

router.get('/business/:id',(req,res)=>{
    

    Invoice.find({"BusinessID":req.params.id}).then((invoices)=>{

        res.json(invoices);

    }).catch(e=>res.send(e));

});

router.get('/open/:id',(req,res)=>{
    

    Invoice.findById(req.params.id).then((invoices)=>{

        res.json(invoices);

    }).catch(e=>res.send(e));

});


router.get('/business/paid/:id',(req,res)=>{
    
    //Pass True to see paid invoices, False for outstanding ones

    Invoice.find({"BusinessID":req.params.id, "Paid":req.body.Status}).then((invoices)=>{

        res.json(invoices);

    }).catch(e=>res.send(e));

});


router.get('/customer/:id',(req,res)=>{

    Invoice.find({"ContactID":req.params.id}).then((invoices)=>{

        res.json(invoices);

    }).catch(e=>res.send(e));

});


router.get('/customer/paid/:id',(req,res)=>{

    //Pass True to see paid invoices, False for outstanding ones

    Invoice.find({"ContactID":req.params.id,"Paid":req.body.Status}).then((invoices)=>{

        res.json(invoices);

    }).catch(e=>res.send(e));

});


router.post('/',(req,res)=>{
    nInvoice = new Invoice({
        ContactID:req.body.ContactID,
        BusinessID:req.body.BusinessID,
        Amount:req.body.Amount,
        Due: req.body.Due,
        Paid: req.body.Paid,
        Items: req.body.Items,
        Quantities: req.body.Quantities,
        Amount: req.body.Amount
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