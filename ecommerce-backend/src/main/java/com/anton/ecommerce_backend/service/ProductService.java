package com.anton.ecommerce_backend.service;

import com.anton.ecommerce_backend.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Long productId);
    void createProduct(Product product);
    String deleteProduct(Long productId);
    Product updateProduct(Product updatedProduct, Long productId);
}
