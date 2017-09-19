//schema for payment
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paymentSchema = new mongoose.Schema({
    paymentId:{
       type:String     
    } ,
    propertyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property'
    }],
    payMode: {
        type: string
    },
    payDate: {
        type: Date
    },

});

var Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment;