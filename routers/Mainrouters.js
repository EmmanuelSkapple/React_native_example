import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../componentes/splash.js'
import Login from '../componentes/login.js'
import Home from '../componentes/home.js'
import Invitaciones from '../componentes/invitaciones.js'
const Stack = createStackNavigator();


export default class RouteMain extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="Invitaciones"  component={Invitaciones} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
