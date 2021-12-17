import { 
  Table, 
  Tbody, 
  Th, 
  Thead, 
  Tr,
  Td,
} from '@chakra-ui/table';
import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react'
import api from '../../api/api';
import { MdEdit, MdDelete } from 'react-icons/md';
import EditProductForm from '../editForms/EditProductForm';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [updateTable, setUpdateTable] = useState(false);

  const getProducts = async () => {
    const { data } = await api.get('/product');
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [updateTable]);

  const editProduct = (product) => {
    setSelectedProduct(product);
    setOpenEditForm(true);
  };

  const deleteProduct = async (product) => {
    try {
      await api.delete(`/product/delete/${product.id}`);
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
            <Th>Nome</Th>
            <Th>Tipo</Th>
            <Th>Fornecedor</Th>
            <Th>Quantidade em Estoque</Th>
            <Th>Preço de Venda</Th>
            <Th>Preço de Compra</Th>
            <Th>Editar</Th>
            <Th>Excluir</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map(product => (
            <Tr>
              <Td>{product.name}</Td>
              <Td>{product.productType.name}</Td>
              <Td>{product.supplier.name}</Td>
              <Td isNumeric>{product.quantity}</Td>
              <Td>{product.salePrice}</Td>
              <Td>{product.purchasePrice}</Td>
              <Td onClick={() => editProduct(product)}><MdEdit /></Td>
              <Td onClick={() => deleteProduct(product)}><MdDelete /></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {products.length === 0 ? 
        (<Text align="center" margin="2">Não há produtos cadastrados</Text>) 
      : null }
      <EditProductForm product={selectedProduct} open={openEditForm} handleFormClose={formClose}/>
    </div>
  )
}

export default ProductsTable;