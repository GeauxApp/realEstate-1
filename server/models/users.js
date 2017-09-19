var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*-------USER TABLE------*/
var userSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    token: {
        type: String,
        default: ""
    },
    city: {
        type: String
    },
    contact: {
        type: Number
    },
    address: {
        street: String,
        city: String,
        country: String,
        zipcode: Number
    },
    profileImage: Object,
    membership: {
        type: String
    },
    createdAt: {
        type: Date
    },
    uodatedAt: {
        type: Date
    },
    deletedAt: {
        type: Date
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roles'
    },
    subscriptionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subscription'
    },
    activateUser: {
        type: Boolean,
        default: false
    },
    verificationTokenEmailedToUser: {
        type: String,
        default: ""
    }



});


var User = mongoose.model('User', userSchema);
module.exports = User;