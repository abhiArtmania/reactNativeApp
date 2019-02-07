import React, { Component } from 'react'
import {Container} from 'native-base'
import { AppRegistry, StyleSheet } from 'react-native'
import AppHeader from './src/component/appHeader'
import AppBody from './src/component/appBody'
import AppFooter from './src/component/appFooter'

export default class MyProject extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Container style={styles.container}>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:23
  }
})

AppRegistry.registerComponent('MyProject',()=>MyProject);