var aes256 = require('aes256');
var algorithm = 'aes-256-ctr';
var privateKey = '37LvDSm4XvjYOh9Y';
var crypto = require('crypto');



exports.decrypt = function decrypt(password) {
    var decipher = crypto.createDecipher(algorithm, privateKey);
    var dec = decipher.update(password, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// method to encrypt data(password)
exports.encrypt = function encrypt(password) {
    var cipher = crypto.createCipher(algorithm, privateKey);
    var crypted = cipher.update(password, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}