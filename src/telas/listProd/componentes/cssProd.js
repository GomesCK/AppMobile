import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    geral:{
      backgroundColor: '#3d0c02',
      alignItems:'center',      
    },
    ar:{
        width: 200,
        height: 200,
      },
    linha1: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    Cards: {
        backgroundColor: '#A2700F',
        flex: 1,
        padding: 10,
        margin: 3,
    },
    container: {
      width: "100%",
      height:"100%",
      backgroundColor: "orange",
      flex:1,
    },
    titulo: {
      fontSize: 20,
    },
      im: {
         widthfull: 100,
         justifyContent: 'center',
         width: "100%",
        
     },
    card: {
      width: "100%",
      flexDirection: 'row',
      paddingTop: 15,
      margin: 5,
      height: 460,
      borderRadius: 10,
      elevation: 3,
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