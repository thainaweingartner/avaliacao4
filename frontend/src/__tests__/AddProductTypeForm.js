import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import axios from "../__mocks__/axios"
import AddProductTypeForm from '../components/forms/AddProductTypeForm';

const mockedProductType = { 
  name: "Notebook",
}

const openForm = true;

const handleFormClose = jest.fn();

describe(`${AddProductTypeForm.name}`, () => {

  
  test('should fill the input with corret name', async () => {
    render(
      <AddProductTypeForm 
        openForm={openForm}
        handleFormClose={handleFormClose}
      />
    );
    
    const nameFild = screen.getByTestId("product-type-name");
  
    fireEvent.change(nameFild, { target: { value: "Notebook"}});
    expect(nameFild.value).toBe("Notebook");
  })
  
  test('should send form if all fields are complete', async () => {
    axios.post.mockImplementation(() => Promise.resolve(mockedProductType));

     render(
      <AddProductTypeForm 
        openForm={openForm}
        handleFormClose={handleFormClose}
      />
    );

    const nameFild = screen.getByTestId("product-type-name");
    const button = screen.getByText("Salvar");

    fireEvent.change(nameFild, { target: { value: "Teste"}});
    expect(nameFild.value).toBe("Teste");
    fireEvent.click(button);
    
    expect(axios.post).toHaveBeenCalled();
  })
})