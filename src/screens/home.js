import React, { Component } from 'react';
import { View ,Text,StyleSheet, Alert, Button,TouchableOpacity} from 'react-native'; 
export default class Home extends Component {
 render(){
  return (
    <View style={styles.container}>
        <Text style={styles.textButton}>Usando Redux/Firebase</Text> 
        <TouchableOpacity   style={styles.button} onPress={()=>this.props.navigation.navigate('login')}  >
                <Text style={styles.textButton}>Login</Text>
         </TouchableOpacity> 

        <TouchableOpacity   style={styles.button} onPress={()=>this.props.navigation.navigate('cadastro')}  >
                <Text style={styles.textButton}>Cadastro</Text>
         </TouchableOpacity> 
    </View>
   );
 }
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#7248B7',
        alignItems: 'center', 
        justifyContent: 'center',
      },
    button:{
        backgroundColor:'#5dabd1',
        padding:10,
        width:300,
        margin:10,
        height:50,
        borderRadius:10,
        alignItems:'center'
      },
      textButton:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff'
      },
})