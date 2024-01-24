const fs = require('fs');

// Ja cita sodrzinata na fajlot
exports.fileRead = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

// Pisuva podatoci vnatre vo fajlot
exports.fileWrite = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, 'utf-8', (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
};
