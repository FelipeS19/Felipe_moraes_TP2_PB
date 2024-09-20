import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Typography from '../components/Typography';
import './Formfornecedor.css'; 

const Formfornecedor = ({ onAddFornecedor }) => {
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFornecedor((prevFornecedor) => ({
      ...prevFornecedor,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Estado do fornecedor:", fornecedor);
    if (Object.values(fornecedor).every(field => field.trim() !== '')) {
      onAddFornecedor(fornecedor);
      setFornecedor({ nome: '', cnpj: '', endereco: '', telefone: '' });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-fornecedor">
      <Typography variant="h3" text="Cadastrar Fornecedor" />
      <div className="form-fornecedor-container">
      <TextField
      className="custom-text-field"
        name="nome"
        label="Nome"
        value={fornecedor.nome}
        onChange={handleChange}
        required
      />
      <TextField
      className="custom-text-field"
        name="cnpj"
        label="CNPJ"
        value={fornecedor.cnpj}
        onChange={handleChange}
        required
      />
      <TextField
      className="custom-text-field"
        name="endereco"
        label="Endereço"
        value={fornecedor.endereco}
        onChange={handleChange}
        required
      />
      <TextField
      className="custom-text-field"
        name="telefone"
        label="Telefone"
        value={fornecedor.telefone}
        onChange={handleChange}
        required
      />
      <Button type="submit" text="Cadastrar Fornecedor" onClick={handleSubmit} />
    </div>
    </form>
  );
};

export default Formfornecedor;
