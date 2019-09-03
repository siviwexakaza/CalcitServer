const mongoose = require('mongoose');
const BankSchema = mongoose.Schema({
    AccountHolder:{type:String},
    BankName:{type:String},
    AccountNumber:{type:Number},
    BranchCode:{type:Number},
    BusinessID:{type:String}
});

module.exports = mongoose.model('Bank',BankSchema);