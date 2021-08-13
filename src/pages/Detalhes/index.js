import React from 'react';
import CartDetail from '../../assets/carteiradetalhes.svg';
import CartDetail1 from '../../assets/carteiradetalhes1.svg';
import CartDetail2 from '../../assets/carteiradetalhes2.svg';
import CartDetail3 from '../../assets/carteiradetalhes3.svg';
import Cartpro1 from '../../assets/cartpro1.svg';
import Cartpro2 from '../../assets/cartpro2.svg';
import Cartpro3 from '../../assets/cartpro3.svg';

import { ImTruck } from "react-icons/im";
import { BsSearch } from "react-icons/bs";

function Detalhes() {
  return (
    <div className="principal">
      <div className="titulo">
        <h1>Carteira Palmas</h1>
      </div>
      <div className="cart-prin">
        <img src={CartDetail} />
      </div>
      <div className="carteiras-desc">
        <img src={CartDetail1} />
        <img src={CartDetail2} />
        <img src={CartDetail3} />
      </div>

      <div className="desc-prod">
        <p>Carteira masculina, modelo porta cartão em couro</p>
      </div>
      <div className="desc-price">
        <h1>R$ 84,90</h1>
      </div>

      <div className="line-detail"></div>

      <div className="tamanho">
        <p>tamanho</p>
        <p>Cor</p>
        <div>
          <select className="select-tamanho">
            <option selected>Escolha um tamanho</option>
            <option value="pequena" >Pequena</option>
            <option value="media">Media</option>
            <option value="grande">Grande</option>
          </select>
        </div>
        <div >
          <select className="select-cor">
            <option selected>Escolha uma Cor</option>
            <option value="preto">Preto</option>
            <option value="marrom">Marrom</option>
          </select>
        </div>
      </div>
      <div className="quantidade">
        <div className="box-quantidade"><h5>1</h5></div>
        <div className="btn-comprar"><button className="comprar"><p>COMPRAR</p></button></div>
      </div>
      <div className="correios">
        <p>Consulte o prazo estimado e valor da entrega</p>
        < ImTruck color="#endregion" size={35} />
        <input type="text" placeholder="insira seu CEP..." />
        <button>Calcular</button>
        <div>
          <a href="https://buscacepinter.correios.com.br/app/endereco/index.php">não sei meu cep</a>
        </div>
      </div>

      <div className="search-prod">
        <h2>Pesquisar</h2>
        <form>
          <input type="search" placeholder="Pesquisar um produto" />
          <button type="submit">
             <BsSearch color="#BB7D1F" size={22} /> 
          </button>
        </form>
      </div>

      <div className="relacionado">
        <div><h3>Você tambem pode gostar</h3></div>
        <div>
          <img src={Cartpro1} />
          <h6>Carteira Palmas</h6>
          <p>R$69,90</p>
          <button type="button" className="btn btn">Adcionar</button>
          <div className="rela-line"></div>
          <img src={Cartpro2} />
          <h6>Carteira Goiás</h6>
          <p>R$90,90</p>
          <button type="button" className="btn btn">Adcionar</button>
          <div className="rela-line"></div>
          <img src={Cartpro3} />
          <h6>Carteira São Paulo</h6>
          <p>R$89,99</p>
          <button type="button" className="btn btn">Adcionar</button>
          <div className="rela-line"></div>
        </div>
      </div>

      <div className="desc-intem">
        <p className="titulo-descricao">Descrição do Produto</p>
        <div className="line-item-desc"></div>
        <p className="titulo-descricao">Descrição</p>
        <div>
          <p className="p-texto">
            Carteira masculina feita em couro preto fosco externo e marinho interno, com espaço para cédulas e 4 cartões.
            Medida da carteira fechada: 10,2cm x 8cm.
            Composição: 100% couro / Forro 100% poliéster
          </p>
        </div>
      </div>
      <div className="desc-intem2">
        <p className="titulo-descricao">Informação adicional</p>
        <div className="line-item-desc"></div>

        <table className="table-table">
        <thead className="table thead-dark">
          <tr>
            <th scope="row">Peso</th>
            <th>0.215 kg</th>
          </tr>
          <tr>
            <th >Dimensões</th>
            <th>31 × 31 × 6 cm</th>
          </tr>
          <tr>
            <th >Cor</th>
            <th>Preto/Marinho</th>
          </tr>
          <tr>
            <th >Tamanho</th>
            <th>Único</th>
          </tr>
        </thead>
      </table>

      </div>
    </div>
  );
}

export default Detalhes;