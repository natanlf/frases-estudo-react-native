import React, { Component } from 'react'
import { View } from 'native-base';
import { Text, FlatList } from 'react-native'
import estilo from '../estilos/estilo'

import ListDetailCategoria from './ListDetailCategoria'

export default class Categoria extends Component {

    state = {
        categorias: [
            {id: 1, nome: "Amor", uri: "https://s3-sa-east-1.amazonaws.com/natancode-carros-spring-ionic/cp1.jpg"},
            {id: 2, nome: "Felicidade", uri: "https://s3-sa-east-1.amazonaws.com/natanlf-curso-spring-ionic/cp1.jpg"},
            {id: 3, nome: "Motivação", uri: "https://s3-sa-east-1.amazonaws.com/natanlf-curso-spring-ionic/cp2.jpg"},
            {id: 4, nome: "Saúde", uri: "https://s3-sa-east-1.amazonaws.com/natancode-carros-spring-ionic/cp4.jpg"},
            {id: 5, nome: "Engraçadas", uri: "https://s3-sa-east-1.amazonaws.com/natancode-carros-spring-ionic/cp2.jpg"}
        ]
    }

    render(){
        return(
            <View>
                    
                <FlatList data={this.state.categorias}
                    keyExtractor={ item => `${item.id}`}
                    renderItem={({item}) => <ListDetailCategoria item={item}/> }>    
                </FlatList>
            </View>
        )
    }
}