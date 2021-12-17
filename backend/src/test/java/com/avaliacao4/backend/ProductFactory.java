package com.avaliacao4.backend;

import com.avaliacao4.backend.entities.Product;
import com.avaliacao4.backend.entities.ProductType;
import com.avaliacao4.backend.entities.Supplier;

import java.math.BigDecimal;

public class ProductFactory {

    public static Product buildDefault(){
        return Product.builder()
                .id(1L)
                .name("Inspirion 14")
                .productType(buildProductType())
                .supplier(buildSupplier())
                .purchasePrice(BigDecimal.valueOf(400))
                .salePrice(BigDecimal.valueOf(200))
                .quantity(10)
                .build();
    }

    public static  Product quantityErrorProduct(){
        return Product.builder()
                .id(1L)
                .name("Inspirion 15")
                .productType(buildProductType())
                .supplier(buildSupplier())
                .purchasePrice(BigDecimal.valueOf(400))
                .salePrice(BigDecimal.valueOf(200))
                .quantity(-5)
                .build();
    }

    public static ProductType buildProductType(){
        return ProductType.builder()
                .id(1L)
                .name("Notebook")
                .build();
    }

    public static Supplier buildSupplier(){
        return Supplier.builder()
                .id(1L)
                .name("Dell")
                .phone("345445354")
                .build();
    }

}
