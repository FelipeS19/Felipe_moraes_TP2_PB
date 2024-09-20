import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import './Formcotacao.css';

const Formcotacao = ({ onAddCotacao }) => {
  const [cotacao, setCotacao] = useState({ produto: '', data: '', preco: '', cnpj: '' });

  const handleChange = (e) => {
    setCotacao({ ...cotacao, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cotacao.produto && cotacao.data && cotacao.preco && cotacao.cnpj) {
      console.log('Cadastrando cotação:', cotacao); 
      onAddCotacao(cotacao);
      setCotacao({ produto: '', data: '', preco: '', cnpj: '' });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="produto"
        label="Produto"
        value={cotacao.produto}
        onChange={handleChange}
        required
      />
      <TextField
        name="data"
        type="date"
        value={cotacao.data}
        onChange={handleChange}
        required
      />
      <TextField
        name="preco"
        label="Preço"
        type="number"
        value={cotacao.preco}
        onChange={handleChange}
        required
      />
      <TextField
        name="cnpj"
        label="CNPJ do Fornecedor"
        value={cotacao.cnpj}
        onChange={handleChange}
        required
      />
        <Button type="submit" text="Cadastrar Cotação" onClick={handleSubmit}/> 
    </form>
  );
};

export default Formcotacao;
