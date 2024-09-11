import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, PixelRatio, Button } from 'react-native';
// import { Card } from "react-native-paper";
import { Camera, CameraType } from 'expo-camera/legacy';


// import Detalhes from "./componentes/Detalhes";
// import Topo from "./componentes/Topo";
// import Item from "./componentes/Item";

export default function Perfil() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Virar Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>           
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
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        marginBottom: 20,
    },
    input2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        gap: 50,
    },
    fundouser: {
        marginBottom: 70,
        width: 150,
        height: 150,
        backgroundColor: "black",
        borderRadius: 80,
        marginTop: 60,
    },
    btsalvar: {
        backgroundColor: "grey",
        padding: 10,
        borderRadius: 15,
    },
    container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});