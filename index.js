/**
 * levantar el servidor http
 */

//importar dependencias
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer ((req, res) => {
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'application/json');
    res.end ('Hola respondiendo desde NodeJs');
});
server.listen(port, hostname, () => {
    console.log (`Servidor corriendo en: http://${hostname}:${port}/`);
});