import {Login} from '../services'

function isAuth(req,res,next) {
    if (!req.headers.authorization){
        return res.status(403).send({status:'denied', message: 'No tienes autorización is Auth' })
    }
    const token = req.headers.authorization.split(' ')[1]
    Login.decodeTokenPer(token, res)
        .then(response => {
                req.user = response
                next()
        })
        .catch(response => {
            res.status(response.status)
        })
}

module.exports={
    isAuth
}