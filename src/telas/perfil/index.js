import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, PixelRatio, Button } from 'react-native';
// import { Card } from "react-native-paper";
import { Camera, CameraType } from 'expo-camera/legacy';
import { useNavigation } from '@react-navigation/native';


// import Detalhes from "./componentes/Detalhes";
// import Topo from "./componentes/Topo";
// import Item from "./componentes/Item";

export default function Perfil() {
    const navigation = useNavigation();
    const [nomeuser, mudaNome] = React.useState('');
    const [sobrenomeuser, mudaSobrenome] = React.useState('');
    const [cidadeuser, mudaCidade] = React.useState('');
    const [profiuser, mudaProfi] = React.useState('');

    return (
        <View style={styles.container}>            
            <View style={styles.fundouser}></View>

            <View style={styles.input}>
                <View>
                    <Text>Nome</Text>
                    <TextInput
                        onChangeText={mudaNome}
                        value={nomeuser}
                        placeholder="Insira o seu nome"
                    />
                </View>

                <View>
                    <Text>Sobrenome</Text>
                    <TextInput
                        onChangeText={mudaSobrenome}
                        value={sobrenomeuser}
                        placeholder="Insira o seu sobrenome"
                    />
                </View>
            </View>

            <View style={styles.input2}>
                <View>
                    <Text>Cidade</Text>
                    <TextInput
                        onChangeText={mudaCidade}
                        value={cidadeuser}
                        placeholder="Insira a sua cidade"
                    />
                </View>

                <View>
                    <Text>Profissão</Text>
                    <TextInput
                        onChangeText={mudaProfi}
                        value={profiuser}
                        placeholder="Insira a sua profissão"
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.btsalvar}>
                <Text>SALVAR INFORMAÇÕES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btsalvar} onPress={() => navigation.navigate('Camera')}>
                <Text>Abrir Camera</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    video: {
        width: 350,
        height: 275,
        alignSelf: "center",
    },
    input: {
        flexDirection: "columns",
        justifyContent: 'left',
        alignItems: 'left',
        gap: 10,
        marginBottom: 20,
    },
    entrada: {
        flexDirection: "row",
        justifyContent: 'left',
        alignItems: 'left',
        gap: 70,
        marginBottom: 20,
    },
    input2: {
        flexDirection: "columns",
        justifyContent: "left",
        alignItems: 'left',
        gap: 10,
    },
    fundouser: {
        marginBottom: 70,
        width: 200,
        height: 200,
        backgroundColor: "red",
        borderRadius: 100,
        marginTop: 60,
    },
    btsalvar: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 15,
        marginTop: 50,
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    titulo: {
        fontSize: 17,
        fontWeight: 'bold',
        color:'red'
    }
});