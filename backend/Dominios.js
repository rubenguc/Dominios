'use strict'

import {Admin, Dominios} from './routes';

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var http = require('http');
const server = http.createServer(app)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.use('/api/admin/', Admin)
app.use('/api/dominio/', Dominios)

mongoose.connect('mongodb://localhost:27017/Dominios')

server.listen(port, '0.0.0.0', () => {
  console.log(`server listening on port ${port}`)
})