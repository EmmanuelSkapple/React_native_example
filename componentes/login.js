import * as React from 'react';
import {Text, View,TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
  constructor(props){
      super(props);
    }

    render(){
      return (
        <View style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Text>Este es un login</Text>
          <TouchableOpacity style={{marginTop:30,backgroundColor:'#030303',width:'50%',padding:10}} onPress={()=>this.props.navigation.navigate('Home')} >
            <Text style={{textAlign:'center',color:'#fff'}}>Ir a home</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
