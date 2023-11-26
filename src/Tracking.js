import React from 'react';
import { useSelector } from 'react-redux'; // Assuming you are using Redux for state management
import './style/Tracking.css';
// Sample inventory data structure
const sampleInventoryData = [
  { id: 1, name: 'Laptop', quantity: 20, category: 'Electronics' },
  { id: 2, name: 'T-Shirt', quantity: 50, category: 'Clothing' },
  { id: 3, name: 'Notebook', quantity: 100, category: 'Stationery' },
  { id: 4, name: 'Headphones', quantity: 15, category: 'Electronics' },
];

const ManagerTrackingPage = () => {
  // Assuming you have a Redux store that contains inventory data
  const inventoryData = useSelector((state) => state.inventory) || sampleInventoryData;

  return (
    <div className="manager-tracking-page">
      <h2>Inventory Tracking</h2>
      <div className="inventory-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerTrackingPage;
