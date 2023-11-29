// ProductTable.js
import React, { useState } from 'react';
import './style/ProductTable.css';

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://www.sathya.in/media/88971/catalog/appliances-icons-room-heater.jpg?size=256',
    description: 'Description for Product 1',
    quantity: 10,
    originalPrice: 50,
    discountedPrice: 40,
    inStock: true,
  },
  {
    id: 1,
    name: 'Product 2',
    image: 'https://www.sathya.in/media/88971/catalog/appliances-icons-room-heater.jpg?size=256',
    description: 'Description for Product 1',
    quantity: 0,
    originalPrice: 50,
    discountedPrice: 40,
    inStock: false,
  },
  // Add more product data as needed
];

const ProductTable = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Original Price</th>
            <th>Discounted Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>${product.originalPrice}</td>
              <td>${product.discountedPrice}</td>
              <td className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
