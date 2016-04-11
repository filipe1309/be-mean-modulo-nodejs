const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test');

const _schema = {
  name: require('./fields/fields-name')
, password: require('./fields/fields-password')
, email: require('./fields/fields-email')
, type: require('./fields/fields-type')
, created_at: require('./fields/fields-created_at')
};

const userSchema = new Schema(_schema);

module.exports = userSchema;
