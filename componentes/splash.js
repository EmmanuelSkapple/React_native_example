import * as React from 'react';
import {Text, View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends React.Component {
  constructor(props){
      super(props);
    }
    componentDidMount(){
      let self = this;
      setTimeout( ()=>{
        self.props.navigation.replace('Login')
      },5000,this)
    }

    render(){
      return (
        <View style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Animatable.View  animation='rotate' iterationCount={'infinite'}>
            <IconAntDesign size={25}  name='loading1'></IconAntDesign>
          </Animatable.View>
          <Text>Este es mi splash</Text>
        </View>

      );
    }
  }
