import {Dominio} from '../models'


export default {
    find: ()=> {
    debug(`Finding Dominios`)
    return  Dominio.find().sort({fecha:-1})
    },

    findById: (_id) => {
        debug(`Find Dominio id: ${_id}`)
        return Dominio.findById(_id)
    },

    create: (q) => {
        debug(`Creating new Dominio`)
        const data = new Dominio(q)
        return data.save()
      },

      update: (q) => {
        debug(`Updating the dominio with id: ${q._id}`)
        return Dominio.updateOne({ _id: q._id }, { $set:  q  })
      },

      delete: (_id) => {
        debug(`Removing the dominio with id: ${_id}`)
        return Dominio.findOneAndRemove({ _id })
      }

}