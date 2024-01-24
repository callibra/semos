const fs = require('fs');

// fs.append
function append(file, data, options) {
    return new Promise((resolve, reject) => {
        fs.appendFileSync(file, data, options, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

// fs.unlink
function unlink(path) {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

// fs.exist
function exists(path) {
    return new Promise((resolve) => {
        resolve(fs.existsSync(path));
    });
}

// fs.readdir
function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (error, files) => {
            if (error) {
                reject(error);
            } else {
                resolve(files);
            }
        });
    });
}

// fs.mkdir
function mkdir(path, options) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, options, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

// fs.rmdir
function rmdir(path, options) {
    return new Promise((resolve, reject) => {
        fs.rmdir(path, options, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

// fs.rename
function rename(oldPath, newPath) {
    return new Promise((resolve, reject) => {
        fs.rename(oldPath, newPath, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    append,
    unlink,
    exists,
    readdir,
    mkdir,
    rmdir,
    rename
};
