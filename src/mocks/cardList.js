import img from "./../../assets/gravatas.jpg"
import img1 from "./../../assets/Gravatas2.jpg"
import img2 from "./../../assets/GravatasB.jpg"
import img3 from "./../../assets/GravataseT.jpg"
import Logo from "./../../assets/P-removebg-preview.png"

const card = {
    logo:{
        log: Logo
    },
    infos: {
        lista: [
            {
                id: 1,
                titulo: "Gravata 1",
                descricao:"Diversas gravatas coloridas",
                imagem: img,
            },
            {
                id: 2,
                titulo: "Gravata 2",
                descricao:"Diversas gravatas coloridas",
                imagem: img1,
            },
            {
                id: 3,
                titulo: "Gravata 4",
                descricao:"Diversas gravatas coloridas",
                imagem: img2,
            },
            {
                id: 4,
                titulo: "Gravata 3",
                descricao:"Diversas gravatas coloridas",
                imagem: img3,
            },
        ]
    }
}

export default card;