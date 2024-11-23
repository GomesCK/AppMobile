import React from "react";
import { View, Image, StyleSheet, Alert, Touchable, Vibration } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

import css from "./cssProd";
import Texto from '../../../componentes/Texto';
import Logo from "./../../../../assets/P-removebg-preview.png"

export default function Menu({ item: {id, titulo, descricao, imagem } }) {

    //Função para guardar a Lista de Desejos 
    async function addListaDesejos(id, titulo, imagem) {

        const addProduto = [{
            id: id,
            titulo: titulo,
            imagem: imagem,
        }];
        

        //Verifica se o AsyscStorage está populado
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        if (listaDesejosSalva == null) {
            //Converte os dados para string 
            const listaDesejosAtualizada = JSON.stringify(addProduto);

            //Insere o produto na Lista de Desejos
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("O produto foi adicionado com sucesso na sua Lista de Desejos!");
            console.log("Produto inserido");
            console.log(listaDesejosAtualizada);
        } else {
            //A Lista de Desejos já tem conteúdo
            const listaDesejos = JSON.parse(listaDesejosSalva);

            //Adiciona um novo produto na Lista de Desejos 
            listaDesejos.push({ id: id, titulo: titulo, imagem: imagem });

            const listaDesejosAtualizada = JSON.stringify(listaDesejos);

            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("O produto foi adicionado com sucesso na sua Lista de Desejos!");
            console.log("Mais um produto na lista");
            console.log(listaDesejosAtualizada);
        }
        Vibration.vibrate();
    }
    return <View style={css.geral}>
        {/* <Image style={css.ar} source={Logo}/> */}
        
        <View style={css.linha1}>
            <Card style={css.Cards}>
                {/* <Card.Title title="Gravatas coloridas" subtitle="Kit com 4 gravatas" /> */}
                <Card.Content>
                    <Texto style={css.name}>{titulo}</Texto>
                    <Texto style={css.pre}>{descricao}</Texto>
                </Card.Content>
                <Card.Cover style={css.im} source={imagem} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button icon="heart" onPress={() => addListaDesejos(id, titulo, imagem)} />
                </Card.Actions>
            </Card>
        </View>
    </View>
}