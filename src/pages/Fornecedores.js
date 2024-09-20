//src/pages/Fornecedores.js
import React, { useState } from 'react';
import Formfornecedor from '../Utils/FormFornecedor';
import Formcontatos from '../Utils/Formcontatos';
import Button from '../components/Button';
import Modal from 'react-modal';
import './Fornecedores.css';
Modal.setAppElement('#root');

const Fornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [selectedFornecedor, setSelectedFornecedor] = useState(null);
  const [contatos, setContatos] = useState([]);

  const addFornecedor = (fornecedor) => {
    console.log("Fornecedor adicionado:", fornecedor); 
    setFornecedores([...fornecedores, fornecedor]);
  };
  
  
  const addContato = (contato) => {
    setContatos([...contatos, { ...contato, fornecedorCNPJ: selectedFornecedor.cnpj }]);
    setSelectedFornecedor((prev) => ({
      ...prev,
      contatos: [...(prev.contatos || []), contato]
    }));
  };

  const openModal = (fornecedor) => {
    setSelectedFornecedor({ ...fornecedor, contatos: [] });
  };

  const closeModal = () => {
    setSelectedFornecedor(null);
  };

  return (
    <div>
      <h1>Fornecedores</h1>
      <Formfornecedor onAddFornecedor={addFornecedor} />
      <h2>Lista de Fornecedores</h2>
      <ul>
        {fornecedores.map((fornecedor, index) => (
          <li key={index} onClick={() => openModal(fornecedor)}>
            {fornecedor.nome} - {fornecedor.cnpj}
          </li>
        ))}
      </ul>

   
      <Modal isOpen={!!selectedFornecedor} onRequestClose={closeModal}>
        <h2>Detalhes do Fornecedor</h2>
        {selectedFornecedor && (
          <>
            <p>Nome: {selectedFornecedor.nome}</p>
            <p>CNPJ: {selectedFornecedor.cnpj}</p>
            <p>Endereço: {selectedFornecedor.endereco}</p>
            <p>Telefone: {selectedFornecedor.telefone}</p>

            <h3>Contatos</h3>
            <ul>
              {contatos
                .filter(contato => contato.fornecedorCNPJ === selectedFornecedor.cnpj)
                .map((contato, index) => (
                  <li key={index}>
                    {contato.nome} - {contato.cargo} - {contato.telefone} - {contato.email}
                  </li>
              ))}
            </ul>

            <Formcontatos onAddContato={addContato} />
          </>
        )}
        <Button type="submit" text="fechar" onClick={closeModal} />
      </Modal>
    </div>
  );
};

export default Fornecedores;
