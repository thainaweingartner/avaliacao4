package com.avaliacao4.backend.service;

import com.avaliacao4.backend.entities.Product;
import com.avaliacao4.backend.entities.ProductType;
import com.avaliacao4.backend.repository.ProductTypeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ProductTypeService {

    @Autowired
    private ProductTypeRepository productTypeRepository;

    public ProductType save(ProductType productType) {
        return productTypeRepository.save(productType);
    }

    public List<ProductType> findAll(){
        List<ProductType> productType =  productTypeRepository.findAll();
        return productType;
    }

    public ProductType update(Long productTypeId, ProductType productType){
        ProductType productTypeFound =  productTypeRepository.findById(productTypeId)
                .orElseThrow(()-> new RuntimeException("Product Type not found"));

        productTypeFound.setName(productType.getName());
        productTypeRepository.save(productTypeFound);
        return productTypeFound;
    }

    public void delete(Long productTypeId){
        productTypeRepository.findById(productTypeId)
                .orElseThrow(()-> new RuntimeException("Product Type not found"));
        productTypeRepository.deleteById(productTypeId);
    }
}
