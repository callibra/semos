const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}../../.env` });

const databaseurl = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

exports.init = async () => {
  try {
    await mongoose.connect(databaseurl);
    console.log('Successfully conected to DATABASE');
  } catch (err) {
    console.log(err.message);
  }
};
