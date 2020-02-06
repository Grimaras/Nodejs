const mongoose = require('mongoose');

//schema
const cakeSchema = new mongoose.Schema({
    name : {
        type : String,
        minlength : 4,
        maxlength : 200,
        required : true,
    },
    baker : {
        type : String,
        minlength : 8,
        maxlength : 300,
        required: true,
    },
    ingredients : {
        type : [String],
        required : true,
        enum: ['chocolate', 'flour', 'gluten free flour', 'eggs', 'milk', 'strawberry', 'vanilla', 'sugar'],
    },
    stock : {
        type : Number,
        required : true,
        min : 0,
    },
    expirationDate: {
        type : Date,
        default : Date.now(),
    },
    isGlutenFree : {
        type : Boolean,
        default: false,
    },
});

//model
const Cake = mongoose.model('Cake', cakeSchema);


//Export
module.exports = Cake;