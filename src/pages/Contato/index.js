import React from 'react';


 function Contato() {
 return (
   <div className="principal">
       <div className="titulo">
            <h1>Tem alguma dúvida, sugestão ou crítica? fale conosco.</h1>
       </div>
       <div className="input">
         <label>Nome (Obrigatório)</label><br/>
         <input />
       </div>
       <div className="input">
         <label>Seu E-mail (Obrigatório)</label><br/>
         <input />
       </div>
       <div className="input">
         <label>Celular</label><br/>
         <input />
       </div>
       <div className="input">
         <label>Cidade</label><br/>
         <input />
       </div>
       <div className="input">
         <label>Assunto</label><br/>
         <input />
         </div >
   
       <div className="textarea">
         <label>Sua Mensagem</label><br/>
         <textarea />
       </div>
       <button className="botao" type="submit">Enviar</button>
   
        <div className="informacao">
          <p>Email: <a>atendimento@schneideracessorios.com.br</a></p>
          <p>Celular: (47)99999-9999</p>
        </div>
   </div>
  );
}

export default Contato;
