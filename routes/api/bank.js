const express = require('express');
const router = express.Router();
const Bank = require('../../models/Bank');

router.get('/:id',(req,res)=>{

    Bank.find({"BusinessID":req.params.id}).then((banks)=>{

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

});

module.exports = router;