const jwt = require('jwt-simple')
const moment = require('moment')


export default {
    createToken: (user,rol) => {
        const payload = {
            sub: admin._id,
            iat: moment.unix(),
            exp: moment.add(14,'days').unix()
        }
        return jwt.encode(payload,'secret123456' )
    },
    
    decodeTokenPer: (token, res) => {
        const decode = new Promise((resolve, reject) =>{
            try{
                const payload = jwt.decode(token, config.SECRET_TOKEN)

                if(payload.exp <= moment.unix()){
                    res.status(200).send({message: `el token a expirado`, status: `denied`, redirect: '/login.html'})
                }
                resolve(payload)

            } catch(err){
                return err.status(401).send({ message: `Token Invalido`, status: 'denied', redirect: '/login.html' })
            }
        })
        return decode
    }
    
}