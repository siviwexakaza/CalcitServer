const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({

    Name:{type: String},
    Details:{type:String},
    Cost:{type:Number},
    BusinessID:{type:String},
    Username:{type:String}

});

module.exports = mongoose.model('Product',ProductSchema);