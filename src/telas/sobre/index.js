import React from "react";
import {FlatList} from 'react-native';

import Sobre from "./componentes/sobre";
// import css from "./componentes/cssSobre";

//Captura o tamanho da tela que está rodando o app
//const width = Dimensions.get('screen').width;

export default function Index({detalhes}) { 
    
    return <>

        <FlatList 
            ListHeaderComponent={() =>{
                return<>
                    <Sobre {...detalhes}/>
                </>
        }}/> 
    </>
}
