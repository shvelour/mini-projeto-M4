import { Filmes } from "../model/FilmesModel.js"


let listFilms = [
    {
        id: 1,
        nome: "A negação do Brasil",
        ano: "2000",
        classificacao: "Livre",
        descricao: "O documentário busca mostrar as influências das telenovelas na construção da identidade étnica dos afro-brasileiros, então de discutir a incorporação positiva do negro na teledramaturgia."
    }
]


function add(id, nome, ano, classificacao, descricao) {
    const newFilme = new Filmes(id, nome, ano, classificacao, descricao)
    listFilms.push(newFilme)
    return newFilme
}
function list() {
    return listFilms
}

export { list, add }