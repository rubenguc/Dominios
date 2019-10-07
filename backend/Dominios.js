'use strict'

import {Admin, Dominios} from './routes';

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/admin/', Admin)
app.use('/api/dominio/', Dominios)



mongoose.connect('mongodb://localhost:27017/Dominios')

app.listen(port)