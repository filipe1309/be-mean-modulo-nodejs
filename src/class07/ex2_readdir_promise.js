'use strict';

const fs =  require('fs');

function readDir(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, res) {
            err ? reject(err) : resolve(res);
        });
    });
}

module.exports = readDir;
