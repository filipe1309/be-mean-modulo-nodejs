const mongoose = require('mongoose');

// Conexão com o mongo
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect(dbURI);

const Schema = mongoose.Schema;

// Definição do Schema
const _schema = {
      attack: Number
    , created: { type: Date, default: Date.now }
    , defense: Number
    , height: Number
    , hp: Number
    , name: String
    , speed: Number
    , types: [String]
};


const pokemonsSchema = new Schema(_schema);
const pokemonsModel = mongoose.model('pokemons', pokemonsSchema);

var query = {$and: [{attack: {$gt: 50}}, {height: {$gt: 0.5}}]}

pokemonsModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou: ', data);
});
