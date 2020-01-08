var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    first_name:String
})

var model = mongoose.model('new_user', schema);


module.exports = model
