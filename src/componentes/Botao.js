import React from "react";
import {TouchableOpacity, Image} from 'react-native';

import Texto from "./Texto";
import css from "./css"

export default function Add({Acao,TextoBotao,imageSource}) { 
    return <>
        <TouchableOpacity style={css.botao} onPress={Acao}>
          {imageSource && <Image style={css.ar2} source={imageSource} />}
          <Texto style={css.botaoTexto}>{TextoBotao}</Texto>
        </TouchableOpacity>
    </>
    
}

        /*<TouchableOpacity style={styles.botao}>
          <Texto style={styles.botaoTexto}>Carrinho</Texto>
        </TouchableOpacity>*/

  