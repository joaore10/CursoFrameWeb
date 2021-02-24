module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*'),
    res.header('Access-Control-Aloow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'),
    res.header('Access-Control-Aloow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Content-Type-Options')
    next()
}