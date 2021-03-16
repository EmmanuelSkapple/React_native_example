import * as React from 'react';
import {Text, View,TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  constructor(props){
      super(props);
    }

    render(){
      return (
        <View style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Text>Este es un home</Text>
          <TouchableOpacity style={{marginTop:30,backgroundColor:'#030303',width:'50%',padding:10}} onPress={()=>this.props.navigation.navigate('Invitaciones')} >
            <Text style={{textAlign:'center',color:'#fff'}}>ver invitacion</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
