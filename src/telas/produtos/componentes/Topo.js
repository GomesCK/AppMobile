import React from "react";
import {StatusBar, View, Image, Alert} from 'react-native';

import Logo from "./../../../../assets/P-removebg-preview.png"
import Texto from "../../../componentes/Texto";
import Add from "./../../../componentes/Botao";
import Car from "./../../../../assets/Car3.png";
import css from "./cssProd"

//Captura o tamanho da tela que está rodando o app
//const width = Dimensions.get('screen').width;

export default function Topo({titulo}) { 
    return <>
    <View style={css.Backgroud}>
      <StatusBar/>
      <View style={css.arr}>
        <Image style={css.ar} source={Logo} />
        <View style={css.Carrinho}>
        <Add imageSource={Car} Acao={() => {Alert.alert("Carrinho de compras!")}} />
        </View> 
      </View>
      <Texto style={css.detalhes}>{titulo}</Texto>     
    </View>
    </>
    
}
  