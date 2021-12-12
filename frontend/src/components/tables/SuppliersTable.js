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
  const [suppliers, setSuppliers] = useState([]);
  const [updateCards, setUpdateCards] = useState(true);

  const getSuppliers = async () => {
    const { data } = await api.get('/supplier');
    setSuppliers(data);
  };

  useEffect(() => {
    getSuppliers();
  }, [updateCards]);

  return (
    <div style={{maxWidth: '800px', alignSelf: "center", margin: '30px 0'}}>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>Número</Th>
            <Th>Nome</Th>
            <Th>Telefone</Th>
          </Tr>
        </Thead>
        <Tbody>
          {suppliers?.map(supplier => (
            <Tr>
              <Td>{supplier.id}</Td>
              <Td>{supplier.name}</Td>
              <Td>{supplier.phone}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {suppliers.length === 0 ? 
        (<Text align="center" margin="2">Não há fornecedores cadastrados</Text>) 
      : null }
    </div>
  )
}

export default ProductTypeTable;