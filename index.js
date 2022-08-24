/**
 * levantar el servidor http
 */

//importar dependencias
import { rename } from 'fs';
import http from 'http';

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer ((req, res) => {
    //Guardar solicitud del intent
    let body = '';
    req.on ('data', (content) => {
        body += content;
    });

    //Finalizaciones del intent
    req.on('end', () =>{
        if(req.method === 'GET'){
            res.statusCode = 200;
            res.setHeader('content-Type', 'application/json');
            res.end ('Hola mensaje desde nodeJS');
        }
        else if (req.method === 'POST'){

        
    
        console.log (body);
        //analizar el cuerpo y las variables de inicio
        const jsonBody = JSON.parse (body);
        let fulfillmentText = "";

        if (jsonBody.queryResult.intent.displayName === "hola","buenos dias", "hola buenas", "buenas tardes", "buenas noches", "hola que tal?"){
            fulfillmentText = " Hola bienvenido";
        };
        //Enviar respuesta
        res.statusCode = 200;
        res.setHeader ('Content-Type', 'application/json');
        res.end (JSON.stringify({
            fulfillmentText,
        }));
    }   else{
            res.statusCode = 405;
            res.end();
        }
    });   
});

server.listen(port, hostname, () => {
    console.log (`Servidor corriendo en: http://${hostname}:${port}/`);
});