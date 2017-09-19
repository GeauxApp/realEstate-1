//schema for FLIP
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flipSchema = new mongoose.Schema({
    flipId:{
       type:String     
    } ,
    propertyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property'
    }],
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    flipRange: {
        type: Number,
       
    }
});

var  flip = mongoose.model('type', flipSchema);
module.exports =  flip;