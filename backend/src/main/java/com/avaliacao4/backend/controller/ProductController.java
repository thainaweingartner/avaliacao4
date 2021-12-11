package com.avaliacao4.backend.controller;

import com.avaliacao4.backend.entities.Product;
import com.avaliacao4.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("product")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> save(@RequestBody Product product){
        Product product1 = productService.save(product);
        return new ResponseEntity<>(product1, HttpStatus.CREATED);
    }

    @GetMapping("{productId}")
    public ResponseEntity<Product> findProductByCompany(@PathVariable("productId") Long productId){
        Product products = productService.findById(productId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Product>> index(){
        List<Product> people = productService.findAll();
        return new ResponseEntity<>(people, HttpStatus.OK);
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<Product> updatePerson(@PathVariable Long productId, @RequestBody Product product){
        Product personUpdated = productService.update(productId, product);
        return new ResponseEntity<>(personUpdated, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity deletePerson(@PathVariable Long productId)  {
        productService.delete(productId);
        return ResponseEntity.noContent().build();
    }
}