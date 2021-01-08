import React, { Component } from 'react';
import { View ,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { connect} from 'react-redux'; 
import {editEmail , editSenha ,cadastrar} from '../actions/AuthActions'; 

export class cadastro extends Component {

 render(){
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Area de Cadastro</Text>  
            <Text style={styles.title}>Email</Text> 
            <TextInput value={this.props.email}   style={styles.input} onChangeText={(txt)=> this.props.editEmail(txt)} />
            <Text style={styles.title}>Senha</Text> 
            <TextInput value={this.props.senha}  secureTextEntry={true  }   style={styles.input} onChangeText={(txt)=> this.props.editSenha(txt)}/>

            <TouchableOpacity   style={styles.button} onPress={()=> {this.props.cadastrar(this.props.email, this.props.senha)}}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
 
            
      </View>
   );
 }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7248B7',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    input: {
      height:50,
      backgroundColor:"#ffeac4",
      borderRadius:10,
      padding:10,
      margin:10,
      width:300
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
    title: {
      fontWeight:'bold',
      fontSize:18,
      color:'#fff' 
    }
  });
  const mapStateToProps =  (state) =>{
    return {
      email:state.auth.email,
      senha:state.auth.senha
    };
  };
  const CadastroConnect =  connect(mapStateToProps, {editEmail , editSenha , cadastrar})(cadastro);
  export default CadastroConnect; 