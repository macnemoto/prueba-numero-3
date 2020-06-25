'use strict'
const cheerio = require('cheerio');
const request = require('request-promise');
const express = require('express');
const bodyParser = require('body-parser');


//Api ress
const app = express()
const port = process.env.PORT || 3008

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.listen(port, () => {
     console.log(`Api Ya anda corriendo en http://localhost:${port}`);
})





app.get('/hispachan/:board/res/:th', (req, res) => {
        let thId = req.params.th.split('.')[0];
        let board = req.params.board;





//funcion para ser una llamada al hilo y pasarsela a cheerio y este analizarla en "$"
 async function nekoMinig() {

const $ =  await request({uri:`https://www.hispachan.org/${board}/res/${thId}.html`,
    transform: body => cheerio.load(body)})
//Obtener la imagen principal de hilos
const pirure = $('img').attr('src');
console.log(pirure);
//Obtener el titulo del hilo
const titulo = $('span .filetitle').first();
console.log(titulo.text());
//Obtener los comentarios de los negros del chon
const post =  $('blockquote').each((i, el) => {
console.log(i, $(el).text())

}
);



};
//Ejecutando la funcion nekoMinig para que se inicie con el scrip
 });
nekoMinig()