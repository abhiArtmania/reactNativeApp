import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Content, Card, CardItem, Body, Left, Thumbnail, Button, Icon, Container } from 'native-base'
import { DoubleBounce } from 'react-native-loader';
import HTMLView from 'react-native-htmlview';
import AppHeader from './appHeader'
import Modal from 'react-native-modal';
import {GetImage, ContentSnippet} from '../helpers/helpers'

class AppBodyData extends Component {
  constructor(props){
    super(props)
    this.state={
      visibleModal: false,
    }
  }

  componentDidMount(){
    // this.getData()
  }

  openModal = (item) => {
    this.setState({
      visibleModal:!this.state.visibleModal,
      selectedItem: item
    })
  }

  _renderModalContent = () => {
    const { selectedItem } = this.state
    return (
    <View style={styles.modalContent}>
          <Image
            source={selectedItem.img}
            style={{
              width:260,
              height:200
          }}/>
      {this._renderButton('Close', () => this.setState({
        visibleModal: false,
        selectedItem: null
      }))}
    </View>
  )
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  render(){
    const { data } = this.props
    return (
      <Container>
      <AppHeader/>
      <Content style={{backgroundColor:'#e4f9d1'}}>
      {data && data.length ? data.map((item,index)=>{
        return (
          <TouchableOpacity key={item.id} onPress={()=>{this.openModal(item)}}>
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
          </TouchableOpacity>
        )
      }) : <View style = {styles.spinnerStyle}>
            <DoubleBounce style={{textAlign:'center',alignItem:'center'}} size={20} color="#3166cc" />
          </View>}
      </Content>
      { this.state.visibleModal ? <View style={styles.container}>
      <Modal
        isVisible={this.state.visibleModal}
        backdropColor={'#134604a3'}
        backdropOpacity={1}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        onBackButtonPress={()=>{
          this.setState({
            visibleModal:false,
            selectedItem:null
          })
        }}
      >
        {this._renderModalContent()}
      </Modal>
      </View>: null}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  spinnerStyle:{
    flex: 1,
    marginTop:240,
    justifyContent: 'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
})

export default AppBodyData
