import { 
  Table, 
  Tbody, 
  Th, 
  Thead, 
  Tr,
  Td,
} from '@chakra-ui/table';
import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Text } from '@chakra-ui/react'
import api from '../../api/api';
import { forwardRef } from 'react/cjs/react.development';
import EditProductTypeForm from '../editForms/EditProductTypeForm';
import { MdEdit, MdDelete } from 'react-icons/md';

const ProductTypeTable = (props, ref) => {
  const [productsType, setProductsTypes] = useState([]);
  const [updateTable, setUpdateTable] = useState(false);
  const [selectedProductType, setSelectedProductType]= useState({})
  const [openEditForm, setOpenEditForm] = useState(false);

  useImperativeHandle(ref, () => ({
    setUpdateTable,
    updateTable,
  }));

  const getProductsTypes = async () => {
    const { data } = await api.get('/type');
    setProductsTypes(data);
  };

  useEffect(() => {
    getProductsTypes();
  }, [updateTable]);

  const editProductType = (productType) => {
    setSelectedProductType(productType);
    setOpenEditForm(true);
  };

  const deleteProductType = async (productType) => {
    try {
      await api.delete(`/type/delete/${productType.id}`);
      setUpdateTable(!updateTable);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const formClose = () => {
    setOpenEditForm(false);
    setUpdateTable(!updateTable);
  }

  return (
    <div style={{maxWidth: '800px', alignSelf: "center", margin: '30px 0'}}>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>Número</Th>
            <Th>Nome</Th>
            <Th>Editar</Th>
            <Th>Excluir</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productsType?.map(productType => (
            <Tr>
              <Td>{productType.id}</Td>
              <Td>{productType.name}</Td>
              <Td onClick={() => editProductType(productType)}><MdEdit /></Td>
              <Td onClick={() => deleteProductType(productType)}><MdDelete /></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {productsType.length === 0 ? 
        (<Text align="center" margin="2">Não há tipos de produtos cadastrados</Text>) 
      : null }
      <EditProductTypeForm productType={selectedProductType} open={openEditForm} handleFormClose={formClose}/>
    </div>
  )
}

export default forwardRef(ProductTypeTable);