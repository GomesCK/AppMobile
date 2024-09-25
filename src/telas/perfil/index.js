import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, PixelRatio, Button } from 'react-native';
<<<<<<< HEAD
// import { Card } from "react-native-paper";
// import { Camera, CameraType } from 'expo-camera/legacy';
=======
import { Camera, CameraType } from 'expo-camera/legacy';
>>>>>>> ea5218122e074b38eea33bb3e1cb0a8b09047f95
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';


// import Detalhes from "./componentes/Detalhes";
// import Topo from "./componentes/Topo";
// import Item from "./componentes/Item";

export default function Perfil() {
    const navigation = useNavigation();
    const [nomeuser, mudaNome] = React.useState('');
    const [sobrenomeuser, mudaSobrenome] = React.useState('');
    const [cidadeuser, mudaCidade] = React.useState('');
    const [profiuser, mudaProfi] = React.useState('');
    const [capturedImage, setCapturedImage] = useState(null);
    const cameraRef = useRef(null);

    async function tirarFoto() {
        //Verifica se a foto foi tirada
        if(cameraRef){
            const photo = await cameraRef.current.takePictureAsync();
            console.log("A foto foi tirada!", photo.uri);
            setCapturedImage(photo.uri);
        }
    }

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
            <Card mode='elevated'>
                <Card.Content>
                    {//Verifica se a foto foi tirada
                        capturedImage &&
                        <View style={styles.fotoTiradaContainer}>
                            <Image source={{uri: capturedImage}} style={{flex:1}}/>
                        </View>
                    }
                </Card.Content>
            </Card>

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
    },
    fotoTiradaContainer: {
        width: '50%',
        height: '25%',
        alignSelf: 'center',
        borderRadius: '10',
    }

});