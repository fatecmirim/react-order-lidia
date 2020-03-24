import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Request from "./components/Request/Request";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Contact from './components/Contact/Contact';
import Historic from "./components/Historic/Historic";
import Product from "./components/Product/Product";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App"> 
        <div className="container">
          <Link className="navbar-brand" to={"/login"}></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Cadastrar</Link>
              </li>
            </ul>
          </div>
        </div>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact}/>
            <Route path="/main" component={Main}/>
            <Route path="/historic" component={Historic}/>
            <Route path="/request" component={Request}/>
            <Route path="/product" component={Product}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
