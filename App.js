import React, { Component } from 'react'
import { Container, StyleProvider } from 'native-base'
import { AppRegistry, StyleSheet } from 'react-native'
import {Stack, Scene, Router} from 'react-native-router-flux';

import AppHeader from './src/component/appHeader'
import AppBody from './src/component/appBody'
import AppFooter from './src/component/appFooter'
import getTheme from './src/themes/components'
import nineLessons from './src/themes/variables/nineLessons'
import About from './src/component/pages/aboutUs'
import Gallery from './src/component/pages/gallery'

export default class MyProject extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <StyleProvider style={getTheme(nineLessons)}>
      <Container>
        <Router>
          <Stack key="root">
            <Scene key='feed' component={AppBody} title='Feed' hideNavBar={true}/>
            <Scene key='gallery' component={Gallery} title='Gallery' hideNavBar={false}/>
            <Scene key='about' component={About} title='About' hideNavBar={false}/>
          </Stack>
        </Router>
        {/*<AppHeader/>
        <AppBody/>*/}
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
