package com.avaliacao4.backend.service;

import com.avaliacao4.backend.entities.Product;
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

    public Product save(Product product) throws Exception {
        if (product.getQuantity() < 0) {
            throw new Exception("A quantidade em estoque não pode ser menor que 0");
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

    public Product update(Long productId, Product product){
        Product productFound =  productRepository.findById(productId)
                .orElseThrow(()-> new RuntimeException("Product not found"));

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

    public void delete(Long productId){
        productRepository.findById(productId)
                .orElseThrow(()-> new RuntimeException("Product not found"));
        productRepository.deleteById(productId);
    }
}
