const mongoose = require('mongoose');
const ConactSchema = mongoose.Schema({
    Name:{type:String},
    Phone:{type:Number},
    Email:{type:String},
    BusinessID:{type:String}
});

module.exports = mongoose.model('Contact',ConactSchema);