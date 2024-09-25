import React from "react";
import {View,ScrollView,Image,Alert} from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";

import img from "./../../../../assets/gravatas.jpg"
import img1 from "./../../../../assets/Gravatas2.jpg"
import img2 from "./../../../../assets/GravatasB.jpg"
import img3 from "./../../../../assets/GravataseT.jpg"
// import Texto from "../../../componentes/Texto";
// import Add from "./../../../componentes/Botao";
import Logo from "./../../../../assets/P-removebg-preview.png"
import css from "./cssProd"

export default function Detalhes() { //{item:{nome,imagem,descricao}}
    
    async function addListaDesejos(id, nome, imagem) {
        const addProduto = [{
            id: id,
            nome: nome,
            imagem: imagem,
        }]
        
        //
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        if(listaDesejosSalva == null){
            const listaDesejosAtualizada = JSON.stringify(addProduto);

            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        }
    }
    return <>
        <ScrollView >
            <View style={css.geral}>
                <Image style={css.ar} source={Logo} />
                <View style={css.linha1}>
                    <Card style={css.Cards}>
                        <Card.Title title="Gravatas coloridas" subtitle="Kit com 4 gravatas"/>
                        <Card.Content>
                            <Text>Kit com 4 gravatas. O kit é composto nas cores azul, 
                                azul escuro, cinza e preto.
                            </Text>
                        </Card.Content>
                        <Card.Cover source={img}/>
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button icon="heart" onPress={() => Alert.alert("Adicionado a lista de desejo")}/>
                        </Card.Actions>
                    </Card>  
                    <Card style={css.Cards}>
                        <Card.Title title="Gravatas coloridas" subtitle="Kit com 4 gravatas"/>
                        <Card.Content>
                            <Text>Kit com 4 gravatas. O kit é composto nas cores azul, 
                                azul escuro, cinza e preto.
                            </Text>
                        </Card.Content>
                        <Card.Cover source={img1}/>
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button icon="heart" onPress={() => Alert.alert("Adicionado a lista de desejo")}/>
                        </Card.Actions>
                    </Card>
                </View>
                <View style={css.linha1}>
                    <Card style={css.Cards}>
                        <Card.Title title="Gravatas coloridas" subtitle="Kit com 4 gravatas"/>
                        <Card.Content>
                            <Text>Kit com 4 gravatas. O kit é composto nas cores azul, 
                                azul escuro, cinza e preto.
                            </Text>
                        </Card.Content>
                        <Card.Cover source={img2}/>
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button icon="heart" onPress={() => Alert.alert("Adicionado a lista de desejo")}/>
                        </Card.Actions>
                    </Card>
                    <Card style={css.Cards}>
                        <Card.Title title="Gravatas coloridas" subtitle="Kit com 4 gravatas"/>
                        <Card.Content>
                            <Text>Kit com 4 gravatas. O kit é composto nas cores azul, 
                                azul escuro, cinza e preto.
                            </Text>
                        </Card.Content>
                        <Card.Cover source={img3}/>
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button icon="heart" onPress={() => Alert.alert("Adicionado a lista de desejo")}/>
                        </Card.Actions>
                    </Card>
                </View>    
            </View>
        </ScrollView>
    </>
}