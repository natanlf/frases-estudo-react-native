import React, { PureComponent } from 'react'
import { CardItem, Card, Text, View, Body, Left, Image, Thumbnail } from 'native-base';

export default class ListDetailCategoria extends PureComponent {
  render(){
    return(
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{this.props.item.nome}</Text>
            </Body> 
          </Left>    
        </CardItem>
      </Card> 
      
    )
}
}
