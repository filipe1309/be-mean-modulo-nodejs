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
var pokemonsModel = mongoose.model('pokemons', pokemonsSchema);

var pokemon1 = {
      name: 'BeboMon'
    , attack: 51
    , defense: 51
    , height: 12.1
}

var pokemon2 = {
      name: 'CodeMon'
    , attack: 42
    , defense: 31
    , height: 6.18
}

var pokemon3 = {
      name: 'SonoMon'
    , attack: 10
    , defense: 09
    , height: 08
}

var novosPokemons = [pokemon1, pokemon2, pokemon3];

pokemonsModel.insertMany(novosPokemons, function(error, docs) {
    if(error) return console.log(error);
    return console.log('Sucesso: ', docs);
});
