import React, { Component } from 'react'
import { Text } from 'react-native'
import { Content, Card, CardItem, Body  } from 'native-base'
import AppBodyData from './appBodyData'

class AppBody extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    let self = this
    let data = [{
      id:0,
      title:'Knif Painting',
      img: require('../assets/images/img5.jpg'),
      like:20,
      comment:10,
      desc: 'Is your house ready for its periodic paint job? Well, at UrbanClap, we provide you with the best painting contractors in Delhi, who offer house painting services at affordable prices.'
    },{
      id:1,
      title:'Pencil portrait',
      img: require('../assets/images/img6.jpg'),
      like:65,
      comment:5,
      desc:'Is your house ready for its periodic paint job? Well, at UrbanClap, we provide you with the best painting contractors in Delhi, who offer house painting services at affordable prices.'
    },{
      id:2,
      title:'Poster color painting',
      img: require('../assets/images/img7.jpg'),
      like:90,
      comment:4,
      desc: 'Is your house ready for its periodic paint job? Well, at UrbanClap, we provide you with the best painting contractors in Delhi, who offer house painting services at affordable prices.'
    },{
      id:3,
      title:'Acrylic Painting',
      img: require('../assets/images/img3.jpg'),
      like:150,
      comment:5,
      desc: 'Is your house ready for its periodic paint job? Well, at UrbanClap, we provide you with the best painting contractors in Delhi, who offer house painting services at affordable prices.'
    },{
      id:4,
      title:'Oil Painting',
      img: require('../assets/images/img4.jpg'),
      like:150,
      comment:1,
      desc:'Is your house ready for its periodic paint job? Well, at UrbanClap, we provide you with the best painting contractors in Delhi, who offer house painting services at affordable prices.'
    },{
      id:5,
      title:'Pastle colors',
      img: require('../assets/images/img5.jpg'),
      like:250,
      comment:3,
      desc: 'Is your house ready for its periodic paint job? Well, at UrbanClap, we provide you with the best painting contractors in Delhi, who offer house painting services at affordable prices.'
    }]
    setTimeout(function(){
      self.setState({
        data:data
      })
    }, 3000);
  }

  render(){
    const { data } = this.state
    return (
      <AppBodyData data={data}/>
    )
  }
}

export default AppBody
