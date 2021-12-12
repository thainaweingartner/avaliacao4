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
// import api from '../api/api';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [updateCards, setUpdateCards] = useState(true);

  const getProducts = async () => {
    // const { data } = await api.get('/product');
    // setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [updateCards]);

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
          </Tr>
        </Thead>
        <Tbody>
          {products?.map(product => (
            <Tr>
              <Td>{product.name}</Td>
              <Td>{product.type.name}</Td>
              <Td>{product.supplier.name}</Td>
              <Td isNumeric>{product.quantity}</Td>
              <Td>{product.salePrice}</Td>
              <Td>{product.purchasePrice}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {products.length === 0 ? 
        (<Text align="center" margin="2">Não há produtos cadastrados</Text>) 
      : null }
    </div>
  )
}

export default ProductsTable;