import React, { Component } from 'react'
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import estilo from '../estilos/estilo'

export default class Home extends Component {
    
    render(){
        return(
            <Content>
                {frasesList.map(frase => (
                <Card key={frase.id} style={estilo.fraseCard}>
                    <CardItem cardBody>
                        <Body>
                            <Text style={estilo.frase}>{frase.frase}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>                          
                        <Text note>{frase.autor}</Text>
                    </CardItem>
                    <CardItem button onPress={ () => alert(frase.id) }>
                        <Right>
                            <Icon type="FontAwesome" name="share-alt" />
                        </Right>      
                    </CardItem>
                </Card>))}
            </Content>
        )
    }
}

frasesList = [
    {id: 1, frase: "Se for para desistir, desista de ser fraco", autor: "Will Detilli"},
    {id: 2, frase: "Melhor voltar ao ínicio que perder-se no caminho", autor: "Ditado Russo"},
    {id: 3, frase: "Ser feliz sem motivo é a mais autêntica forma de felicidade", autor: "Carlos Drummond de Andrade"},
    {id: 4, frase: "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.", autor: "Nemo Nox"},
    {id: 5, frase: "Imagine uma nova história para sua vida e acredite nela.", autor: "Paulo Coelho"}
]


