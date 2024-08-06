import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SpaceGrotesk_300Light, SpaceGrotesk_700Bold, useFonts} from '@expo-google-fonts/space-grotesk';

import mock from './src/mocks/produto';
import mock1 from './src/mocks/sobree';
import mock2 from './src/mocks/cardList'
import Prod from './src/telas/produtos/';
import Sobri from './src/telas/sobre/';
import List from './src/telas/listProd/';

function Produ(){
  return<Prod {...mock} />
}
function Sob(){
  return<Sobri {...mock1} />
}
function ListP(){
  return<List {...mock2} />
}

const tab = createBottomTabNavigator();

function TabMenu(){
  return <tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if(route.name === "Produtos"){
          iconName = focused
          ? 'bag'
          : 'bag-outline';
        }else if (route.name === "Sobre nós"){
          iconName = focused
          ? 'reader'
          : 'reader-outline';
        }else if (route.name === "Lista de produtos"){
          iconName = focused
          ? 'list'
          : 'list-outline';
        }else if (route.name === "Lista de Desejos"){
          iconName = focused
          ? 'heart'
          : 'heart-outline';
        }

        return <Ionicons name={iconName} size={size} color={color}/>
      },

    tabBarActiveTintColor: 'brown',
    tabBarInactiveTintColor: 'grey',
    tabBarHideOnKeyboard: true,
    headerShown: false,

    })}>
      <tab.Screen name="Produtos" component={Produ} />
      <tab.Screen name="Lista de produtos" component={ListP} />
      <tab.Screen name="Lista de Desejos" component={Produ} />
      <tab.Screen name="Sobre nós" component={Sob} />
    </tab.Navigator>
}

export default function App() {

  const [ fonteCarregada ] = useFonts ({"SpaceGroteskRegular": SpaceGrotesk_300Light,
  "SpaceGroteskBold": SpaceGrotesk_700Bold});
  if(!fonteCarregada){
  return<View/>}
  return <NavigationContainer>
    <TabMenu/>
  </NavigationContainer>

  
  /*return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World!!</Text>
      <Text>Meu primeiro APP em JS!!</Text>
      <StatusBar style="auto" />
    </View>
  );*/
}

