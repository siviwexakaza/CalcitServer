const express = require('express');
const router = express.Router();
const Bank = require('../../models/Bank');

router.get('/:id',(req,res)=>{

    Bank.find({"BusinessID":req.params.id}).then((banks)=>{

        res.json(banks);

    }).catch(e=>res.send(e));

});

router.post('/',(req,res)=>{
    nBank = new Bank({
        AccountHolder: req.body.AccountHolder,
        BankName:req.body.BankName,
        AccountNumber:req.body.AccountNumber,
        BranchCode:req.body.BranchCode,
        BusinessID:req.body.BusinessID
    });

    nBank.save().then(bank=>res.json(bank)).catch(e=>res.send(e));

});

router.put('/:id',(req,res)=>{

    Bank.findById(req.params.id).then((bank)=>{
        bank.AccountHolder=req.body.AccountHolder;
        bank.BankName=req.body.BankName;
        bank.BranchCode = req.body.BranchCode;

        bank.save().then(nBank=>res.json(nBank));

    });


});

module.exports = router;