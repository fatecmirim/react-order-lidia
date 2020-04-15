import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewProduct from './pages/NewProduct';
import Historic from './pages/Historic';
import Register from './pages/Register';
import Product from './pages/Product';
import Request from './pages/Request';
import Login from './pages/Login';
import Main from './pages/Main';
import React from 'react';
import Contact from './pages/Contact';
import Teste from './pages/Teste';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/main" component={ Main } />
        <Route path="/contact" component={Contact}/>
        <Route path="/product" component={ Product } />
        <Route path="/newproduct" component={NewProduct}/>
        <Route path="/request" component={Request}/>
        <Route path="/historic" component={Historic}/>
        <Route path="/teste" component={Teste}/>
      </Switch>
    </BrowserRouter>
  );
}