import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}){
    //Determina a formatação padrão do componente
    let estilo = estilos.texto;

    //Verifica se, a fonte é em Negrito ou não
    if (style?.fontWeight==="bold"){
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "SpaceGroteskRegular",
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: "SpaceGroteskBold",
        fontWeight: 'normal',
    }
})