import Product from "../components/Product/product.component";
import Contact from "../components/Contact/contact.component";
import historic from "../components/Historic/historic.component";
import Request from "../components/Login/login.component";
import Register from "../components/Register/signup.component";
import Login from "../components/Login/login.component";
import Main from "../components/Main/main.component";
import { Switch } from "react-router-dom";
import Route from "./Route";

export default function Routes() {
    return (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register}/>
        <Route path="/product" component={Product} isPrivate/>
        <Route path="/contact" component={Contact} isPrivate/>
        <Route path="/request" component={Request} isPrivate/>
        <Route path="/historic" component={historic} isPrivate/>
        <Route path="/main" component={Main} isPrivate />
      </Switch>
    );
  }