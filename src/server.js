import 'dotenv/config';
import http from 'http';
import express from 'express';
import routes from './routes.js'
import './connection.js'
import cors from 'cors';

const bodyParser = require('body-parser');

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(bodyParser.json({ limit: '10mb' }));

app.use(
    cors(),
);

app.use(routes);

server.listen(port, () => console.log(`Servidor Iniciado na porta ${port}`));
