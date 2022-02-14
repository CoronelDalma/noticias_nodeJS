const express = require('express');
const router = express.Router();

//traemos la info de la db
const noticiasModel = require('./../models/noticiasModel');


//Mockup
/*const newsMochup = [
    {id: 1, title:'La progración hoy en día',description:'Análisis sobre la oferta y demanda en el rubro',author:'Coronel Dalma',date:'14/2/2022'},
    {id: 2, title:'Noticia 2',description:'Descripción de la noticia 2',author:'Coronel Dalma',date:'14/2/2022'}
]*/

// -------------------------------RUTAS
//localhost:3000/noticias/all
router.get('/all', async (req,res,next) => {
    let newsData = await noticiasModel.getNoticias();
    res.render('noticias',{news: newsData }); //lleva al a vista noticias con parametro 'news'(las noticias)
})

//localhost:3000/noticias/1 parametro x url -->req.params
router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    res.end();
})
module.exports = router;