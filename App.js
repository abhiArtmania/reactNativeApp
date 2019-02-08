import React, { Component } from 'react'
import { Container, StyleProvider } from 'native-base'
import { AppRegistry, StyleSheet } from 'react-native'
import AppHeader from './src/component/appHeader'
import AppBody from './src/component/appBody'
import AppFooter from './src/component/appFooter'
import getTheme from './src/themes/components'
import nineLessons from './src/themes/variables/nineLessons'

export default class MyProject extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <StyleProvider style={getTheme(nineLessons)}>
      <Container style={styles.container}>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
      </StyleProvider>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:23
  }
})

AppRegistry.registerComponent('MyProject',()=>MyProject);
