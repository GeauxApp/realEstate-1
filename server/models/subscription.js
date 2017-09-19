//schema for subscription
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subscriptionSchema = new mongoose.Schema({
 subscriptionId:{
       type:String     
    } ,
    subscriptiondate: {
        type:Date,
       
    }
});

var  subscription = mongoose.model('type', subscriptionSchema);
module.exports =  subscription;