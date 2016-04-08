const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test');

const userSchema = new Schema({
  name: require('./fields/fields-name')
, password: require('./fields/fields-password')
, email: require('./fields/fields-email')
, type: require('./fields/fields-type')
, created_at: require('./fields/fields-created_at')
});

const _userData = {
  name: 'Bob Dylan'
, password: '1324567'
, email: 'bob@dylan.com'
};

const User = mongoose.model('User', userSchema);

// User.create(_userData, (err, data) => {
//   if (err) return console.log('Erro', err);
//   return console.log('Inseriu:', data);
// });

const u = new User(_userData);
console.log(u.validateSync());

// User.findOne({}, (err, data) => {
//   if (err) return console.log('Erro', err);
//   return console.log('Nome:', data.name);
// });
