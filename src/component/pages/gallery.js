import React, { Component } from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { Content, Card, CardItem } from 'native-base'

class Gallery extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Content>
        <Card>
          <CardItem>
            <Text>Gallery Section</Text>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

const styles = StyleSheet.create({

})

export default Gallery
