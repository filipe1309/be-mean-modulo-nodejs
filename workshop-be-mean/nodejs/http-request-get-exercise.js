'use strict';

const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
        q: 'curitiba parana brasil'
      , format: 'json'
      , limit: '1'
      });

console.log("postData", postData);
console.log("Tamanho do postData", postData.length);

const options = {
  host: 'nominatim.openstreetmap.org'
, headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
   , 'Content-Length': postData.length
   }
};

const req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function() {
    console.log('Dados finalizados: ', data)
  })
});

req.on('error', function(e) {
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
