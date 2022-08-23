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
    req.on ('data', (content) =>{
        body += content;
    });

    //Finalizaciones del intent
    req.on ('end', ()=>{
        if (req.method === 'GET'){
            res.statusCode = 200;
            res.setHeader('content-Type', 'application/json');
            res.end ('Hola mensaje desde nodeJS');
        } else if (req.method === 'POST'){

        }
        console.log (body);
        //analizar el cuerpo y las variables de inicio
        if (jsonBody.queryResult.intent.displayName === "")
    });
    
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'application/json');
    res.end ('Hola respondiendo desde NodeJs');
});
server.listen(port, hostname, () => {
    console.log (`Servidor corriendo en: http://${hostname}:${port}/`);
});