'use strict';

const https = require('https');

const options = {
    host: 'hacker-news.firebaseio.com'
  , path: '/v0/item/11177200.json'
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function() {
    let data_json =  JSON.parse(data);
    let data_html = '<html><body><a href="';
    data_html += data_json.url + '"><h1>';
    data_html += data_json.title + '</h1></a></body></html>';

    console.log('Dados finalizados: ', data);
    console.log('Dados HTML: ',data_html);
  })
}

const req = https.request(options, callback);

req.on('error', function(e) {
  console.log('ERROOOO: ' + e.message);
});
req.end();
