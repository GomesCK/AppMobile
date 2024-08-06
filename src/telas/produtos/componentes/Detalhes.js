import React from "react";
import {View, StatusBar, Image, Alert} from 'react-native';

import logoLogo from "./../../../../assets/gravatas.jpg"
import Texto from "../../../componentes/Texto";
import Add from "./../../../componentes/Botao";
import css from "./cssProd"

export default function Detalhes({nome,detalhes,preco,botao}) { 
    return <>

      <View style={css.geral}>
      <StatusBar/>
        <View style={css.logotipo}>
          <Image source={logoLogo} style={css.logo} resizeMode="contain"/>
        </View>
          <Texto style={css.titulo}>{nome}</Texto>
          <Texto style={css.corpo}>{detalhes}</Texto>
          <Texto style={css.preco}>{preco}</Texto>
        <Add Acao={() => {Alert.alert("Carrinho de compras!", 
          "Em breve a funcionalidade do Carrinho de compras estará disponível!")}} 
          TextoBotao={botao} />   
        
    </View>
    
    </>
    
}
  