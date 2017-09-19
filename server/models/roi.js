//schema for ROI
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roiSchema = new mongoose.Schema({
    roiId:{
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
    
});

var  roi = mongoose.model('type', roiSchema);
module.exports =  roi;