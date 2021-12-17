import React, { useRef, useState } from 'react';
import AddProductTypeForm from '../components/forms/AddProductTypeForm';
import ProductTypeTable from '../components/tables/ProductTypeTable';
import { 
  Text,
  Button,
 } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

const ProductType = () => {
  const [formOpened, setFormOpened] = useState(false);
  const tableRef = useRef();

  const formOpen = () => {
    setFormOpened(true);
  }

  const formClose = () => {
    setFormOpened(false);
    tableRef.current?.setUpdateTable(!tableRef.current?.updateTable);
  }

  return (
    <div style={{padding: '50px', display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <div style={{ background: '#b2f5ea', display: 'flex', alignItems: 'center', gap: '25px', padding: '10px 25px', marginBottom: '25px'}}>
        <Text fontSize='3xl' style={{ margin: '0 auto 0 0'}}>Tipos de Produtos</Text>
        <NavLink to="/home-page">Estoque de Produtos</NavLink>
        <NavLink to="/fornecedores">Fornecedores</NavLink>
      </div>
      <Button style={{ alignSelf: "flex-end"}} name="add-button" variant='outline' onClick={formOpen}>Adicionar Tipo de Produto</Button>
      <ProductTypeTable ref={tableRef}/>
      <AddProductTypeForm openForm={formOpened} handleFormClose={formClose} />
      <Text fontSize="sm" align="center" style={{ margin: 'auto 0 0 0'}}>Developed by Thainá Weingartner Chagas in 2021</Text>
    </div>
  );
};

export default ProductType;