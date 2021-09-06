const express= require('express');
const router = express.Router();

const alimentos = require('./../resources/files/alimentos');

let aliments = []

router.get('/',(req,res)=>{
    res.render("index",{aliments:aliments,title:"Página de Inicio"});
});

router.get('/insert',(req, res)=>{
    res.render('insert',{title:"Agregar Producto",
        typeAliment:alimentos.typeAliment,
        aliments:alimentos.aliments});
});

router.post('/insert',(req,res)=>{
    const{code, name, lastName, gender, dpto, town, email, phone } = req.body;
    const dptoAux = alimentos.typeAliment.find( record => record.code == dpto ).name;
    const townAux = alimentos.aliments.find(record => record.code == town).name;
    const city = townAux.concat( '-', dptoAux );
    let newReg = {code, lastName, name, city, email, phone  };
    aliments.push(newReg);
    res.redirect('/');
});

router.get('/about',(req,res)=>{
   res.render('about',{title:"Sobre Nosotros"});
});

module.exports = router;
