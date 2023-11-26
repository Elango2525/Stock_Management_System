// Salestrends.js

import React from 'react';
import styled from 'styled-components';

const SalesTrendsPage = () => {
  return (
    <SalesTrendsContainer>
      <SalesTrendsHeader>Sales Trends Analysis</SalesTrendsHeader>

      {/* Add your sales trends content here */}
      <SalesTrendsContent>
        <SalesChart>
          {/* Your sales chart or visualization component */}
          {/* For example, you can use a library like Chart.js to create charts */}
          {/* Make sure to import and integrate the necessary charting components */}
        </SalesChart>

        <SalesData>
          {/* Display additional sales data or insights */}
          <SalesDataItem>
            <span>Total Sales:</span> $1,000,000
          </SalesDataItem>
          <SalesDataItem>
            <span>Top Selling Product:</span> Product A
          </SalesDataItem>

          {/* Advanced Sales Trends Options */}
          <SalesDataItem>
            <span>Product Images:</span>
            <ProductImages>
              <ProductImage src="https://www.sathya.in/media/19656/catalog/eureka-vacuum-cleaner-vogue-2.jpg?size=600" alt="Product 1" />
              <ProductImage src="https://www.sathya.in/media/19656/catalog/eureka-vacuum-cleaner-vogue-2.jpg?size=600" alt="Product 2" />
              <ProductImage src="https://www.sathya.in/media/19656/catalog/eureka-vacuum-cleaner-vogue-2.jpg?size=600" alt="Product 3" />
            </ProductImages>
          </SalesDataItem>

          {/* Additional Sales Trends Data */}
          <SalesDataItem>
            <span>Monthly Sales Growth:</span> +15%
          </SalesDataItem>
          <SalesDataItem>
            <span>Popular Sales Channels:</span> Online, In-Store
          </SalesDataItem>
          {/* Add more sales data items as needed */}
        </SalesData>
      </SalesTrendsContent>
    </SalesTrendsContainer>
  );
};

export default SalesTrendsPage;

// Styled Components
const SalesTrendsContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SalesTrendsHeader = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const SalesTrendsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-right:70%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SalesChart = styled.div`
  flex: 1;
  /* Add your chart styles here */
`;

const SalesData = styled.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const SalesDataItem = styled.div`
  margin-bottom: 15px;

  span {
    font-weight: bold;
    margin-right: 10px;
  }
`;

const ProductImages = styled.div`
  display: flex;

  /* Style each product image */
  img {
    max-width: 50px;
    max-height: 50px;
    margin-right: 8px;
    border-radius: 8px;
  }
`;

const ProductImage = styled.img``;  // Define ProductImage as a styled component
