import React from 'react';
import Carteira1 from '../../assets/carteira1.svg';
import Carteira2 from '../../assets/carteira2.svg';
import Carteira3 from '../../assets/carteira3.svg';
import Carteira4 from '../../assets/carteira4.svg';
import Carteira5 from '../../assets/carteira5.svg';
import Carteira6 from '../../assets/carteira6.svg';

const Home = () => {
    return (
        <div>
            <div className="primaria">
                <div className="principal-home">
                    <div><img src={Carteira1} /></div>
                    <div ><img src={Carteira2} /></div>
                    <div className="image3"><img src={Carteira3} /></div>
                </div >
                <div className="text-segunda">
                    <a href="#"><h5>VEJA MAIS</h5></a>
                    <h4>EM NOSSO ESTOQUE SOBRE ATACADO</h4>
                </div>
                <div className="text-terceira">
                    <h5>100% EM COURO </h5>
                    <h4><a href="#" >VEJA MAIS</a></h4>
                </div>
                <div className="text-h1">
                    <h1>LANÇAMENTO/INVERNO 2021</h1>
                </div>
                <div>
                    <button className="compre">COMPRE AGORA</button>
                </div>
            </div>

            <div className="conteudo">
                <div><img src={Carteira4} /></div>
                <div><img src={Carteira5} /></div>
                <div><img src={Carteira6} /></div>
            </div>
            <div className="text-frete">
                <h1>FRETE GRÁTIS</h1>
                <h4>Válidos para compras acima de R$150</h4>
                <h4>nas regiões Sul e Suldeste</h4>
            </div>

            <div className="titulo-card">
            <div><h4>Coleção inverno</h4></div>
            </div>

            <div className="titulo-card2">
            <div><h2>Carteiras masculinas</h2></div>
            </div>
            
            <div className="card"  style={{width: 400}}>
                <img className="card-img-top" src={Carteira4} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Carteira São Paulo</h5>
                    <p className="card-text">R$ 90,90</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
                </div>
                <div className="card"  style={{width: 400}}>
                <img className="card-img-top" src={Carteira6} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Carteira Goiana</h5>
                    <p className="card-text">R$ 70,90</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
                </div>
                <div className="card"  style={{width: 400}}>
                <img className="card-img-top" src={Carteira5} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Carteira Palmas</h5>
                    <p className="card-text">R$ 60,90</p>
                    <a href="#" className="btn btn-primary" onClick={'/detalhes'}>Comprar</a>
                </div>
                </div>
                <div className="card"  style={{width: 400}}>
                <img className="card-img-top" src={Carteira5} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Carteira Palmas</h5>
                    <p className="card-text">R$ 60,90</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
                </div>
                <div className="card"  style={{width: 400}}>
                <img className="card-img-top" src={Carteira6} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Carteira Palmas</h5>
                    <p className="card-text">R$ 89,90</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
                </div>
                <div className="card"  style={{width: 400}}>
                <img className="card-img-top" src={Carteira4} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Carteira Palmas</h5>
                    <p className="card-text">R$ 79,90</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
                </div>
            
        </div>
    );
};

export default Home;