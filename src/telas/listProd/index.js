import React, { useEffect, useState } from "react";
import { View, StatusBar, FlatList, Image } from "react-native";
import Texto from "../../componentes/Texto"; // Ajuste o caminho conforme necessário
import Menu from "./componentes/cards"; // Ajuste o caminho conforme necessário
import card from "../../mocks/cardList"; // Ajuste o caminho conforme necessário

import Logo from "./../../../assets/P-removebg-preview.png"
import css from "./componentes/cssProd";

export default function Index() {
    const [listData, setListData] = useState([]);

    // Carrega os dados de produtos a partir do objeto 'card'
    useEffect(() => {
        setListData(card.infos.lista); // Usando os dados exportados do arquivo cardData
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <View style={css.Backgroud}>
                <Image style={css.ar} source={Logo} />
                {/* <Texto style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", margin: 20 }}>
                    Lista de Gravatas
                </Texto>                 */}
            </View>

            <FlatList
                data={listData} // Aqui você passa os dados para o FlatList
                renderItem={({ item }) => <Menu item={item} />} // Passando 'item' para o componente Menu
                keyExtractor={({ id }) => String(id)} // Garantindo que o 'id' seja único
                numColumns={2} // Para exibir 2 colunas
            />
        </View>
    );
}
