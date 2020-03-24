import React, { Component } from "react";
import Logo from '../../assets/logo4.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

export default class Request extends Component{
    render() {
        return (
            <div className="Top">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">  
        <div className="container">
       <img src={Logo} alt='Logo da aplicação' />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/product"}>Produtos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>Contato</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/historic"}>Histórico</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/request"}><IoIosCart/></Link>
              </li>
            </ul>
          </div>
        </div>
  </nav>
</div>
 );       
}
}
