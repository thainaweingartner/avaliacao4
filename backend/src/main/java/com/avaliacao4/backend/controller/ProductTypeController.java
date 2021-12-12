package com.avaliacao4.backend.controller;

import com.avaliacao4.backend.entities.ProductType;
import com.avaliacao4.backend.service.ProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("type")
@CrossOrigin(origins = "*")
public class ProductTypeController {
    @Autowired
    private final ProductTypeService productTypeService;

    public ProductTypeController(ProductTypeService productTypeService) {
        this.productTypeService = productTypeService;
    }

    @PostMapping
    public ResponseEntity<ProductType> save(@RequestBody ProductType productType){
        ProductType productType1 = productTypeService.save(productType);
        return new ResponseEntity<>(productType1, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ProductType>> index(){
        List<ProductType> productsTypes = productTypeService.findAll();
        return new ResponseEntity<>(productsTypes, HttpStatus.OK);
    }
}
