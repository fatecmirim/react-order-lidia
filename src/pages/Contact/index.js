import React from 'react';
import './styles.css';
import nhoqueContact from '../../assets/nhoquecontact.jpg';
import pizzaContact from '../../assets/pizzacontact.jpg';
import massaContact from '../../assets/massacontact.jpg';

export default function Contact(){
    return(
        <div className="contact-container">
        <ul>
        <li>
        <img src={nhoqueContact} alt="Massas Hirata"/>
        <strong>EMAIL</strong>
        <p>sac@massashirata.com.br</p>
        </li>

        <li>
        <img src={pizzaContact} alt="Massas Hirata"/> 
        <strong>LOCALIZAÇÃO</strong>
        <p>Av. Juscelino Kubitscheck de Oliveira, 1696</p>
        <p>Lot. Inocoop, Mogi Mirim, SP</p>
        </li>

        <li>
        <img src={massaContact} alt="Massas Hirata"/> 
        <strong>TELEFONE</strong>
        <p>(19) 3806-7800</p>
        </li>
        </ul>
        </div>
    );
}