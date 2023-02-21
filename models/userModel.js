const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A first name must be provided']
    },
    lastName: {
        type: String,
        required: [true, 'A las name must be provided']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;