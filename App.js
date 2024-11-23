import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, BackHandler, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { SpaceGrotesk_300Light, SpaceGrotesk_700Bold, useFonts } from '@expo-google-fonts/space-grotesk';
import Texto from './src/componentes/Texto';
import { Audio } from 'expo-av';

import mock from './src/mocks/produto';
import mock1 from './src/mocks/sobree';
import mock2 from './src/mocks/cardList'
import mock3 from './src/mocks/perfil'
import Prod from './src/telas/produtos/';
import Sobri from './src/telas/sobre/';
import List from './src/telas/listProd/';
import Perfi from './src/telas/perfil/';
import CameraScreen from './src/telas/Camera/';
import ListaDesejos from './src/telas/ListaDesejos/';

function Produ() {
  return <Prod {...mock} />
}
function Sob() {
  return <Sobri {...mock1} />
}
function ListP() {
  return <List {...mock2} />
}
// function Perfil() {
//   return <Perfi {...mock3} />
// }

function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfi} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}

const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabMenu() {
  return <tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Produtos") {
          iconName = focused
            ? 'bag'
            : 'bag-outline';
        } else if (route.name === "Sobre nós") {
          iconName = focused
            ? 'reader'
            : 'reader-outline';
        } else if (route.name === "Lista de produtos") {
          iconName = focused
            ? 'list'
            : 'list-outline';
        } else if (route.name === "Lista de Desejos") {
          iconName = focused
            ? 'heart'
            : 'heart-outline';
        } else if (route.name === "Perfil") {
          iconName = focused
            ? 'person'
            : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />
      },

      tabBarActiveTintColor: 'brown',
      tabBarInactiveTintColor: 'grey',
      tabBarHideOnKeyboard: true,
      headerShown: false,

    })}>
    <tab.Screen name="Produtos" component={Produ} />
    <tab.Screen name="Lista de produtos" component={ListP} />
    <tab.Screen name="Lista de Desejos" component={ListaDesejos} />
    <tab.Screen name="Sobre nós" component={Sob} />
    <tab.Screen name="Perfil" component={PerfilStack} />
    {/* <tab.Screen name="Perfil" component={Perfil} />
    <tab.Screen name="Câmera" component={CameraScreen} /> */}

  </tab.Navigator>
}

function MenuAudio() {

  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/MEME - calça MAIS 300 REAIS_TGF4LWrW3qg.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={() => { if (!loading) { setAudioStatus(!audioStatus); } }}>
    <Texto>🎶On/Off</Texto>
  </TouchableOpacity>
}

export default function App() {

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  // const [fonteCarregada] = useFonts({
  //   "SpaceGroteskRegular": SpaceGrotesk_300Light,
  //   "SpaceGroteskBold": SpaceGrotesk_700Bold
  // });  
  return <NavigationContainer>
    <TabMenu />
    <MenuAudio />
  </NavigationContainer>
  /*return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World!!</Text>
      <Text>Meu primeiro APP em JS!!</Text>
      <StatusBar style="auto" />
    </View>
  );*/
}
