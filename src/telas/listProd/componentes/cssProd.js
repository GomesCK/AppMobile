import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    geral:{
      width: "100%",
      height:"100%",
      backgroundColor: '#3d0c02',
      alignItems:'center',
      flex:1,      
    },
    ar:{
        width: 200,
        height: 200,
      },
    linha1: {
        flex: 1,
        justifyContent: "space-between",
        // flexDirection: "row"
    },
    Backgroud:{
      backgroundColor: '#3d0c02',
      alignItems:'center',      
    },
    Cards: {
        width: "100%",
        // flexDirection: 'row',
        backgroundColor: '#A2700F',
        flex: 1,
        padding: 10,
        margin: 3,
        // height: 460,
        borderRadius: 10,
        elevation: 3,
    },
    titulo: {
      fontSize: 20,
    },
    im: {
       widthfull: 100,
       justifyContent: 'center',
       width: "100%",
        
     },
    name:{
      fontSize: 20,
      fontWeight: 'bold',
    },
    pre:{
      fontSize: 15,
    },
    ingre:{
      fontSize: 15,
    },
  });

  export default styles;