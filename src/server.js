import express from "express";
import { moviesRouter } from "./routes/MoviesRouter.js";
const app = express();
const port = 3001;


app.use(express.json());
app.use(moviesRouter);

app.listen(port, () => {
    console.log("Server run🚀");
});