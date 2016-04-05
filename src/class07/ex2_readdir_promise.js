'use strict';

const fs =  require('fs');

/**
 * read a directory from the path,
 * and return the content of the directory
 *
 * @param {String} path
 * @return {Promise} readdir
 */
function readDir(path) {
  return new Promise(function (resolve, reject) {
    fs.readdir(path, function (err, res) {
      err ? reject(err) : resolve(res);
    });
  });
}

module.exports = readDir;
