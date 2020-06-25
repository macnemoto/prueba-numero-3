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
//Obtener la imagen principal de hilos

const titulo = $('span .filetitle').first();
const pirure = $('img').attr('src');
//const titulo = $('span .filetitle').first();
//const titulo = $('span .filetitle').first();
//console.log(pirure);

//res.status(200).send(titulo.text());
const post =  $('blockquote').each((i, el) => {
  res.status(404 >= 100 && 404 < 600 ? err.code : 500);
  res.send(i, $(el).text())
//res.send(i, $(el).text());
 });
//res.status(200).send(pirure);

//Obtener el titulo del hilo
//const titulo = $('span .filetitle').first();
//res.send(titulo);
//console.log(titulo.text());
//Obtener los comentarios de los negros del chon
//const post =  $('blockquote').each((i, el) => {
//console.log(i, $(el).text())
//res.send(i, $(el).text());
 //});



});
 




}
nekoMaster()
});


//Ejecutando la funcion nekoMinig para que se inicie con el scrip
//nekoMinig()