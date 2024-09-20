import React from 'react';

const ListaCotacoes = ({ cotacoes }) => {
  return (
    <ul>
      {cotacoes.map((cotacao, index) => (
        <li key={index}>
          Produto: {cotacao.produto}, Data: {cotacao.data}, Preço: {cotacao.preco}, CNPJ: {cotacao.cnpj}
        </li>
      ))}
    </ul>
  );
};

export default ListaCotacoes;
