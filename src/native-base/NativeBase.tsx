import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
} from 'native-base'

export default class NativeBase extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button>
              <Text>=</Text>
            </Button>
          </Left>
          <Body>
          <Title>Header</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
