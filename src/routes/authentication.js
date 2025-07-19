const Router=require('express').Router;
const router=Router()

router.get('/gettoken',(req,res)=>{

    let {
        userid, 
        password
    }=req.headers

    if(!userid || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Error de autenticacion`})
    }

    res.setHeader('Content-Type','application/json')
    res.status(200).json(
        {
            "token": "e305ec2ec9c47bd0dd0cb04097f700ce"
        }
    )
})


module.exports=router