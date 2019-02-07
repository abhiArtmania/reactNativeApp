import React, { Component } from 'react'
import { Text } from 'react-native'
import { Content, Card, CardItem, Body  } from 'native-base'

class AppBody extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>
                My project
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

export default AppBody
