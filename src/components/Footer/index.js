import Logo from '../../assets/Logo.svg';
import Bandeiras from '../../assets/bandeiras.svg';
import Boleto from '../../assets/boleto.svg';
import Caixa from '../../assets/caixa.svg';


const Footer = () => {
    return (
        <div className="footer">
            <footer class="footer-dark bg-dark">

                <div className="box-um">
                    <img src={Logo}/>
                    <p>
                        Fundada em 2016 em Joinville, em Santa Catarina,
                        a Scheneider produz acessórios com matérias primas selecionadas em 100% couro.
                        Desde então constrói forte parceria com fornecedores e clientes oferecendo produtos da mais alta qualidade.
                        HÁ MAIS DE 5 ANOS FAZENDO SEU ESTILO
                    </p>
                </div>
                <div className="line-vertical"></div>

                <div className="box-dois">
                    <h6>NOSSA FÁBRICA</h6>
                    <h6>(47) 3333-333</h6>
                    <p>Rua Uruguai, 208 Jardim Alvorada Maringá – SC 87033-270 atendimento@schneideracessorios.com.br</p>
                </div>

                <div className="line-vertical2"></div>
                <div className="box-tres">
                    <h6>MÉTODOS DE PAGAMENTO</h6>
                    <p>Cartões de crédito Em até 6 x</p>
                    < img src={Bandeiras}/>
                    <p>Transferência bancária</p>
                    < img src={Caixa}/>
                    < img src={Boleto}/>
                    <p></p>
                    <h6>POLÍTICAS</h6>
                    <p>Política de Reembolso, Politica de Privacidade, Termos e Condições.</p>
                </div>
                <div className="copy"><p>Todos os direitos reservados schneider Acessorios © 2021</p></div>

            </footer>
        </div>
    );
};

export default Footer;