import React, { PureComponent } from 'react'
import { CardItem, Card, Text, View, Body, Left, Thumbnail } from 'native-base';

export default class ListDeail extends PureComponent {
    render(){
        return(
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: this.props.item.uri}} />
                <Body>
                  <Text>{this.props.item.nome}</Text>
                </Body> 
              </Left>    
            </CardItem>
          </Card> 
          
        )
    }
}


