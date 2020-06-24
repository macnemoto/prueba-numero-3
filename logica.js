'use strict'
const cheerio = require('cheerio');
const request = require('request-promise');
const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('Api Ya anda corriendo en http://localhost:3000');
})

//funcion para ser una llamada al hilo y pasarsela a cheerio y este analizarla en "$"
async function nekoMinig() {

    const $ = await request({
    uri: 'https://www.hispachan.org/ve/res/1700357.html',
    transform: body => cheerio.load(body)
    
})
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



}
//Ejecutando la funcion nekoMinig para que se inicie con el scrip
//nekoMinig()