package com.avaliacao4.backend.service;

import com.avaliacao4.backend.entities.Supplier;
import com.avaliacao4.backend.repository.SupplierRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    public Supplier save(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public List<Supplier> findAll(){
        List<Supplier> supplier =  supplierRepository.findAll();
        return supplier;
    }
}
