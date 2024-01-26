import { Filmes } from "../model/FilmesModel.js"


let listFilms = [
    {
        id: 1,
        nome: "A negação do Brasil",
        ano: "2000",
        classificacao: "Livre",
        descricao: "O documentário busca mostrar as influências das telenovelas na construção da identidade étnica dos afro-brasileiros, então de discutir a incorporação positiva do negro na teledramaturgia."
    },
    {
        id: 2,
        nome: "Do que aprendi com minhas mais velhas",
        ano: "2017",
        classificacao: "Livre",
        descricao: "Do que aprendi com minhas mais velhas é um documentário sobre a fé no Candomblé e como essa fé é transmitida de geração em geração. Um filme onde mulheres importantes no Candomblé da Bahia falam como aprenderam com seus mais velhos e como ensinam seus mais jovens. Um filme sobre tradição, amor e religiosidade."
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