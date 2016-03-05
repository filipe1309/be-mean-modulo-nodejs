'use strict';

  const http = require('http')
    , fs = require('fs')
    ;

    http.createServer(function(req, res){
      var responseStatusCode = 200
      , file_req = req.url
      , ext = file_req.split(".").pop().toLowerCase()
      , cType = 'text/html;charset=utf8'
      , dir
      ;

      // Redireciona para index, caso não seja informada nenhma rota
      if (file_req === '/') {
        ext = 'html';
        file_req += 'index.' + ext;
      }

      /*
      A priori, os arquivos estão em pastas com o nome das extensões,
      a não ser no caso de imagens que está na pasta img.
      */
      dir = ext;

      // Define o mimetype adequado para o arquivo solicitado
      switch (ext) {
        case 'html':
          break;
        case 'css':
          cType = 'text/css';
          break;
        case 'js':
          cType = 'text/javascript';
          break;
        case 'jpeg':
        case 'jpg':
          cType = 'image/jpeg';
          dir = 'img';
          break;
        case 'png':
          cType = 'image/png';
          dir = 'img';
          break;
        case 'gif':
          cType = 'image/gif';
          dir = 'img';
          break;
        default:
          responseStatusCode = 404;
          break;
      }

      // Define o cabeçalho de resposta
      res.writeHead(responseStatusCode, {'Content-Type': cType});

      // Ajusta o path, incluido a pasta do arquivo requisitado
      var path_file_req = dir+file_req;

      try {
        /*
        Caso um diretório de arquivos (css, html, js, img) seja informado,
        caso exista, os arquivos daquele diretório serão listados
        */
        if (ext.substring(0, 1) == '/') {
          dir = ext.substring(1);
          fs.accessSync( dir, fs.R_OK );
          if( fs.lstatSync(dir).isDirectory() ){
            var dir_files = fs.readdirSync(dir);
            dir_files.forEach(dir_file => {
               res.write('<a href="' + dir_file + '">' + dir_file + '</a><br>' );
            });
          }
        } else {
          /*
          Caso um arquivo (css, html, js, jpg, jpeg) seja informado,
          caso exista, o mesmo é exibido diretamente na página
          */
          // Verifica se o arquivo existe
          fs.accessSync( path_file_req, fs.R_OK );

          // le o arquivo
          var file_server = fs.readFileSync(path_file_req);

          // Escreve o conteudo do arquivo no response
          res.write(file_server);
        }
       } catch(e) {
         var file_error = fs.readFileSync('html/not_found.html');
         res.write(file_error);
       }


      console.log("file: ", file_req);
      console.log("ext: ", ext);
      console.log("cType: ", cType);

      // Envia response
      res.end();
    }).listen(3000, function(){
      console.log('Servidor rodando em localhost:3000');
    });
