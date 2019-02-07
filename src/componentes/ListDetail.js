import React, { PureComponent } from 'react'
import { Container, CardItem, Card, Text, View } from 'native-base';
import { FlatList } from 'react-native'
import estilo from '../estilos/estilo'

export default class ListDeail extends PureComponent {
    render(){
        return(
          <Card><CardItem><Text>{this.props.item.nome}</Text></CardItem></Card> 
          
        )
    }
}


