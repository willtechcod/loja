import React, { useState, useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import api from '../../config/configApi';
import {useHistory} from 'react-router-dom';


 function Login() {

  const history = useHistory();

   const {signIn} = useContext(Context);
    

  const [user, setUser] = useState({
    usuario:'',
    senha:''
  });

  const [status, setStatus] = useState({
    type: '',
    messagem: '',
    loading: false
  });


 const valorInput = e=> setUser({...user, [e.target.id]: e.target.value});

const loginSubmit = async e =>{
  e.preventDefault();
  
  setStatus({loading: true});

  const headers = {
    'headers':{
      'Content-Type': 'application/json'
    }
  }
  await api.post("/login", user, headers)
  .then((response) =>{
        setStatus({loading: false});
        
        if(response.data.erro){
            setStatus({
              type:'erro',
              messagem: response.data.messagem
            });
        }else{
          setStatus({
            type:'success',
            messagem: response.data.messagem
          });
          //salvar o token no local storage
          localStorage.setItem('token', JSON.stringify(response.data.token));
          api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
          signIn(true);
          return history.push('/dashbord');
        }
}).catch(()=>{
  setStatus({
    type:'erro',
    messagem: "Erro: Tente mais tarde!"
  });
   
});

}

 return (
  <div className="dashbord" >
  <div className="titulo">
      <h1>Bem vido ao Administrativo</h1>
              {status.type === 'erro' ? <p style={{color: "red"}} >{status.messagem}</p> : ""}        
              {status.type === 'success' ? <p style={{color: "green"}} >{status.messagem}</p> : ""}        

  </div>
  <div className="box-form">
  <form onSubmit={loginSubmit} Redirect to="/dashbord">
      <div className="form-dashbord">
      <div className="form-group">
          <label for="exampleInputEmail1">Usuário</label>
          <input type="email" className="form-control" id="usuario" aria-describedby="emailHelp" placeholder="Seu e-mail" onChange={valorInput} />
      </div>
      <div className="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" className="form-control" id="senha" autoComplete="on" placeholder="Sua senha" onChange={valorInput} />
      </div>
      {status.loading ? <button  type="submit" disabled className="entrar" >Logando...</button> :<button Redirect to={{pathname:"/dashbord"}} type="submit" className="entrar">Entrar</button> }
       
      </div>
  </form>
  </div>
</div>
 
  );
}

export default Login;