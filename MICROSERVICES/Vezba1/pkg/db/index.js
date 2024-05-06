//* npm install mongoose
const mongoose = require('mongoose');
//* npm install dotenv
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../config/config.env` });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

exports.init = async () => {
  try {
    await mongoose.connect(DB);
    console.log('Successfully connected to database');
  } catch (err) {
    console.log(err.message);
  }
};
