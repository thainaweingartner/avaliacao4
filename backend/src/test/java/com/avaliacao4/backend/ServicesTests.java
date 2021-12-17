package com.avaliacao4.backend;

import com.avaliacao4.backend.entities.Product;
import com.avaliacao4.backend.repository.ProductRepository;
import com.avaliacao4.backend.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;

import org.mockito.junit.jupiter.MockitoExtension;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ServicesTests {

    private Product product;

    @Mock
    private ProductRepository productRepository;
    private ProductService productService;

    @BeforeEach
    void setUp() {
        productService = new ProductService(productRepository);
        product = ProductFactory.buildDefault();
    }

    @DisplayName("must create a product")
    @Test
    void create() throws Exception {
        Product newProduct = ProductFactory.buildDefault();

        when(productRepository.save(newProduct)).thenReturn(product);

        Product createdProduct = productService.save(newProduct);

        verify(productRepository, times(1)).save(product);
        assertEquals(createdProduct, product);
    }

    @DisplayName("cant create a product with quantity less than 0")
    @Test
    void notCreate() {
        Product product1 = ProductFactory.quantityErrorProduct();

        assertThrows(Exception.class, () -> productService.save(product1));
        verify(productRepository, times(0)).save(product1);
    }
}
