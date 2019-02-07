import React, { Component } from 'react'
import { View } from 'native-base';
import { FlatList } from 'react-native'
import estilo from '../estilos/estilo'

import ListDetail from './ListDetail'

export default class Autor extends Component {

    state = {
        autores: [
            {id: 1, nome: "Will Detilli", uri: "https://s3-sa-east-1.amazonaws.com/natancode-carros-spring-ionic/cp1.jpg"},
            {id: 2, nome: "Ditado Russo", uri: "https://s3-sa-east-1.amazonaws.com/natanlf-curso-spring-ionic/cp1.jpg"},
            {id: 3, nome: "Paulo Coelho", uri: "https://s3-sa-east-1.amazonaws.com/natanlf-curso-spring-ionic/cp2.jpg"},
            {id: 4, nome: "Carlos Drummond de Andrade", uri: "https://s3-sa-east-1.amazonaws.com/natancode-carros-spring-ionic/cp4.jpg"},
            {id: 5, nome: "Nemo Nox", uri: "https://s3-sa-east-1.amazonaws.com/natancode-carros-spring-ionic/cp2.jpg"}
        ]
    }

    render(){
        return(
            <View>
                    
                    <FlatList data={this.state.autores}
                    keyExtractor={ item => `${item.id}`}
                    renderItem={({item}) => <ListDetail item={item}/> }>
                    
                    </FlatList>
            </View>
        )
    }
}


