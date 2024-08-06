import React from "react";
import {View, Image} from 'react-native';

import Texto from "../../../componentes/Texto";
import css from "./cssSobre";

export default function Sobre({imagem,detalhe,baixo}) { 
    return <>
        <View style={css.Backgroud}>
            <Image style={css.ar} source={imagem} />
            <Texto style={css.detalhes}>{detalhe}</Texto>
            <Image style={css.ar} source={baixo} />     
        </View>
    </>
    
}