package com.avaliacao4.backend.service;

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
}
