package com.avaliacao4.backend.controller;

import com.avaliacao4.backend.entities.Supplier;
import com.avaliacao4.backend.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("supplier")
@CrossOrigin(origins = "*")
public class SupplierController {
    @Autowired
    private final SupplierService supplierService;

    public SupplierController(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @PostMapping
    public ResponseEntity<Supplier> save(@RequestBody Supplier supplier){
        Supplier supplier1 = supplierService.save(supplier);
        return new ResponseEntity<>(supplier1, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Supplier>> index(){
        List<Supplier> suppliers = supplierService.findAll();
        return new ResponseEntity<>(suppliers, HttpStatus.OK);
    }
}
