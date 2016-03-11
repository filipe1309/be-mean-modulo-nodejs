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
const PokemonsSchema = new Schema(_schema);
const PokemonsModel = mongoose.model('pokemons', PokemonsSchema);
var query = {attack: {$gt: 50} }

PokemonsModel.remove(query, function (err, data) {
    if (err) return console.log('ERRO: ', err);
    return console.log('Excluiu: ', data);
});
