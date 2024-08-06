import React from "react";
import {FlatList} from 'react-native'; //, View, Text, Image, StyleSheet
import { Card } from "react-native-paper";

import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import Item from "./componentes/Item";
// import Texto from "../../componentes/Texto";

//Captura o tamanho da tela que está rodando o app
//const width = Dimensions.get('screen').width;

export default function Index({topo, detalhes,itens}) { 
    
    // const renderItem = ({item:{nome, imagem}}) => <View key={nome}>
    //                             <Image source={imagem}/>
    //                             <Text>{nome}</Text>
    //                         </View>
    
    return <>

    {/* <Texto>{itens.titulo}</Texto> */}
        <FlatList 
        
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome})=>{nome}}
            ListHeaderComponent={() =>{
                return<>
                    <Card>
                        <Topo {...topo} />
                        <Detalhes {...detalhes} />
                    </Card>                   
                </>
        }}/> 
    </>
}

// const styles = StyleSheet.create({
//     geral:{
//       flex: 1,
//       backgroundColor: '#3d0c02',
//       alignItems:'center',      
//     },});