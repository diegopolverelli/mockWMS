const express=require('express');
const routerAutenticacion=require("./routes/authentication.js")
const routerParametricasProductos=require("./routes/parametricas.productos.js")
const PORT=8080;

const app=express();

const rutaBase="/"

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(rutaBase, routerAutenticacion)
app.use(rutaBase, routerParametricasProductos)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
