const mongoose = require('mongoose');
const InvoiceSchema = mongoose.Schema({
    ContactID:{type:String},
    BusinessID:{type:String},
    Amount:{type:Number},
    Date:{type:Date, default: Date.now}
});

module.exports = mongoose.model('Invoice',InvoiceSchema);