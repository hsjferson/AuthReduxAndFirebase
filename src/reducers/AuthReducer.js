const initialState = {
    email:'example@gmail.com',
    senha:'12345678',
};

const AuthReducer = (state = [], action) => { //verificar se state esta vazio
    if(state.length ==0) {
        return initialState;
    }
    if (action.type == 'editEmail') {
        return { ...state, email:action.payload.email };
    }
    if (action.type == 'editSenha') {
        return { ...state, senha:action.payload.password };
    }
    if(action.type == 'cadastroSucesso') { 
        alert('Cadastro Com sucesso') ;
        return state;
    }
    if(action.type == 'cadastroErro') {
        alert('Erro'+action.payload.code) ;
        return state;
    }
     
    return state;
};
export default AuthReducer;