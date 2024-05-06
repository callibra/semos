const User = require('../../../pkg/users/userSchema');
//* npm install jsonwebtoken
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1) Proveruvrame dali ima vneseno email i password
    if (!email || !password) {
      return res.status(400).send('Please provide email and password');
    }

    // 2) Proveruvame dali korisnkiot posti vo nashata data baza
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid email or password');
    }
    // 3) Sporeduvanje na passwordi
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('invalid email or password');
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, isAdmin: user.admin },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );
    // 5) pustame response
    res.status(201).json({ status: 'success', token });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
