
import React, { Component } from 'react';
import { Alert, Button, View ,StyleSheet,Text} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider} from 'react-redux'; 
import { createStore, applyMiddleware} from 'redux'; 
import  ReduxThunk from 'redux-thunk' 
import firebase from 'firebase';

import Reducers from './src/screens/Reducers'
import home from './src/screens/home'; 
import login from './src/screens/login'; 
import cadastro from './src/screens/cadastro';

let store =createStore(Reducers , applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

export default class Home extends Component { 
constructor(props) {
    super(props);
    this.state= {}; 
}
 
 render(){ 
    return ( 
      <Provider store={store}> 
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="home" component={home} />
              <Stack.Screen name="login" component={login} />
              <Stack.Screen name="cadastro" component={cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      );
 }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
