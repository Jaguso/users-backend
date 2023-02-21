const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postalcode: {
        type: String,
        required: true
    }
});


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A first name must be provided']
    },
    lastName: {
        type: String,
        required: [true, 'A las name must be provided']
    },
    email: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    address: { 
        type: addressSchema, 
        required: true 
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User;