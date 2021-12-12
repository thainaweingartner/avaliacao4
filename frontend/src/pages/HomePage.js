import React, { useState } from 'react';
import AddProductForm from '../components/forms/AddProductForm';
import ProductsTable from '../components/tables/ProductsTable';
import { 
  Text,
  Button,
 } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [formOpened, setFormOpened] = useState(false);
  const [updateCards, setUpdateCards] = useState(true);

  const formOpen = () => {
    setFormOpened(true);
  }

  const formClose = () => {
    setFormOpened(false);
    setUpdateCards(!updateCards);
  }

  return (
    <div style={{padding: '50px', display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <div style={{ background: '#b2f5ea', display: 'flex', alignItems: 'center', gap: '25px', padding: '10px 25px', marginBottom: '25px'}}>
        <Text fontSize='3xl' style={{ margin: '0 auto 0 0'}}>Estoque de Produtos</Text>
        <NavLink to="/fornecedores">Fornecedores</NavLink>
        <NavLink to="/tipos">Tipos de Produtos</NavLink>
      </div>
      <Button style={{ alignSelf: "flex-end"}} name="add-button" variant='outline' onClick={formOpen}>Adicionar Produto</Button>
      <ProductsTable />
      <AddProductForm openForm={formOpened} handleFormClose={formClose} />
      <Text fontSize="sm" align="center" style={{ margin: 'auto 0 0 0'}}>Developed by Thainá Weingartner Chagas in 2021</Text>
    </div>
  );
};

export default HomePage;