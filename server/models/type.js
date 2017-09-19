//schema for type
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeSchema = new mongoose.Schema({
 typeId:{
       type:String     
    } ,
    category: {
        type:String,
       
    }
});

var type = mongoose.model('type', typeSchema);
module.exports = type;