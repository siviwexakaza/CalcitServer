const mongoose = require('mongoose');
const InvoiceSchema = mongoose.Schema({
    ContactID:{type:String},
    BusinessID:{type:String},
    Amount:{type:Number},
    Date:{type:Date, default: Date.now},
    Due: {type:String},
    Paid:{type:String},
    Items: {type:Array},
    Quantities:{type:Array},
    Amount:{type:Array}
    
});

module.exports = mongoose.model('Invoice',InvoiceSchema);