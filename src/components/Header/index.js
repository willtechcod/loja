import Logo from '../../assets/Logo.svg';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";




const Header = () => {
    return (
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark wrap">
        
            <a className="navbar-brand" href="/">
            <img src={Logo} className="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="social-midia">
                <div style={{position:'absolute'}}>
                <p style={{color:'#BB7D1F'}}>HÁ MAIS DE 5 ANOS FAZENDO SEU ESTILO</p>
                </div>
                <div className="midia">
                <a   href="#"><FaFacebook /></a>
                <a  href="#">< AiFillInstagram /></a>
                </div>
                <div className="line" style={{width:380, border: '1px solid #BB7D1F'}}> </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Produtos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Atacado</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contato" >Contato</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/login">Dashboard</a>
                    </li>
                </ul>
                <div className="header-icons wrap">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    </li>
                </ul>
                </div>
            </div>
            <div className="midia-secundaria">
                <div className="container">
                <div className="ico">
                <a href="#"><BsSearch color="#BB7D1F" size={18}/></a>
                </div>
                <div className="ico">
                <a href="/login">< AiOutlineUser color="#BB7D1F" size={18}/></a>
                </div>
                <div className="ico">
                    
                <a href="/carrinho">< AiOutlineShoppingCart color="#BB7D1F" size={18} /></a>
                </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;