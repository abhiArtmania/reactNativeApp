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

  componentWillMount(){
    //alert(Actions.currentScene)
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
    } else if(tab == 'instagram'){
      Actions.instagram()
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
          <Button active={activeTab === 'instagram'} onPress={()=>{
            this.tabAction('instagram')
          }}>
            <Icon name='person'/>
            <Text>Instagram</Text>
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
