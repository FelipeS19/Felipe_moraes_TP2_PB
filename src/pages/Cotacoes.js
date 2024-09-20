import React, { useState } from 'react';
import Formcotacao from '../Utils/Formcotacao';
import ListaCotacoes from '../Utils/ListaCotacoes';
import FiltroCotacoes from '../Utils/FiltroCotacoes';

const Cotacoes = () => {
  const [cotacoes, setCotacoes] = useState([]);
  const [filtro, setFiltro] = useState({ produto: '', preco: '', data: '', cnpj: '' });

  const addCotacao = (cotacao) => {
    setCotacoes((prevCotacoes) => [...prevCotacoes, cotacao]);
  };

  const filtrarCotacoes = () => {
    return cotacoes.filter(cotacao => {
      const produtoMatch = cotacao.produto.toLowerCase().includes(filtro.produto.toLowerCase());
      const precoMatch = !filtro.preco || cotacao.preco <= filtro.preco;
      const dataMatch = !filtro.data || cotacao.data === filtro.data;
      const cnpjMatch = !filtro.cnpj || cotacao.cnpj === filtro.cnpj; 
      return produtoMatch && precoMatch && dataMatch && cnpjMatch;
    });
  };

  return (
    <div>
      <h1>Cotações</h1>
      <Formcotacao onAddCotacao={addCotacao} />
      <FiltroCotacoes filtro={filtro} setFiltro={setFiltro} />
      <h2>Lista de Cotações</h2>
      <ListaCotacoes cotacoes={filtrarCotacoes()} />
    </div>
  );
};

export default Cotacoes;
