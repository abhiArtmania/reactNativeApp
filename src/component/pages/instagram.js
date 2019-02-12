import React, { Component } from 'react'
import { View, WebView, Text, StyleSheet } from 'react-native'
import { Content, Card, CardItem } from 'native-base'

class Instagram extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount= ()=> {

  }

  render(){
    return (
      <Content>
        <View style = {styles.container}>
          <WebView
            source = {{ uri: 'https://www.instagram.com/abhi_artmania' }}
          />
        </View>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height: 500
  }
})

export default Instagram
