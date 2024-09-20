// src/Utils/FiltroCotacoes.js
import React from 'react';
import TextField from '../components/TextField';

const FiltroCotacoes = ({ filtro, setFiltro }) => {
  const handleChange = (e) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  };

  return (
    <div className="filtro-cotacoes">
      <TextField
        name="produto"
        label="Filtrar por Produto"
        value={filtro.produto}
        onChange={handleChange}
      />
      <TextField
        name="preco"
        label="Filtrar por Preço Máximo"
        type="number"
        value={filtro.preco}
        onChange={handleChange}
      />
      <TextField
        name="data"
        type="date"
        value={filtro.data}
        onChange={handleChange}
      />
    </div>
  );
};

export default FiltroCotacoes;