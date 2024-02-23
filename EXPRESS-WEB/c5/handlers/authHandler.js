//npm install jsonwebtoken
const jwt = require('jsonwebtoken');
const User = require('../pkg/users/userSchema');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    //! Kreiranje na token
    const token = jwt.sign(
      {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      secure: false,
      httpOnly: true,
    });

    //!Isprakajnje na token zaedno so se korisnicki informacii
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //1. Proveruvame dali ima vneseno passvord i email
    if (!email || !password) {
      return res.status(400).send('Please provide email and password!');
    }
    //2. Proveruvame dali korisnikot postoi
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }
    //3. Sporeduvame pasvord
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid email or password!');
    }
    //4. Se generira i isprakja token
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

    //5. Se isprakja cookies so tokenot
    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      secure: false,
      httpOnly: true,
    });

    //6. Se isprakja finalen odgovor so status i token
    res.status(201).json({
      status: 'success',
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Internal server error');
  }
};

exports.protect = async (req, res, next) => {
  try {
    // 1) Go zemame tokenot i proveruvame dali e tamu

    let token;

    if (req.headers.authorization) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return res.status(500).send('You are not logged in! please log in');
    }

    // function verifyToken(token) {
    //   return new Promise((resolve, reject) => {
    //     jwt.verify(token, process.env.JWT_SECRET, (err, decodedtoken) => {
    //       if (err) {
    //         reject(new Error('Token verification failed'));
    //       } else {
    //         resolve(decodedToken);
    //       }
    //     });
    //   });
    // }

    //!
    // const verifyAsync = promisify(jwt.verify);
    // const decoded = await verifyAsync(token, process.env.JWT_SECRET);
    //!

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Proveruvame dali koisnikot posti
    const userTrue = await User.findById(decoded.id);
    if (!userTrue) {
      return res.status(401).send('User doesnt longer exist');
    }

    req.auth = userTrue;
    next();
  } catch (err) {
    return res.status(500).send('Internal server error');
  }
};

exports.restrict = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.auth.role)) {
      return res.status(500).send('You dont have access');
    }
    next();
  };
};
