import express from 'express'
import multer from 'multer'
import { Login } from '../services'
import { Auth } from '../middleware'
import { Admin } from '../api'
import { handleError } from '../utils'
const app = express.Router();

app.get('/',  async (req, res) => {
    try {
      const data = await Admin.find()
      if(data.length==0){
        res.status(404).json({message:'No existe ningun Admin'})
      }
      else
        res.status(200).json(data)
    } catch (error) {
      handleError(error, res)
    }
  })
  app.get('/:id', async (req, res) => {
    try {
      const data = await Admin.findById(req.params.id)
      if(!data)
        res.status(404).json({message:`No existe el Admin con el id ${req.params.id}`})
      else
        res.status(200).json(data)
    } catch (error) {
      handleError(error, res)
    }
  })
  app.post('/login', async (req, res) => {
    try {
      const usuario = await Admin.loginUsuario(req.body)
      if(usuario == 'user') {
        res.status(200).json({ status: 'denied', message: 'Usuario no existe'})
      }
      else if(usuario == 'pass'){
        res.status(200).json({ status: 'denied', message: 'Contraseña invalida'})
      }
      else{
        const token = await Admin.token(usuario)
        res.status(201).json(token)
      }
    } catch (error) {
      handleError(error, res)
    }
})
  
  app.put('/', Auth.isUsuario ,  async (req, res) => {
    try {
      const data = await Admin.update(req.body)
      res.status(200).json({message: `El retiro con el id ${req.body._id} ha sido actualizado exitosamente`, data})
    } catch (error) {
      handleError(error, res)
    }
  })

  app.delete('/:id',Auth.isUsuario, async (req, res) => {
    try {
      const data = await Admin.delete(req.params.id)
      res.status(200).json({message: `El Admin con el id ${req.params.id} ha sido eliminado`,data})
    } catch (error) {
      handleError(error, res)
    }
  })
  