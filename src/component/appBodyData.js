import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Content, Card, CardItem, Body, Left, Thumbnail, Button, Icon  } from 'native-base'
import { DoubleBounce } from 'react-native-loader';
import HTMLView from 'react-native-htmlview';

class AppBodyData extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
  }

  render(){
    const { data } = this.props
    return (
      <Content style={{backgroundColor:'#e4f9d1'}}>
      {data && data.length ? data.map((item,index)=>{
        return (
          <Card key={index}>
            <CardItem>
              <Left>
                <Thumbnail source={item.img}/>
                <Body>
                  <Text style={{fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem content>
              <HTMLView value={item.desc}/>
            </CardItem>

            <CardItem content>
              <Button transparent>
                <Icon active name='thumbs-up'/>
                <Text>{`${item.like} Likes`}</Text>
              </Button>
              <Button transparent>
                <Icon active name='chatbubbles'/>
                <Text>{`${item.comment} Comments`}</Text>
              </Button>
              {/*<Text>{`${index+1}h ago`}</Text>*/}
            </CardItem>
          </Card>
        )
      }) : <View style = {styles.spinnerStyle}>
            <DoubleBounce style={{textAlign:'center',alignItem:'center'}} size={20} color="#3166cc" />
          </View>}
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  spinnerStyle:{
    flex: 1,
    marginTop:240,
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default AppBodyData
