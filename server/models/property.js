//schema for property
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propertySchema = new mongoose.Schema({
    propertyId:{
       type:String     
    } ,
    typeId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'type'
    }],
    roiId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roi'
    }],
    flipId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'flip'
    }],
    paymentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment'
    }],
    pricedetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pricedetails'
    },
    basicimformation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'basicimformation'
    },
    exterior: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'exterior'
    },
    interior: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'interior'
    },
    other: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'other'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    },
    legal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'legal'
    },
    building: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'building'
    },
    status: {
        type: Number,
        enum: [1, 2, 3], //1-available 2-alreadytaken 3-pending
        default: 1,
    },
    areaspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'areaspace',
    },
    utilities: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'utilities',
    }
});

var Property = mongoose.model('property', propertySchema);

module.exports = Property;