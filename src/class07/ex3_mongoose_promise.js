'use strict';

// Conexão com o mongo
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-modulo-nodejs-exercises');
//const Pokemon = require('./models/bands');

// Definição do Schema
const Schema = mongoose.Schema;
const bandsSchema = new Schema({
  name:  String
});

// Definição do Model
var BandsModel = mongoose.model('bands', bandsSchema);

const band1 = {
  name: 'Manonas assassinas'
};

//var band = new BandsModel(data);

// 3 métodos - sem exec()
let findPromise = BandsModel.find({name: 'Linkin Park'});
findPromise.then(success, error);
// [ { name: 'Linkin Park', _id: 56ff424dcb3f181e1d0ae7a6 } ]

let createPromise = BandsModel.create(band1)
createPromise.then(success , error);
// { _id: 56ff4d03d20057e62669be34, name: 'Manonas assassinas', __v: 0 }

let removePromise = BandsModel.remove({name : band1.name });
removePromise.then(success , error);
// result: { ok: 1, n: 1 }

// 3 métodos - com exec()

let findPromise = BandsModel.find({name: 'Ramones'}).exec();
findPromise.then(success, error);
//[ { name: 'Ramones', _id: 56ff422bcb3f181e1d0ae7a5 } ]

let findOnepromise = BandsModel.findOne({ name: 'Metallica' }).exec();
findOnepromise.then(success , error);
//{ name: 'Metallica', _id: 56ff3ef8cb3f181e1d0ae7a4 }

let updatePromise = BandsModel.update({ name : 'Metallica'}, {name: '+Metallica'}).exec();
updatePromise.then(success , error);
//{ ok: 1, nModified: 1, n: 1 }


function success(data) {
  console.log(data);
}

function error(err) {
  console.log(err);
}
