import React from "react";
import { View, StatusBar, Image, Alert } from 'react-native';

import logoLogo from "./../../../../assets/gravatas.jpg"
import Texto from "../../../componentes/Texto";
import Add from "../../../componentes/Botao";
import css from "./cssProd"

export default function Detalhes({ botao }) {
  return <>

    <View style={css.geral}>
      <StatusBar />

      <Add Acao={() => {
        Alert.alert("Carrinho de compras!",
          "Em breve a funcionalidade do Carrinho de compras estará disponível!")
      }}
        TextoBotao={botao} />

    </View>

  </>

}
