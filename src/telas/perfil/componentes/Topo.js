import React from "react";
import {StatusBar, View, Image, Alert} from 'react-native';

import Logo from "./../../../../assets/P-removebg-preview.png"
// import Texto from "../../../componentes/Texto";
import css from "./cssProd"

export default function Topo({titulo}) { 
    return <>
    <View style={css.Backgroud}>
      <StatusBar/>
      <View style={css.arr}>
        <Image style={css.ar} source={Logo} />
      </View> 
    </View>
    </>    
}
  