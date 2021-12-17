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
import { MdEdit, MdDelete } from 'react-icons/md';
import EditSupplierForm from '../editForms/EditSupplierForm';

const SupplierTable = (props, ref) => {
  const [suppliers, setSuppliers] = useState([]);
  const [updateTable, setUpdateTable] = useState(false);
  const [selectedSupplier, setselectedSupplier] = useState({});
  const [openEditForm, setOpenEditForm] = useState(false);

  useImperativeHandle(ref, () => ({
    setUpdateTable,
    updateTable,
  }));

  const getSuppliers = async () => {
    const { data } = await api.get('/supplier');
    setSuppliers(data);
  };

  useEffect(() => {
    getSuppliers();
  }, [updateTable]);

  const editSupplier = (supplier) => {
    setselectedSupplier(supplier);
    setOpenEditForm(true);
  };

  const deleteSupplier = async (supplier) => {
    try {
      await api.delete(`/supplier/delete/${supplier.id}`);
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
            <Th>Telefone</Th>
            <Th>Editar</Th>
            <Th>Excluir</Th>
          </Tr>
        </Thead>
        <Tbody>
          {suppliers?.map(supplier => (
            <Tr>
              <Td>{supplier.id}</Td>
              <Td>{supplier.name}</Td>
              <Td>{supplier.phone}</Td>
              <Td onClick={() => editSupplier(supplier)}><MdEdit /></Td>
              <Td onClick={() => deleteSupplier(supplier)}><MdDelete /></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {suppliers.length === 0 ? 
        (<Text align="center" margin="2">Não há fornecedores cadastrados</Text>) 
      : null }
      <EditSupplierForm supplier={selectedSupplier} open={openEditForm} handleFormClose={formClose}/>
    </div>
  )
}

export default forwardRef(SupplierTable);