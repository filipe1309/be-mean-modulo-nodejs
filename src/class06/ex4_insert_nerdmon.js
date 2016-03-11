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
const PokemonsModel = mongoose.model('pokemons', pokemonsSchema);

var nerdMon = {
      name: 'Nerdmon'
    , attack: 49
    , defense: 51
}

var nerdMonObj = new PokemonsModel(nerdMon);

nerdMonObj.save(function (err, data) {
    if (err) return console.log('ERRO: ', err);
    console.log('Sucesso: ', data)
});
