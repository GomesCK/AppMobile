import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from "../../componentes/Texto";
import styles from "./estilos";


export default function ListaItem({ id, nome, imagem }) {

    const clearAsyncStorage = async () => {
        try {
          await AsyncStorage.clear();
          console.log("Todo o AsyncStorage foi limpo");
        } catch (error) {
          console.error("Erro ao limpar o AsyncStorage:", error);
        }
      };

    // const removeItemFromAsyncStorage = async (key) => {
    //     try {
    //         await AsyncStorage.removeItem(key);
    //         console.log(`Item com a chave ${key} foi removido`);
    //     } catch (error) {
    //         console.error("Erro ao remover item do AsyncStorage:", error);
    //     }
    // };

    return<SafeAreaView style={styles.cardContainer}>
        <StatusBar />
        <Card mode='contained' style={styles.card}>
            <Card.Content>
                <Card.Cover source={imagem} style={styles.imagem}></Card.Cover>
                <Texto style={styles.nomeProduto}>{nome}</Texto>
            </Card.Content>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button icon="heart" onPress={() => clearAsyncStorage(id, nome, imagem)} />
            </Card.Actions>
        </Card>
    </SafeAreaView>
}
