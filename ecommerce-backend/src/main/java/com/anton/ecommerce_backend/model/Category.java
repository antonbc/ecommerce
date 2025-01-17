package com.anton.ecommerce_backend.model;

import jakarta.persistence.Id;

public class Category {

    @Id
    private Long categoryId;
    private String categoryName;

    // Constructor
    public Category(Long categoryId, String categoryName){
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }

    public void setCategoryId(Long categoryId){
        this.categoryId = categoryId;
    }

    public Long getCategoryId(){
        return categoryId;
    }

    public void setCategoryName(String categoryName){
        this.categoryName = categoryName;
    }

    public String getCategoryName(){
        return categoryName;
    }
}
