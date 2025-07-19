const express=require('express');
const routerAutenticacion=require("./routes/authentication.js")
const routerParametricasProductos=require("./routes/parametricas.productos.js")
const PORT=8080;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/depot_api/desarrollo", routerAutenticacion)
app.use("/depot_api/desarrollo", routerParametricasProductos)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
