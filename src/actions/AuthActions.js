import { Alert } from "react-native"; 
import firebase from '../reducers/FirebaseConnection'; 

export const editEmail = (email)  => {
    return {
        type: 'editEmail',
        payload: {
            email: email,
            
        }
    }
}
export const editSenha = (pass)  => {
    return {
        type: 'editSenha',
        payload: {
            password: pass,
            
        }
    }
}
export const cadastrar = (email,senha) => {
       
     return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,senha)
        .then((user)=> {
            dispatch({
                type:'cadastroSucesso'
            })
        })
        .catch ((error)=> {
            dispatch({
                type:'cadastroErro',
                payload: {
                    code:error.code
                }
            })
        })
     }
};