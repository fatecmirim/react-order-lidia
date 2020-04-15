import { FiArrowLeft } from 'react-icons/fi';
import logoNewProduct from '../../assets/massashirata.jpg';
import { Link } from 'react-router-dom';
import React from 'react';
import './styles.css';

export default function NewProduct(){
    return(
        <div className="new-product-container">
        <div className="content">
          <section>
            <img src={ logoNewProduct } alt="Massas Hirata"/>
            <h1>Cadastrar novo produto</h1>
            <p>
              Descreva ao lado as propriedades do novo produto que será cadastrado!
            </p>
            <Link className="button" type="submit" to="/product">
              <FiArrowLeft size={ 16 } color="#e02041" />
              Voltar para visualização dos produtos
            </Link>
          </section>
          <form>
            <input
              placeholder="Nome do Produto"
            />
            <input
              placeholder="Valor em reais"
            />
            <input
            placeholder="Quantidade em estoque"
            />
            <button className="button" type="submit">Cadastrar</button>
          </form>
          </div>
        </div>
    );
}