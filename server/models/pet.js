var mongoose = require("mongoose");
var validate = require("mongoose-validator");
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        required: [true, "name is required"],
        type: String,
        minlength: 3,
        unique: true
    },
    type: {
        required: [true, "type is required"],
        type: String,
        minlength: 3
    },
    description: {
        required: [true, "description is required"],
        type: String,
        minlength: 3
    },
    skill1: {
        type: String,
        default: ""
    },
    skill2: {
        type: String,
        default: ""
    },
    skill3: {
        type: String,
        default: ""
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true});
    
PetSchema.plugin(uniqueValidator, { message: 'Pet name must be unique.' });

mongoose.model("Pet", PetSchema);