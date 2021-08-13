import React from 'react';
import Carteira from '../../assets/carteira.svg';
import { FaCheckCircle } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { ImTruck } from "react-icons/im";

function Carrinho() {
  return (
    <div className="principal">
      <div className="titulo">
        <h1>Carteira São Paulo</h1>
      </div>
      <div className="line-cart"></div>
      <div className="check">
        < FaCheckCircle color="#06C630" className="icone-check" /> “Carteira São Paulo” foi adicionado no seu carrinho.
        <button className="btn-cart">Continuar Comprandro</button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Remover Item</th>
            <th scope="col">Produto</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">< IoTrashOutline /></th>
            <td><div><img src={Carteira} /></div></td>
            <td className="tb-td">Carteira São Paulo - Preto/Marinho, Único</td>
            <td>R$84,90</td>
            <td>1</td>
            <td>R$84,90</td>
          </tr>
        </tbody>
      </table>
      <button className="tb-cart">Atualizar Carrinho</button>
      <div className="total">
        <p>Total no carrinho</p>
      </div>
      <table className="table table-subtotal">
      <thead className="thead-light">
        <tr>
          <th scope="row">Subtotal</th>
          <th>R$ 80,90</th>
        </tr>
        <tr className="tb-tr">
          <td >Entrega</td>
          <td > <a href="#" > Calcular entrega </a> < ImTruck color="#BB7D1F" size={25} /> </td>
        </tr>
        <tr>
          <th >Subtotal</th>
          <th>R$ 80,90</th>
        </tr>
      </thead>
      </table>
      <button className="btn-concluir">Concluir Compra</button>
    </div>
  );
}

export default Carrinho;