// add.js

import React, { useState } from 'react';
import './style/add.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    image: '',
    description: '',
    quantity: '',
    originalPrice: '',
    discountedPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to post the product data to the server or perform other actions
    console.log('Product Data:', product);
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Product ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={product.id}
          onChange={handleChange}
        />

        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />

        <label htmlFor="image">Product Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={product.image}
          onChange={handleChange}
        />

        <label htmlFor="description">Product Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />

        <label htmlFor="quantity">Product Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
        />

        <label htmlFor="originalPrice">Original Price:</label>
        <input
          type="number"
          id="originalPrice"
          name="originalPrice"
          value={product.originalPrice}
          onChange={handleChange}
        />

        <label htmlFor="discountedPrice">Discounted Price:</label>
        <input
          type="number"
          id="discountedPrice"
          name="discountedPrice"
          value={product.discountedPrice}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
