import React from 'react';
import logoMain from '../../assets/logomain.png';
import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';
import './styles.css';

export default function Header() {
return (
    <div className="top">
     <nav className="navbar navbar-expand-lg navbar-light fixed-top">  
        <div className="container">
        <img src={logoMain} alt='Logo da aplicação' />
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/main">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/product">Produtos</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contato</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/historic">Histórico</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/request"><IoIosCart/></Link>
                </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  ); 
}

