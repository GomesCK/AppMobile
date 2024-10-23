import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from "../../componentes/Texto";
import ListaItem from "./listaItem";

export default function Index(){
    
    const [listData, setListData] = useState([]);

    //Capturar os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null){
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }
    
    //Busca a Lista de Desejos quando montar o component
    useEffect(() => {
        loadListData();
    }, []);
    
    return<View>
        <StatusBar/>
        <Texto>Lista de Desejos</Texto>
        <Texto>Estes são os produtos adicionados na sua Lista de Desejos</Texto>

        <FlatList
            data={listData}
            renderItem={({item})=> <ListaItem {...item}/>}
            keyExtractor={({id})=> toString(id)}
            numColumns={2}
        />
    
    </View>
}