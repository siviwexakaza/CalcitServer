const mongoose = require('mongoose');
const BusinessSchema = mongoose.Schema({
    Name:{type:String},
    Address:{type:String},
    Phone:{type:String},
    Email:{type:String},
    Username:{type:String}
});
module.exports = mongoose.model('Business',BusinessSchema);