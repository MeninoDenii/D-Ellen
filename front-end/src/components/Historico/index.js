import React from 'react';

import './styles.css';

export default function Historico() {

    const url = "https://imgcentauro-a.akamaihd.net/250x250/93836902A1/tenis-adidas-run-falcon-masculino-img.jpg";

    return (
        <div className="content-historico">
            <img src={url} alt="Produto" width="60" height="60" id="img-historico" />
            <h2 id="title-historico">1 Sapato comprados</h2>
            <h2 id="data-historico">21 de abril de 2020</h2>
            <h2 id="price-historico">R$ 0,00</h2>
            <h2 id="pay-historico">Boleto</h2>
        </div>
    );
}