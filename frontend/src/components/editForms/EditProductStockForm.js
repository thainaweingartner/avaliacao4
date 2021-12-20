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

const EditProductStockForm = ( props ) => {
  const { openForm, handleFormClose } = props;
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState({
    productId: products[0]?.id,
    calculationType: 1,
    quantity: 0,
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
      await api.put(`/product/update-quantity/${values.productId}`, values);
      handleFormClose();
      setValues({
        productId: products[0]?.id,
        calculationType: 1,
        quantity: 0,
      })
    } catch (error) {
      alert('A quantidade de produtos não pode ser menor do que 0');
    }
  }

  const settings = async () => {
    const allProducts = await api.get('/product');
    setProducts(allProducts.data);
    console.log(allProducts.data);
    setValues({
      ...values,
      productId: allProducts.data[0]?.id,
    });
  }

  useEffect(() => {
    settings();
  }, []);

  const changeType = (event) => {
    setValues({
      ...values,
      calculationType: event.target.value,
    });
  };

  const changeProduct = (event) => {
    setValues({
      ...values,
      productId: event.target.value,
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
                <Text mb='8px'>Produto</Text>
                <Select style={{ marginBottom: '15px'}} onChange={changeProduct}>
                  {products?.map(product => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                  ))}
                </Select>

                <Text mb='8px'>Tipo de Alteração</Text>
                <Select style={{ marginBottom: '15px'}} onChange={changeType}>
                  <option key="type-1" value={1}>Entrada</option>
                  <option key="type-2" value={2}>Dar baixa</option>
                </Select>

                <Text mb='8px'>Quantidade</Text>
                <Input
                  style={{ marginBottom: '15px'}}
                  name="quantity"
                  type="number"
                  onChange={updateValue}
                  required
                  min={0}
                  value={values.quantity}
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

export default EditProductStockForm;