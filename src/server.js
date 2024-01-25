import express from "express";
import { filmesRouter } from "./routes/FilmesRoute.js";
const app = express();
const port = 3001;

// const jsonFilmes = require('./artes.json');

// app.get('/api/lista', (req, res) => {
//     const nomes = []
//     for (let i = 0; i < jsonFilmes.filmes.length; i++) {
//         nomes.push(jsonFilmes.filmes[i].nome + ', id - ' + jsonFilmes.filmes[i].id);
//     }
//     res.json({ nomes });
// });


// app.get('/api/1', (req, res) => {
//     if (jsonFilmes.filmes[0].id == 1) {
//         res.json({ filme1: jsonFilmes.filmes[0] });
//     }
// })

// app.get('/api/2', (req, res) => {
//     if (jsonFilmes.filmes[1].id == 2) {
//         res.json({ filme2: jsonFilmes.filmes[1] });
//     }
// })

app.use(express.json());
app.use(filmesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});