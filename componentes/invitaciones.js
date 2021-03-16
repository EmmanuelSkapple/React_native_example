import * as React from 'react';
import {Text, View,TouchableOpacity } from 'react-native';

export default class Invitaciones extends React.Component {
  constructor(props){
      super(props);
    }

    render(){
      return (
        <View style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Text>Este es una invitacion</Text>
  
        </View>
      );
    }
  }
