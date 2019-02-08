import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base'

class AppFooter extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Footer>
        <FooterTab>
          <Button active>
            <Icon active name='egg'/>
            <Text>Feed</Text>
          </Button>
          <Button>
            <Icon name='camera'/>
            <Text>Camera</Text>
          </Button>
          <Button>
            <Icon name='person'/>
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const styles = StyleSheet.create({
  inActiveTabs:{
    backgroundColor:'#b5b5b5'
  },
  activeTabs:{
    backgroundColor:'#878787'
  }
})

export default AppFooter
