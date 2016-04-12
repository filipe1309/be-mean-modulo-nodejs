const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {
  name: require('./../atoms/atom-name')
}

//console.log(new Schema(Molecule));
module.exports = new Schema(Molecule);
