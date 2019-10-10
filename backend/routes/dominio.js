import express from 'express'

import { Auth } from '../middleware'
import { Dominio} from '../api'
import { handleError } from '../utils'

const app = express.Router()
const path = require('path');

app.get('/', async (req, res) => {
    try {
      const data = await Revista.find()
      res.status(200).json(data)
    } catch (error) {
      handleError(error, res)
    }
  })
  
  app.get('/:id', async (req, res) => {
    try {
      const data = await Dominio.findById(req.params.id)
      res.status(200).json(data)
    } catch (error) {
      handleError(error, res)
    }
  })
app.post('/',async (req, res) => {
    try {
      let q =  req.body
      const data = await Dominio.create(q)
      res.status(201).json(data)
    } catch (error) {
      handleError(error, res)
    }
  })
app.put('/', async (req,req)=>{
try{
    let q =  req.body
    const data = await Dominio.update(q)
    res.status(200).json(data)
  } catch (error) {
    handleError(error, res)
  }  
});

app.delete('/:id' ,async (req, res) => {
    try {
      const data = await Dominio.delete(req.params.id)
      res.status(200).json(data)
    } catch (error) {
      handleError(error, res)
    }
  });
  