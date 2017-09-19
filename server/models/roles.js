var mongoose = require('mongoose');

exports.roles = mongoose.model('roles', {
    roleId: String,
    role: String,
    permissionId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'permissions'
    }]

});