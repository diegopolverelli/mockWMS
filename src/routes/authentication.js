const Router=require('express').Router;
const router=Router()



router.get('/gettoken',(req,res)=>{

    console.log("ingresa /gettoken")

    let {
        userid, 
        password
    }=req.headers

    console.log(userid, password)

    if(!userid || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales inválidas`})
    }

    res.setHeader('Content-Type','application/json')
    res.status(200).json(
        {
            "token": "e305ec2ec9c47bd0dd0cb04097f700ce"
        }
    )
})


module.exports=router