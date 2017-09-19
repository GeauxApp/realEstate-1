var mongoose = require('mongoose');

exports.permissions = mongoose.model('permissions', {
    permissionId: String,
    permissionName: String,
   status: {
        type: Boolean,
        default: false
    },
    createdAt: Date,
    modifiedAt: Date
});