'use strict'

const recibirArch = (req, res) => {
	console.log(req.url);
	let respuesta = "";
    if(req.method === "GET")
        {
        console.log ("linea 6")
        respuesta = procesaGet(req);
		req.statusCode =200;
	} else {
		req.statusCode =404;
	}
		res.end(JSON.stringify(respuesta));

	}

function procesaGet(peticion) {
    console.log(peticion.url);
    
    let enURL = url.parse(peticion.url, true);
    
    if(enURL.query.agreg === "alta") {
        let altaFlotante = {
            nombre: enURL.query.nomb,
            primerApellido: enURL.query.primA,
            segundoApellido: enURL.query.segA 
        }
        modelo.push(altaFlotante);
    }
}

module.exports = recibirArch;