import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    geral:{
      backgroundColor: '#3d0c02',
      alignItems:'center',      
    },
    titulo:{
      fontSize: 30,
      fontWeight:"bold",
      color:'#E5B80B',
      textAlign:'center',
    },
    corpo:{
      paddingTop: 5,
      fontSize: 20,
      color:'gray',
    },
    preco:{
      paddingTop: 10,
      fontSize: 25,
      textAlign:'center',
      fontWeight:"bold",
      color:'white'
    },
    logo:{
      paddingLeft: 100,
      paddingRight: 100,
      width:80,
      height:80,
    },
    logotipo: {
      /*flexDirection:"row",*/
    },
    Backgroud:{
        backgroundColor: '#3d0c02',
        alignItems:'center',      
      },
      detalhes:{
        fontSize: 30,
        fontWeight:"bold",
        color:'#E5B80B',
        textAlign:'center',
        width:"100%",
      },
      ar:{
        width: 200,
        height: 200,
      },
      ar2:{
        width: 50,
        height: 50,
        marginLeft: 250,
        position:"absolute",
        display:"flex",
      },
      arr:{
        flexDirection:"row",
      },
      Carrinho:{
        position:"absolute",
        paddingLeft: 240,
      },
  });

  export default styles;