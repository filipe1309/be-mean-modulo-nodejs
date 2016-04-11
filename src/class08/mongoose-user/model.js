'use strict';

const url = require('url');
const mongoose = require('mongoose');
const querystring = require('querystring');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);

const callback = (err, data, res) => {
  if (err) return console.log('Erro', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
}

const getQuery = (_url) => {
  // via get/querystring
  const url_parts = url.parse(_url);
  return querystring.parse(url_parts.query);
}

const create = (req, res) => {
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const obj = querystring.parse(queryData);
    User.create(obj, (err, data) => callback(err, data, res));
  });
};

const find = (req, res) => {
  const query = getQuery(req.url);
  User.find(query, (err, data) => callback(err, data, res));
};

const findOne = (req, res) => {
  const query = getQuery(req.url);
  User.findOne(query, (err, data) => callback(err, data, res));
};

const update = (req, res) => {
  let queryData = '';

  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    // via post/body
    const mod = querystring.parse(queryData);
    const query = getQuery(req.url);
    User.update(query, mod, (err, data) => callback(err, data, res));
  });
};

const remove = (req, res) => {
  const query = getQuery(req.url);
  User.remove(query, (err, data) => callback(err, data, res));
};

const CRUD = {
  create
, find
, findOne
, update
, remove
};

module.exports = CRUD;

// const u = new User(_userData);
// console.log(u.validateSync());

// User.findOne({}, (err, data) => {
//   if (err) return console.log('Erro', err);
//   return console.log('Nome:', data.name);
// });
