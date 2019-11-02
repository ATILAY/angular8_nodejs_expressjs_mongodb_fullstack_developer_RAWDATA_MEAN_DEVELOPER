var mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    itemName : {
        type: String,
        required : true,

    },
    itemDone : {
        type : Boolean,
        required : true,

    }

});

 const item = module.exports =mongoose.model('Item', itemSchema );
