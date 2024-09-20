import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import './Formcontatos.css'; 

const Formcontatos = ({ onAddContato }) => {
  const [contato, setContato] = useState({
    nome: '',
    cargo: '',
    telefone: '',
    email: '',
    cnpjFornecedor: ''
  });

  const handleChange = (e) => {
    setContato({ ...contato, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContato(contato);
    setContato({ nome: '', cargo: '', telefone: '', email: '', cnpjFornecedor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-contato-container">
      <TextField
        name="nome"
        label="Nome"
        value={contato.nome}
        onChange={handleChange}
        required
      />
      <TextField
        name="cargo"
        label="Cargo"
        value={contato.cargo}
        onChange={handleChange}
        required
      />
      <TextField
        name="telefone"
        label="Telefone"
        value={contato.telefone}
        onChange={handleChange}
        required
      />
      <TextField
        name="email"
        label="E-mail"
        value={contato.email}
        onChange={handleChange}
        required
      />
      <TextField
        name="cnpjFornecedor"
        label="CNPJ do Fornecedor"
        value={contato.cnpjFornecedor}
        onChange={handleChange}
        required
      />
      <Button type="submit" text="Cadastrar Contato" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Formcontatos;
