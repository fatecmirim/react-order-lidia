import {Link} from 'react-router-dom';
import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';

export default function Login() {
return (
    <div className="auth-wrapper">
    <div className="auth-inner">
    <img src={logo} alt="logo"/>
    <form>
     
        <div className="form-group">
            <label>E-mail</label>
            <input type="email" className="form-control" placeholder="Digite seu e-mail" />
        </div>
        
        <div className="form-group">
            <label>Senha</label>
            <input type="password" className="form-control" placeholder="Digite sua senha" />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Mantenha-me conectado</label>
            </div>
        </div>

        <button type="submit" className="btn btn-warning btn-block">Entrar</button>
        <p className=" forgot-password text-center">Nao tem conta? <Link to="/register">Cadastre-se</Link></p>           
    </form>
    </div>
    </div>
);
}
