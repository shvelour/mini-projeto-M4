import { Router } from "express";
import { list, add } from "../controllers/FilmesController.js";
const filmesRouter = Router();

filmesRouter.post('/add', (req, res) => {
    console.log('Dados recebidos: ', req.body)
    const {id, nome, ano, classificacao, descricao } = req.body
    const newFilme = add(id, nome, ano, classificacao, descricao)
    res.json({ newFilme })
})

filmesRouter.get('/list', (req, res) => {
   const listFilms = list()
   res.json({ listFilms })
})

export { filmesRouter };