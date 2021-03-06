const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {

    //CORS preflight request
    if(req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.headers['authorization']

        if(!token) {
            return res.status(403).send({ errors: ['Nenhum token incluso.'] })
        }

        jwt.verify(token, env.authSecret, function(err, decoded){
            if(err) {
                return res.status(403).send({
                    errors: ['Falha na autenticação do Token.']
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    }


}