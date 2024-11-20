import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from "../../componentes/Texto";
import ListaItem from "./listaItem";
import styles from "./estilos";
import Logo from "./../../../assets/P-removebg-preview.png"

export default function Index() {
    
    const [listData, setListData] = useState([]);

    // Captura os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null) {
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    // Busca a Lista de Desejos quando o componente monta
    useEffect(() => {
        loadListData();
    }, []);

    return (
        <View style={styles.geral} >
             <StatusBar barStyle="dark-content" />
            <View style={styles.Backgroud}>
                <Image style={styles.ar} source={Logo} />
                {/* <Texto style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", margin: 20 }}>
                    Lista de Gravatas
                </Texto>                 */}
            </View>
            <FlatList
                data={listData}
                renderItem={({ item }) => <ListaItem {...item} />}
                keyExtractor={({ id }) => id ? id.toString() : `${Math.random()}`} // Corrigido para id.toString()
                numColumns={2}
            />
        </View>
    );
}
