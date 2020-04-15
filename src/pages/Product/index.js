import './styles.css';
import { Link } from 'react-router-dom';
import React from 'react';
import {FiTrash2 } from 'react-icons/fi';


export default function Product(){
    return (
        <div className="produto-container">
           <Link className="newproduct" to="/newproduct">
            Cadastrar novos produtos
          </Link>
          <div className="content">
       
        <ul>
            <li>
            <strong>Produto:</strong>
            <p>Massa de Pastel</p>
  
            <strong>Valor:</strong>
            <p>R$25,00</p>

            <strong>Quantidade disponível:</strong>
            <p>50</p>
  
            <button type="button">
              <FiTrash2 size={ 20 } color="#a8a8b3" />
            </button>
            </li>

            <li>
            <strong>Produto:</strong>
            <p>Rondelli</p>
  
            <strong>Valor:</strong>
            <p>R$25,00</p>

            <strong>Quantidade disponível:</strong>
            <p>50</p>
  
            <button type="button">
              <FiTrash2 size={ 20 } color="#a8a8b3" />
            </button>
            </li>

            <li>
            <strong>Produto:</strong>
            <p>Massa de Pizza</p>
  
            <strong>Valor:</strong>
            <p>R$25,00</p>
  
            <strong>Quantidade disponível:</strong>
            <p>50</p>

            <button type="button">
              <FiTrash2 size={ 20 } color="#a8a8b3" />
            </button>
            </li>

            <li>
            <strong>Produto:</strong>
            <p>Nhoque</p>
  
            <strong>Valor:</strong>
            <p>R$25,00</p>

            <strong>Quantidade disponível:</strong>
            <p>50</p>
  
            <button type="button">
              <FiTrash2 size={ 20 } color="#a8a8b3" />
            </button>
            </li>
        </ul>
        </div>
      </div>
    );
  }
  