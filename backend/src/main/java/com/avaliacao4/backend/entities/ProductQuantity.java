package com.avaliacao4.backend.entities;

import lombok.*;

@Getter
@Setter
@Builder
public class ProductQuantity {

    private Long productId;
    private Integer calculationType;
    private Integer quantity;

}
