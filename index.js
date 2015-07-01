import express from 'express';
import http from 'http';

const port = 3000;
const app = express();

app.get('/', (req,res) => {
	res.send("Apenas iniciamos dude");
});

const server = http.createServer(app).listen(port, () => {
  console.log("Server listo");
});