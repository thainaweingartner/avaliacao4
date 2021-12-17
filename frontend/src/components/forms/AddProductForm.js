import React, { useEffect, useState } from 'react';
import { 
  Input, 
  Select, 
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

const AddProductForm = ( props ) => {
  const { openForm, handleFormClose } = props;
  const [suppliers, setSuppliers] = useState([]);
  const [types, setTypes] = useState([]);
  const [values, setValues] = useState({
    name: '',
    productType: {
      id: '0',
      name: ''
    },
    supplier: {
      id: '0',
      name: ''
    },
    quantity: 0,
    salePrice: 0,
    purchasePrice: 0,
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
      await api.post('/product', values);
      handleFormClose();
      setValues({
        name: '',
        productType: 0,
        supplier: 0,
        quantity: 0,
        salePrice: 0,
        purchasePrice: 0,
      })
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  const settings = async () => {
    const allSupliers = await api.get('/supplier');
    const allTypes = await api.get('/type');
    setSuppliers(allSupliers.data);
    setTypes(allTypes.data);
  }

  useEffect(() => {
    settings();
  }, []);

  const changeSupplier = (event) => {
    console.log(event.target.value);
    setValues({
      ...values,
      supplier: {
        id: event.target.value[0],
        name: event.target.value[1],
      }
    });
  };

  const changeProductType = (event) => {
    setValues({
      ...values,
      productType: {
        id: event.target.value[0],
        name: event.target.value[1],
      },
    });
  };

  
  return (
    <Modal isOpen={openForm} onClose={handleFormClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={submitForm} data-testid="form">
            <ModalHeader>Adicionar Produto</ModalHeader>
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

                <Text mb='8px'>Tipo de Produto</Text>
                <Select style={{ marginBottom: '15px'}} onChange={changeProductType}>
                  {types?.map(type => (
                    <option key={type.id} value={[type.id, type.name]}>{type.name}</option>
                  ))}
                </Select>

                <Text mb='8px'>Fornecedor</Text>
                <Select style={{ marginBottom: '15px'}} onChange={changeSupplier}>
                  {suppliers?.map(supplier => (
                    <option key={supplier.id} value={[supplier.id, supplier.name]}>{supplier.name}</option>
                  ))}
                </Select>

                <Text mb='8px'>Quantidade</Text>
                <Input
                  style={{ marginBottom: '15px'}}
                  name="quantity"
                  type="number"
                  data-testid="quantity"
                  onChange={updateValue}
                  required
                  value={values.quantity}
                  variant="outline"
                />

                <Text mb='8px'>Preço de Venda</Text>
                <Input
                  style={{ marginBottom: '15px'}}
                  name="salePrice"
                  data-testid="salePrice"
                  type="number"
                  onChange={updateValue}
                  required
                  value={values.salePrice}
                  variant="outline"
                />

                <Text mb='8px'>Preço de Compra</Text>
                <Input
                  style={{ marginBottom: '15px'}}
                  name="purchasePrice"
                  data-testid="purchasePrice"
                  type="number"
                  onChange={updateValue}
                  required
                  value={values.purchasePrice}
                  variant="outline"
                />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleFormClose}>
                Cancelar
              </Button>
              <Button variant='outline' type="submit">Salvar Produto</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
  );
};

export default AddProductForm;