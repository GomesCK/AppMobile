import React from "react";
import {FlatList, View} from 'react-native';
import { Video, ResizeMode } from "expo-av";

import css from "./componentes/cssSobre";
import Sobre from "./componentes/sobre";
// import css from "./componentes/cssSobre";

//Captura o tamanho da tela que está rodando o app
//const width = Dimensions.get('screen').width;

export default function Index({detalhes}) { 
    const video = React.useRef(null);
    return <>

        

        <FlatList 
            ListHeaderComponent={() =>{
                return<>
                    <Sobre {...detalhes}/>
            <View style={css.Backgroud}>
            <Video
                ref={video}
                style={css.video}
                source={{
                uri: 'https://videos.pexels.com/video-files/4480978/4480978-uhd_2560_1440_25fps.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />
            </View>
                </>
        }}/> 
    </>
}
