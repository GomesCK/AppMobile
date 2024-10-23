import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons/Ionicons";

import Texto from "../../componentes/Texto";
import styles from "./estilos";

export default function ListaItem({id, nome, imagem}){
    return <View style={styles.cardContainer}>
        <Card mode='contained' style={styles.card}>
            <Card.Cover source={imagem} style={styles.imagem}></Card.Cover>
            <Texto style={styles.nomeProduto}>{nome}</Texto>
        </Card>        
    </View>
}
