const User = require('../models/User');


const getUsers = async (req, res) => {
    try {
        const userData = await User.find();

        res.json(userData);

    } catch (err) {
        
        res.status(500).json(err);
    }
};

const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).select('-__v');


        if (! user) {
            return res.status(404).json({message: 'No user with that id'});
        }
        res.json(user);
    } catch (err) {

        res.status(500).json(err);
    }
}

const newUser = async (req, res) => {
    try {
        const newUserData = await User.create(req.body);

        if (!req.body) {
            return res.status(500).json({message: 'Please fill out all required data!'})
        }
        res.json(newUserData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

const deleteUser = async (req, res) => {
    try {

        const deleteUserData = await User.findOneAndDelete({_id: req.params.userId});

        if (!deleteUserData) {
            res.status(404).json({message: 'Oops! No User with that ID'});
        }
        res.json({message: 'User deleted'});
    } catch (err) {
        
        res.status(500).json(err);
    }
}

const updateUser = async (req, res) => {
    try {
        const updateUserData = await User.findOneAndUpdate({
            _id: req.params.userId
        }, {
            $set: req.body
        }, {
            runValidators: true,
            new: true
        });
        if (!updateUserData) {
            res.status(404).json({message: 'no user with that ID'});
        }
        res.json(updateUserData)
    } catch (err) {
        
        res.status(500).json(err);
    }
}

module.exports = {
    getUsers,
    getSingleUser,
    newUser,
    deleteUser,
    updateUser
}
