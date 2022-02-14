const express = require('express');
const router = express.Router();
const usuariosModel = require('./../models/usuariosModel');

router.get('/', async(req,res,next) => {
    res.render('login',{message: null}); 
})

router.post('/', async(req, res, next) => {
    try {
        //usar en req.body los names de los inputs
        let results = await usuariosModel.getUsuarioByEmailAndPassword(req.body.user, req.body.password);
        if (results.length > 0){
            // crear la variable de sesion (superglobal)
            req.session.usuario = results[0].idusuario;
            res.redirect('/noticias/all');
        } else {
            res.render('login',{message:'Usuario o contraseña incorrectos'});
        }
    }catch(error){
        console.log(error);
    }
})

module.exports = router;