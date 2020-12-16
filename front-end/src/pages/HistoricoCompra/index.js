import React from 'react';
import Header from '../../components/Header';
import HomeIcon from '../../assets/images/casa.svg';
import Historico from '../../components/Historico';
import Footer from '../../components/Footer';

import './styles.css';

export default function HistoricoCompra() {
    return(
        <div className="content-historico-compra">
            <div className="content-header">
                <Header />
            </div>

            <div className="banner-historico">
                <img src={HomeIcon} alt="icone da casinha" id="home-icon"/>
                <h4 id="subtitle-historico">/ Histórico de compra</h4>
            </div>

            <div className="compra-historico-principal">
                <h2 id="historico-name">Histórico de compra</h2>
                <h5 id="data-name">Data</h5>
                <h5 id="price-name">Preço Total</h5>
                <h5 id="pay-name">Tipo de Pagamento</h5>
            </div>

            <div className="historico-component">
                <Historico />
                <Historico />
                <Historico />
                <Historico />
                <Historico />
                <Historico />
            </div>

            <div className="footer-component">
                <Footer />
            </div>
            
        </div>
    );
}