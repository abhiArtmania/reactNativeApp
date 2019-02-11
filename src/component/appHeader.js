import React, { Component } from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { Header, Left, Button, Icon, Title, Body, Right } from 'native-base'

class AppHeader extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Header style={{paddingBottom:30, paddingTop:40}}>
        {/*<Left>
          <Button transparent>
            <Icon name='arrow-back'/>
          </Button>
        </Left>*/}
        <Body style={styles.headerBody}>
           <Text style={styles.bodyText}>A R T M A N I A <Icon name='brush'/></Text>
           {/*<Image source={require('../assets/images/img1.jpg')} style={{width:150,height:30}}/>*/}
        </Body>
        {/*<Right>
          <Button transparent>
            <Icon name='menu'/>
          </Button>
        </Right>*/}
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor:'#b5b5b5'
  },
  headerBody:{
    alignItems: "center"
  },
  bodyText:{
    color:'#3166cc',
    fontSize:17,
    fontWeight:'bold'
  }
})

export default AppHeader
