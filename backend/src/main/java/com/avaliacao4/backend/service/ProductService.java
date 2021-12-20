package com.avaliacao4.backend.service;

import com.avaliacao4.backend.entities.Product;
import com.avaliacao4.backend.entities.ProductQuantity;
import com.avaliacao4.backend.exceptions.QuantityException;
import com.avaliacao4.backend.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product save(Product product) {
        if (product.getQuantity() < 0) {
            throw new QuantityException("A quantidade em estoque não pode ser menor que 0");
        } else {
            return productRepository.save(product);
        }
    }

    public Product findById(Long productId){
        Product person =  productRepository.findById(productId)
                .orElseThrow(()-> new RuntimeException("Product not found"));
        return person;
    }

    public List<Product> findAll(){
        List<Product> product =  productRepository.findAll();
        return product;
    }

    public Product update(Long productId, Product product) {
        if (product.getQuantity() < 0) {
            throw new QuantityException("A quantidade em estoque não pode ser menor que 0");
        } else {
            Product productFound = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            productFound.setName(product.getName());
            productFound.setProductType(product.getProductType());
            productFound.setPurchasePrice(product.getPurchasePrice());
            productFound.setProductType(product.getProductType());
            productFound.setQuantity(product.getQuantity());
            productFound.setSalePrice(product.getSalePrice());
            productFound.setSupplier(product.getSupplier());
            productRepository.save(productFound);
            return productFound;
        }
    }

    public Product updateQuantity(Long productId, ProductQuantity productQuantity) {
        Product productFound = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Integer finalQuantity;

        if(productQuantity.getCalculationType().equals(1)){
            finalQuantity = productFound.getQuantity() + productQuantity.getQuantity();
            System.out.println(finalQuantity);
        } else {
            finalQuantity = productFound.getQuantity() - productQuantity.getQuantity();
            System.out.println(finalQuantity);
            if (finalQuantity < 0) {
                throw new QuantityException("A quantidade em estoque não pode ser menor que 0");
            }
        }
        productFound.setQuantity(finalQuantity);
        System.out.println(productFound);
        productRepository.save(productFound);
        return productFound;
    }

    public void delete(Long productId){
        productRepository.findById(productId)
                .orElseThrow(()-> new RuntimeException("Product not found"));
        productRepository.deleteById(productId);
    }
}
