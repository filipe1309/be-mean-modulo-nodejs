'use strict';

const callback = require('./../actions/action-callback-http-200');
const getQuery = require('./../actions/action-get-query-http');

module.exports =  (Organism) => {
  return (req, res) => {
    const query = getQuery(req.url);
    Organism.find(query, (err, data) => callback(err, data, res));
  };
};
