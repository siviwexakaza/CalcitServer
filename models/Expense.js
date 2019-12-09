const mongoose = require('mongoose');
const ExpenseSchema = mongoose.Schema({
    
    BusinessID:{type:String},
    Price:{type:Number},
    Date:{type:Date, default: Date.now},
    Status: {type:String},
    Paid:{type:String}
    
    
});

module.exports = mongoose.model('Expense',ExpenseSchema);