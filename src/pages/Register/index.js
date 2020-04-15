import {Link} from 'react-router-dom';
import React from 'react';
import './styles.css';

export default function Register(){
    return(
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form>
        <h3>Cadastro</h3>
        <div className="form-group">
            <label>Nome</label>
            <input type="text" className="form-control" placeholder="Digite seu nome" />
        </div>
        <div className="form-group">
            <label>Telefone</label>
            <input type="text" className="form-control" placeholder="Digite seu telefone" />
        </div>
        <div className="form-group">
            <label>E-mail</label>
            <input type="email" className="form-control" placeholder="Digite seu e-mail" />
        </div>
        <div className="form-group">
            <label>Senha</label>
            <input type="password" className="form-control" placeholder="Digite sua senha" />
        </div>
        <button type="submit" className="btn btn-warning btn-block">Cadastrar</button>
        <p className="forgot-password text-right">
        Já é cadastrado? <Link to="/">Acessar</Link>
        </p>
    </form>
    </div>
    </div>
    );
}
