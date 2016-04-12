/*const quark_get = (v) => v.toUpperCase();
const quark_set = (v) => v.toLowerCase();
const quark_validate = {
        validator: function(v) {
          return v >= 18;
        }
      , message: 'Nome {VALUE} precisa ser maior que 3 caracteres'
    };*/

//const Atom
module.exports = {
  type: String
, get: require('../quarks/quark-toUpper')
, set: require('../quarks/quark-toLower')
, validate: require('../quarks/quark-validate-string-lengthGTE3')
, required: true
, index: true
}
// console.log(Atom);
//module.exports = Atom;
