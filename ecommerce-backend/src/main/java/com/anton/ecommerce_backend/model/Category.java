package com.anton.ecommerce_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @NotBlank
    @Size(min = 5, message = "Category name must have atleast 5 characters")
    private String categoryName;

    public Category(Long categoryId, @NotBlank String categoryName) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }

    public Category() {
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public @NotBlank String getCategoryName() {
        return this.categoryName;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public void setCategoryName(@NotBlank String categoryName) {
        this.categoryName = categoryName;
    }


    public String toString() {
        return "Category(categoryId=" + this.getCategoryId() + ", categoryName=" + this.getCategoryName() + ")";
    }
}