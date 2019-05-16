'use strict'

const Pag1 = require('../controllers/ctrlPag1'); 
const Pag2 = require('../controllers/ctrlPag2');
const Search = require('../controllers/ctrlSearch');
const Agregar = require('../controllers/ctrlAgregar');


const router = (request, response) => { //función callback
    if(request.url === '/pag1') {
        var result = Pag1(request); //primero se declara una variable antes de proseguir con la siguiente función, en vez de pasar directamente al response, es más propio
        response.end(result);
    } 
    else if (request.url === '/pag2') {
        var result = Pag2(request);
        response.end(result);
    }
    else if (request.url === '/search') {
        var result = Search(request);
        response.end(result);
    }
    else if (request.url === '/agregar') {
        console.log ( "linea 23 alcanzada");
        var result = Agregar(request);
        console.log ("linea 25 alcanzada");
        console.log (result);
        response.end(result);
    }
    else {
        response.end("You are in default website");
    }    
};


module.exports = router; 