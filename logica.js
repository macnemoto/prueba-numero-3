'use strict'
const cheerio = require('cheerio');
const request = require('request-promise');
const express = require('express');
const bodyParser = require('body-parser');



//Api ress
const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.listen(port, () => {
     console.log(`Api Ya anda corriendo en http://localhost:${port}`);
})


 app.get('/hispachan.org/:board/res/:th.html', function(req, res) {
    let thId = req.params.th.split('.')[0];
     let board = req.params.board;
  
 




//app.get('/hispachan/:board/res/:th', (req, res) => {
  //      let thId = req.params.th.split('.')[0];
    //    let board = req.params.board;

    //});



//funcion para ser una llamada al hilo y pasarsela a cheerio y este analizarla en "$"

async function nekoMaster() {



await request(`https://www.hispachan.org/${board}/res/${thId}.html`, (err, resp, body) => {
  if (res.statusCode == 404) {
    // El hilo está en 404.
    parseResponse(req, res, { status: 404 });
    return;
}
if (err) {
    // Otro error
    parseResponse(req, res, { status: 500 });
    return;
}
   
   let $ = cheerio.load(body);
  // const comentarios = [''];

  $('.thread').each((i, el) => {
    const regex = /(\s\s\s*)/gmi;
    const comen = [];
    $(el).find('blockquote').each((i, el) => comen.push($(el).text().trim().replace(/(\s\s\s*)/g,"")));
    console.log(comen)







   var titulo = $('span .filetitle').first().text().trim();
   const picure = $('img').attr('src');
//var eso = $('blockquote').first().text().trim();
//const regex = /(\s\s\s*)/gmi;

const texto = $('blockquote').first().text().trim();
//eso =  eso.replace("regex","");
//console.log(texto)
  
 
   //var post =  $('blockquote').text(); //.each((i, el) => {  
    //var neko = post.replace("/(\s\s\s*)/g","");

      //console.log(nekoComentario2);
      var txt = `[{"titulo": "${titulo}"} , {"url": "${picure}"}, {"comentario": "${comen}"}]`
      const obj = JSON.parse(txt);
      console.log(obj);


     res.status(200).send(obj);

    } )
})

 }
//console.log(post)
  //const count = comentarios.push(port);
  //console.log(i, $(el).text())
  
//});



//const titulo = $('span .filetitle').first();
//console.log(pirure);


//const json = '{ "titulo": "picure" }';


//convertidor a json



//const post =  $('blockquote').each((i, el) => {
  //res.send(i, $(el).text())
//res.send(i, $(el).text());
 //});
//res.status(200).send(pirure);

//Obtener el titulo del hilo
//const titulo = $('span .filetitle').first();
//res.send(titulo);
//console.log(titulo.text());
//Obtener los comentarios de los negros del chon
//const post =  $('blockquote').each((i, el) => {
//console.log(i, $(el).text())
//res.send(i, $(el).text());
nekoMaster()
});


