import React, { Component } from 'react'
import { Container, CardItem, Card, Text, View } from 'native-base';
import { FlatList } from 'react-native'
import estilo from '../estilos/estilo'

import ListDetail from './ListDetail'

export default class Autor extends Component {

    state = {
        autores: [
            {id: 1, nome: "Will Detilli"},
            {id: 2, nome: "Ditado Russo"},
            {id: 3, nome: "Paulo Coelho"},
            {id: 4, nome: "Carlos Drummond de Andrade"},
            {id: 5, nome: "Nemo Nox"}
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


