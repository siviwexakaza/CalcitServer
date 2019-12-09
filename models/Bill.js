const mongoose = require('mongoose');
const BillSchema = mongoose.Schema({
    
    BusinessID:{type:String},
    Price:{type:Number},
    Date:{type:Date, default: Date.now},
    Due:{type:Date},
    Status: {type:String},
    InvoiceNo:{type:String}
    
    
});

module.exports = mongoose.model('Bill',BillSchema);