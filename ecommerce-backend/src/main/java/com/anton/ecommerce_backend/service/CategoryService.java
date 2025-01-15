package com.anton.ecommerce_backend.service;

import com.anton.ecommerce_backend.model.Category;

import java.util.List;

public interface CategoryService {

    List<Category> getAllCategories();
    void createCategory(Category category);
}
