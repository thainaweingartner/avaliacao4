import React, { useState } from 'react';
import AddProductForm from '../components/AddProductForm';
import ProductsTable from '../components/ProductsTable';
import { 
  Text,
  Button,
 } from '@chakra-ui/react'

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
      <Text fontSize='3xl'>Estoque de Produtos</Text>
      <Button style={{ alignSelf: "flex-end"}} name="add-button" variant='outline' onClick={formOpen}>Adicionar Produto</Button>
      <ProductsTable />
      <AddProductForm openForm={formOpened} handleFormClose={formClose} />
      <Text fontSize="sm" align="center" style={{ margin: 'auto 0 0 0'}}>Developed by Thainá Weingartner Chagas in 2021</Text>
    </div>
  );
};

export default HomePage;