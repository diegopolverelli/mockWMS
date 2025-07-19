const tokenModelo="e305ec2ec9c47bd0dd0cb04097f700ce"

const auth = (req, res, next)=>{
    if(!req.headers.token || req.headers.token.trim().length!=tokenModelo.length) {
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Error de authenticacion`})
    }

    next()
}

module.exports={auth}