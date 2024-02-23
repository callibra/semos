const mongoose = require('mongoose');
//* Ovaa bibliboteka e nameneta za validacija na nashite informacii
// npm install validator
const validator = require('validator');
//* Ovaa biblioteka e nameneta za kriptiranje na nashite podatoci
// npm install bcryptjs
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true, //mora da e so mali bukvi
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [3, 'Password must be at least 8 caractters'],
    // validate: [validator.isStrongPassword, 'Please provide a strong password'],
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 12);
//     next();
//   }
//   next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
