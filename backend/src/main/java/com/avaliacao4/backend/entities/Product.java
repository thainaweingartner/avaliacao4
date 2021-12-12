package com.avaliacao4.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer quantity;
    private BigDecimal purchasePrice;
    private BigDecimal salePrice;

    @ManyToOne
    private Supplier supplier;

    @ManyToOne
    private ProductType productType;
}
