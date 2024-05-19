// Importing the userModel from the User.model file
const mongoose = require('mongoose');
let { User } = require('../module/User/User.model');

let createTable = async (req, res) => {
    try {
        await User.createCollection()
        res.send('user table created')
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = { createTable };
