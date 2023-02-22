const User = require('../models/userModel');


exports.getAllUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
    
};

exports.createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.getSingleUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ 
                status: 'fail',
                message: 'User not found' 
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.updateUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ 
                status: 'fail',
                message: 'User not found' 
            });
        }
        const { firstName, lastName, email, birthDate, address } = req.body;
        const { street, city, country, postalcode } = address;
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.birthDate = birthDate || user.birthDate;
        user.address.street = street || user.address.street;
        user.address.city = city || user.address.street;
        user.address.country = country || user.address.country;
        user.address.postalcode = postalcode || user.address.postalcode;

        await user.save();

        // const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
      }
}

exports.deleteUser = async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ 
                status: 'fail',
                message: 'User not found' 
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });      
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}
