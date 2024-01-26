import express from "express";
import { filmesRouter } from "./routes/FilmesRoute.js";
const app = express();
const port = 3001;


app.use(express.json());
app.use(filmesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});