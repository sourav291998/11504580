var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    productid:{
        type:Number,
        required:true
    },
    productname:{
        type:String,
        required:true
    },
    productdescription:{
        type:String,
        required:true
    },
    productquantity:{
        type:String,
        required:true
    },
    productprice:{
        type:Number,
        required:true
    }

});

var User = mongoose.model('User',userSchema);
module.exports = User;
