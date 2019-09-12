const mongoose = require('mongoose');
const ConactSchema = mongoose.Schema({
    Name:{type:String},
    Phone:{type:String},
    Email:{type:String},
    BusinessID:{type:String}
});

module.exports = mongoose.model('Contact',ConactSchema);