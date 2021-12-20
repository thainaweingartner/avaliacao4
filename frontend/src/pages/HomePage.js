import React, { useRef, useState } from 'react';
import AddProductForm from '../components/forms/AddProductForm';
import ProductsTable from '../components/tables/ProductsTable';
import { 
  Text,
  Button,
 } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import EditProductStockForm from '../components/editForms/EditProductStockForm';

const HomePage = () => {
  const [formOpened, setFormOpened] = useState(false);
  const [stockFormOpened, setStockFormOpened] = useState(false);
  const tableRef = useRef();

  const formOpen = () => {
    setFormOpened(true);
  }

  const formClose = () => {
    setFormOpened(false);
    tableRef.current?.setUpdateTable(!tableRef.current?.updateTable);
  }

  const stockFormOpen = () => {
    setStockFormOpened(true);
  }

  const stockFormClose = () => {
    setStockFormOpened(false);
    tableRef.current?.setUpdateTable(!tableRef.current?.updateTable);
  }

  return (
    <div style={{padding: '50px', display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <div 
        style={{ 
          background: '#b2f5ea', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '25px', 
          padding: '10px 25px', 
          marginBottom: '25px'
        }}
      >
        <Text fontSize='3xl' style={{ margin: '0 auto 0 0'}}>
          Estoque de Produtos
        </Text>
        <NavLink to="/fornecedores">
          Fornecedores
        </NavLink>
        <NavLink to="/tipos">
          Tipos de Produtos
        </NavLink>
      </div>
      <div style={{ display: "flex", gap: "20px", alignSelf: "flex-end"}}>
        <Button name="add-button" variant='outline' onClick={formOpen}>
          Adicionar Produto
        </Button>
        <Button name="add-button" variant='outline' onClick={stockFormOpen}>
          Alterar Estoque de Produto
        </Button>
      </div>
      <ProductsTable ref={tableRef}/>
      <AddProductForm openForm={formOpened} handleFormClose={formClose} />
      <EditProductStockForm openForm={stockFormOpened} handleFormClose={stockFormClose}/>
      <Text fontSize="sm" align="center" style={{ margin: 'auto 0 0 0'}}>
        Developed by Thainá Weingartner Chagas in 2021
      </Text>
    </div>
  );
};

export default HomePage;