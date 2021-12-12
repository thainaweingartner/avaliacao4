import React, { useState } from 'react';
import { 
  Input, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import api from '../../api/api';

const AddSupplierForm = ( props ) => {
  const { openForm, handleFormClose } = props;
  const [values, setValues] = useState({
    name: '',
    phone: '',
  });

  const updateValue = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await api.post('/supplier', values);
      handleFormClose();
      setValues({
        name: '',
        phone: '',
      })
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  
  return (
    <Modal isOpen={openForm} onClose={handleFormClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={submitForm} data-testid="form">
            <ModalHeader>Adicionar Fornecedor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text mb='8px'>Nome</Text>
                <Input
                  style={{ marginBottom: '15px'}}
                  name="name"
                  data-testid="name"
                  onChange={updateValue}
                  required
                  value={values.name}
                  variant="outline"
                />

                <Text mb='8px'>Telefone</Text>
                <Input
                  style={{ marginBottom: '15px'}}
                  name="phone"
                  data-testid="phone"
                  onChange={updateValue}
                  required
                  type="tel"
                  value={values.phone}
                  variant="outline"
                />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleFormClose}>
                Cancelar
              </Button>
              <Button variant='outline' type="submit">Salvar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
  );
};

export default AddSupplierForm;