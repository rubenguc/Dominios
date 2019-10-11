import {Admin} from '../models'


export default {
    find: () => {
      debug(`Finding Admins for homepage with limit.`)
      return Admin.find().sort('nombre')
    },

    findById: (_id) => {
        debug(`Find Admin with id: ${_id}`)
        return Admin.findById(_id)
    },

    create: (q) => {
        debug(`Creating new Admin`)
        return Admin.findOne({email:q.email})
        .then(function(usuario){
          if(usuario)
            return {message:'El usuario ya existe'}
          else{
            const usuario = new Admin(q)
            return usuario.save()
          }
        })
      },

    loginUsuario: (q) => {
        return Admin.findOne({ email: q.email})
        .then(function(usuario){
          let status;
          if (!usuario){
            console.log('El usuario no existe')
            status = 'user'
            return status
          }
          else if(usuario.password!=q.password){
            console.log('Contraseña incorrecta')
            status = 'pass' 
            return status
          }
          return usuario
        })
      },
    
    token: (user) => {
        let token = Login.createToken(user, 'Usuario')
        return { status: 'Success', message: 'Te haz logueado Exitosamente', token: token, id: user._id, user: user}
      },

      update: (q) => {
        debug(`Updating the retiros with id: ${q._id}`)
        return Admin.updateOne({ _id: q._id }, { $set: q })
      },

      delete: (_id) => {
        debug(`Removing the Admin with id: ${_id}`)
        return Admin.findOneAndRemove({ _id })
      }

}