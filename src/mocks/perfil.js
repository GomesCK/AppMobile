import foto from "./../../assets/gravatas.jpg"

const produto = {
    topo: {
        titulo: "Detalhes do produto"
    },
    detalhes: {
        nome: "Gravatas coloridas",
        detalhes: "Gravatas com diversas cores disponiveis",
        preco: "R$59.99",
        botao: "Login",
    },
    itens:{
        // titulo: "Itens do Kit",
        lista: [
            {
            nome: "1x gravata azul",
            imagem: foto ,
        },
        {
            nome: "2x gravata preta",
            imagem: foto,
        },
        {
            nome: "3x gravata cinza",
            imagem: foto,
        },]
    }
}

export default produto;