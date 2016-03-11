const mongoose = require('mongoose');

// Conexão com o mongo
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect(dbURI);

const Schema = mongoose.Schema;

// Definição do Schema
const meanArr = 'mongodb expressjs angularjs nodejs'.split(' ');
const _schema = {
      stringEnum: { type: String, enum: meanArr }
    , stringMatch: { type: String, match: /node((\.js)|js)?/i }
    , stringMinLength: { type: String, minlength: 5 }
    , stringMaxLength: { type: String, maxlength: 9 }
    , numMin: { type: Number, min: 12 }
    , numMax: { type: Number, max: 14 }
    , dateValue: { type: Date }
    , bufferValue:  Buffer
    , booleanValue:  Boolean
    , mixedValue:   Schema.Types.Mixed
    , objectValue: Schema.Types.ObjectId
    , arrayValue:   [String]
};


const class06Ex1Schema = new Schema(_schema);
const class06Ex1Model = mongoose.model('class06', class06Ex1Schema);
var class06Ex1Object = new class06Ex1Model;

// Inserções válidas
class06Ex1Object.stringEnum = 'nodejs';
class06Ex1Object.stringMatch = 'nodejs';
class06Ex1Object.stringMinLength = '1234567';
class06Ex1Object.stringMaxLength = '1234567';
class06Ex1Object.numMin = 13;
class06Ex1Object.numMax = 13;
class06Ex1Object.dateValue = Date.now();
class06Ex1Object.bufferValue = new Buffer(0);
class06Ex1Object.booleanValue = 1;
class06Ex1Object.mixedValue = 'Mean Stack';
class06Ex1Object.objectValue = new mongoose.Types.ObjectId;
class06Ex1Object.arrayValue.push('Inseriu!!!!');


// Inserções inválidas
class06Ex1Object.stringEnum = 'php';
class06Ex1Object.stringMatch = 'dog';
class06Ex1Object.stringMinLength = '1234';
class06Ex1Object.stringMaxLength = '1234567890';
class06Ex1Object.numMin = 11;
class06Ex1Object.numMax = 15;
class06Ex1Object.dateValue = '11/11/11';
class06Ex1Object.bufferValue = 'buf';
class06Ex1Object.booleanValue = {};
class06Ex1Object.mixedValue = undefined;
class06Ex1Object.objectValue = 'objeto';
class06Ex1Object.arrayValue.push(1);


class06Ex1Object.save(function (err, data) {
    if(err) return console.log(err);
    return console.log('Sucesso: ', data);
});
