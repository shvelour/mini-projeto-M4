import { Router } from "express";
import { list, add } from "../controllers/FilmesController.js";
const filmesRouter = Router();
const listFilms = list();

filmesRouter.post('/add', (req, res) => {
    console.log('Dados recebidos: ', req.body)
    const {id, nome, ano, classificacao, descricao } = req.body
    const newFilme = add(id, nome, ano, classificacao, descricao)
    res.json({ newFilme })
})



filmesRouter.get('/list', (req, res) => {
const nomes = []
    for (let i = 0; i < listFilms.length; i++) {
        nomes.push(listFilms[i].nome + ', id - ' + listFilms[i].id);
    }
    res.json({ nomes });
});


filmesRouter.get('/filme1', (req, res) => {
    if (listFilms[0].id == 1) {
     res.json({ filme1: listFilms[0] });
   }
})

filmesRouter.get('/filme2', (req, res) => {
    if (listFilms[1].id == 2) {
     res.json({ filme2: listFilms[1] });
   }
})


export { filmesRouter };