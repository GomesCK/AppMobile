import img from "./../../assets/gravatas.jpg"
import img1 from "./../../assets/Gravatas2.jpg"
import img2 from "./../../assets/GravatasB.jpg"
import img3 from "./../../assets/GravataseT.jpg"

const card = {
    infos: {
        lista: [
            {
                id: 1,
                titulo: "Pastel de Carne",
                descricao:"Pastel recheado com carne de primeira qualidade",
                imagem: img,
            },
            {
                id: 2,
                titulo: "Pastel de Frango c/ Catupiry",
                descricao:"Pastel recheado com frango e catupiry excelência",
                imagem: img1,
            },
            {
                id: 3,
                titulo: "Pastel de Carne Seca",
                descricao:"Pastel recheado com Carne Seca e quiejo delicioso",
                imagem: img2,
            },
            {
                id: 4,
                titulo: "Pastel de Calabresa c/ Queijo",
                descricao:"Pastel recheado com Calabresa e queijo sem igual",
                imagem: img3,
            },
        ]
    }
}

export default card;