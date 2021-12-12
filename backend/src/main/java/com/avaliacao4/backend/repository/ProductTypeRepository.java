package com.avaliacao4.backend.repository;

import com.avaliacao4.backend.entities.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductTypeRepository extends JpaRepository<ProductType, Long> {
}
