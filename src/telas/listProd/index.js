import React, {useEffect, useState} from "react";
import {View, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from '../../componentes/Texto';
import { FlatList } from "react-native";

import Menu from "./componentes/cards";


export default function Index (){

    const [listData, setListData]=useState([]);

    //Capturar os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null) {
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    //Busca a lista de desejos quando montar o componente
    useEffect(() => {
        loadListData();
    }, []);
    
    return <View>
        <StatusBar/>
        <Texto> Lista de Desejos</Texto>
        <Texto> Estes são as comidas adicionadas na sua Lista de Desejos.</Texto>

        <FlatList 
            data={listData}
            renderItem={({item}) =>  <Menu {...item}/>}
            keyExtractor={({id}) => String(id) }
            numColumns={2} 
        />

    </View>
}