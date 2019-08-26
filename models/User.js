const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    Name:{type:String},
    Surname:{type:String},
    Email:{type: String},
    Password:{type:String},
    Username : {type:String},
    Phone:{type:String}
    
});

module.exports = mongoose.model('User',UserSchema);