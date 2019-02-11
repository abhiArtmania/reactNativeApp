import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

class AppFooter extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeTab: 'feed'
    }
  }

  tabAction = (tab) => {
    this.setState({
      activeTab:tab
    })
    if(tab == 'feed'){
      Actions.feed()
    } else if(tab == 'gallery'){
      Actions.gallery()
    } else if(tab == 'about'){
      Actions.about()
    }
  }

  render(){
    const { activeTab } = this.state
    return (
      <Footer>
        <FooterTab>
          <Button active={activeTab === 'feed'} onPress={()=>{
            this.tabAction('feed')
          }}>
            <Icon name='egg'/>
            <Text>Feed</Text>
          </Button>
          <Button active={activeTab === 'gallery'} onPress={()=>{
            this.tabAction('gallery')
          }}>
            <Icon name='image'/>
            <Text>Gallery</Text>
          </Button>
          <Button active={activeTab === 'about'} onPress={()=>{
            this.tabAction('about')
          }}>
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
