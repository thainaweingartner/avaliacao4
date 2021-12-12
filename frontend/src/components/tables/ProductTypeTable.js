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

const ProductTypeTable = () => {
  const [productsType, setProductsTypes] = useState([]);
  const [updateCards, setUpdateCards] = useState(true);

  const getProductsTypes = async () => {
    const { data } = await api.get('/type');
    setProductsTypes(data);
  };

  useEffect(() => {
    getProductsTypes();
  }, [updateCards]);

  return (
    <div style={{maxWidth: '800px', alignSelf: "center", margin: '30px 0'}}>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>Número</Th>
            <Th>Nome</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productsType?.map(productType => (
            <Tr>
              <Td>{productType.id}</Td>
              <Td>{productType.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {productsType.length === 0 ? 
        (<Text align="center" margin="2">Não há tipos de produtos cadastrados</Text>) 
      : null }
    </div>
  )
}

export default ProductTypeTable;