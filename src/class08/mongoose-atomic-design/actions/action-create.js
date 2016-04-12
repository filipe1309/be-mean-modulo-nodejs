'use strict';

const callback = require('./../actions/action-callback-http-200');
const getQuery = require('./../actions/action-get-query-http');

module.exports = (Organism) => {
  return (req, res) => {
    let queryData = '';
    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const obj = querystring.parse(queryData);
      Organism.create(obj, (err, data) => callback(err, data, res));
    });
  };
}
