const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  middleName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
  },
  phoneNumber: {
    type: String,
    trim: true,
    match: [/^\d{10}$/, 'Please use a valid 10-digit phone number.']
  }
}, {
  timestamps: true
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = {User};
