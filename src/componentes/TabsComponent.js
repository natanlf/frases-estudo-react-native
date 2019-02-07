import React, { Fragment } from 'react';
import { Container, Header, Footer, FooterTab, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import estilos from '../estilos/estilo'
import Home from './Home'
import Autor from './Autor'

export default props => (
    <Container>
        <Header androidStatusBarColor="#000051" style={estilos.header} hasTabs>
            <Body>
                <Title>Frases</Title>
            </Body>   
        </Header>

        <View style={estilos.container}>
            <Tabs>
                <Tab heading={<TabHeading style={estilos.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
                    <Home/>
                </Tab>
                <Tab heading={<TabHeading style={estilos.tabHeading} ><Icon type="FontAwesome" name="book" /></TabHeading>}>
                    <Categoria />
                </Tab>
                <Tab heading={<TabHeading style={estilos.tabHeading} ><Icon type="FontAwesome" name="user" /></TabHeading>}>
                    <Autor />
                </Tab>
            </Tabs>
        </View>

        <Footer>
          <FooterTab>
            <Button>
              <Text>Site</Text>
            </Button>
            <Button active>
              <Text>Privacidade</Text>
            </Button>
            <Button>
              <Text>Contato</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
)

const Categoria = () => <Text>Categoria</Text>;
