import React from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const DropdownContainer = styled.div`
  @media (max-width: 768px) {
    display: ${props => props.isVisible ? 'block' : 'none'};
  }
`;
const MobileMenuIcon = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    padding: 10px;
    cursor: pointer;
  }
`;
// Keyframes should be defined before they are used
const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled Components
const LowStockContainer = styled.div`
  padding: 50px 20px 20px; /* Added padding to the top to move content down */
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto; /* Centering the container */
  max-width: 800px; /* Limit the width for better readability */
`;

const LowStockHeader = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center; /* Center the header text */
`;

const LowStockList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  justify-content: space-between; /* Distribute items equally across the container */
`;

const LowStockItem = styled.li`
  flex: 0 0 calc(50% - 80px); /* Two items per row with some margin */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px; /* Add margin between items */

  &:nth-child(even) {
    margin-right: 0; /* Remove margin for even-indexed items (every other item) */
  }

  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  transition: background-color 0.3s ease-in-out; /* Adding transition for smoother color change */

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #e0e0e0; /* Change the background color on hover */
  }
`;
const ProductName = styled.span`
  color: #333;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;
const ExtraordinaryProductName = styled.span`
  color: #ff6600; /* Adjust the color to your preference */
  font-size: 22px; /* Adjust the font size to your preference */
  // ... (other styles)
`;

const StockStatus = styled.span`
color: ${(props) => (props.lowStock ? '#ff0000' : '#00ff00')}; /* Adjust the colors to your preference */
font-weight: bold;
animation: ${blinkAnimation} 1s infinite;
text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
margin-bottom: 10px;
// ... (other styles)
`;

const SalesTrendsStatus = styled.span`
display: flex;
align-items: center;
color: ${(props) => (props.increasing ? '#00ff00' : props.decreasing ? '#ff0000' : '#0000ff')}; /* Adjust the colors to your preference */
font-weight: bold;
margin-bottom: 10px;
// ... (other styles)
`;

const SalesTrendSymbol = styled.span`
  font-size: 18px;
  margin-right: 5px;
`;

const OrderButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out; /* Adding transition for smoother animation */
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
    transform: scale(1.1); /* Scale up on hover */
  }
`;

const PreviousPurchaseDate = styled.span`
  color: #333;
  font-weight: bold;
  margin-top: 10px;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ExtraordinaryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ExtraordinaryIcon = styled.span`
  font-size: 20px;
  margin-right: 5px;
  animation: ${pulseAnimation} 1s infinite;
`;

const LowStockPage = () => {
  const lowStockProducts = [
    {
      id: 1,
      name: 'Air Purifier',
      stock: 5,
      salesTrends: 'Increasing',
      previousPurchaseDate: '2023-11-01',
      imageUrl: 'https://www.sathya.in/media/88979/catalog/appliances-icons-air.jpg?size=256', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Home Furnishing',
      stock: 3,
      salesTrends: 'Decreasing',
      previousPurchaseDate: '2023-10-15',
      imageUrl: 'https://www.sathya.in/media/88980/catalog/appliances-icons-home-fur.jpg?size=256', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Mixer',
      stock: 8,
      salesTrends: 'Stable',
      previousPurchaseDate: '2023-11-05',
      imageUrl: 'https://www.sathya.in/media/89061/catalog/kitchen-app-icons-mixer.jpg?size=256', // Replace with actual image URL
    },
    // Add more low stock products as needed
  ];
  const [headerHeight, setHeaderHeight] = useState(0);

  // Effect to calculate the header height once the component is mounted
  useEffect(() => {
    const headerElement = document.querySelector('header');
    if (headerElement) {
      const height = headerElement.clientHeight;
      setHeaderHeight(height);
    }
  }, []);

  // Calculate the dynamic padding based on the header height
  const dynamicPadding = headerHeight + 0; // Adjust the value as needed

  const handleOrderButtonClick = (productName) => {
    const serviceId = 'service_pgaaj17';
    const templateId = 'template_x962icj';
    const userId = 'T9Y0GPjKavy-oBkeV';

    const templateParams = {
      to_email: '727721euit035@skcet.ac.in', // Replace with the recipient's email address
      product_name: productName,
    };

    emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log('Email sent successfully:', response);

      // Dispatch a custom event to notify the staff
      const staffNotificationEvent = new CustomEvent('staffNotification', {
        detail: { message: `Low stock alert: ${productName}` },
      });
      window.dispatchEvent(staffNotificationEvent);

      // Display a success notification
      toast.success(`Email sent successfully to ${templateParams.to_email}`);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      toast.error('Error sending email. Please try again.');
    });
};
  const [dropdownValues, setDropdownValues] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
  });

  // Function to handle dropdown value changes
  const handleDropdownChange = (dropdownName, selectedValue) => {
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [dropdownName]: selectedValue,
    }));
  };


  return (
    
    <><header>
    <div className="header-content">
    <div className="head-content">
      <span className="manager-login">Manager Login</span>
      </div>
      {/* Dropdown 1 */}
      <DropdownContainer className="dropdown">
        <button className="dropdown-btns">{dropdownValues.dropdown1 || 'Products'}</button>
        <div className="dropdown-content">
        <Link to="/add">
          <div onClick={() => handleDropdownChange('Product', 'Add Product')}>Add Product</div>
          </Link>
          <div onClick={() => handleDropdownChange('Product', 'Edit Product')}>Edit Product</div>
          <div onClick={() => handleDropdownChange('Product', 'Remove Product')}>Remove Product</div>
          <div onClick={() => handleDropdownChange('Product', 'View Product')}>View Product</div>
        </div>
      </DropdownContainer>

      {/* Dropdown 2 */}
      <DropdownContainer className="dropdown">
        <button className="dropdown-btns">{dropdownValues.dropdown2 || 'Stock Analysis'}</button>
       
        <div className="dropdown-content"> <Link to='/salestrends'>
            <div onClick={() => handleDropdownChange('dropdown2', 'Sales trends')}>Sales trends</div></Link>
          <div onClick={() => handleDropdownChange('dropdown2', 'Stock History')}>Stock History</div>
          <Link to='/reporting'>
          <div onClick={() => handleDropdownChange('dropdown2', 'Generate report')}>Generate report</div></Link>
          {/* <div onClick={() => handleDropdownChange('dropdown2', 'Option 4')}>Option 4</div> */}
        </div>
      </DropdownContainer>

      <DropdownContainer className="dropdown">
        <button className="dropdown-btns">{dropdownValues.dropdown2 || 'Stock Level'}</button>
        <div className="dropdown-content">
            <Link to='/lowstock'>
          <div onClick={() => handleDropdownChange('dropdown2', 'Option 1')}>Low Stock</div></Link>
          <div onClick={() => handleDropdownChange('dropdown2', 'Option 2')}>Old Stock</div>
          {/* <div onClick={() => handleDropdownChange('dropdown2', 'Option 3')}>Option 3</div>
          <div onClick={() => handleDropdownChange('dropdown2', 'Option 4')}>Option 4</div> */}
        </div>
      </DropdownContainer>

      {/* Dropdown 3 */}
      <DropdownContainer className="dropdown">
        <button className="dropdown-btns">{dropdownValues.dropdown3 || 'Dashboard'}</button>
        <div className="dropdown-content">
          <div onClick={() => handleDropdownChange('dropdown3', 'Profile')}>Profile</div>
          <Link to='/'>
          <div onClick={() => handleDropdownChange('dropdown3', 'Logout')}>Logout</div></Link>
          {/* <div onClick={() => handleDropdownChange('dropdown3', 'Option 3')}>Option 3</div>
          <div onClick={() => handleDropdownChange('dropdown3', 'Option 4')}>Option 4</div> */}
        </div>
      </DropdownContainer>
       {/* Mobile Menu Icon */}
       <MobileMenuIcon>
        {/* Add an icon or button for the mobile menu */}
        {/* For example, you can use a hamburger icon */}
        <div className='menu'>&#9776;</div>
      </MobileMenuIcon>
    </div>
  </header>
      <LowStockContainer style={{ paddingTop: dynamicPadding }}>
        <LowStockHeader>Low Stock Products</LowStockHeader>

        <LowStockList>
          {lowStockProducts.map((product) => (
            <LowStockItem key={product.id}>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <ExtraordinaryProductName>
                {product.name}
                <ExtraordinaryContainer>
                  <SalesTrendsStatus increasing={product.salesTrends === 'Increasing'} decreasing={product.salesTrends === 'Decreasing'}>
                    <SalesTrendSymbol>{product.salesTrends === 'Increasing' ? '📈' : product.salesTrends === 'Decreasing' ? '📉' : '📊'}</SalesTrendSymbol>
                    {product.salesTrends}
                  </SalesTrendsStatus>
                </ExtraordinaryContainer>
                </ExtraordinaryProductName>
              <StockStatus lowStock={product.stock <= 5}>{product.stock} in stock</StockStatus>
              <PreviousPurchaseDate>Previous Purchase: {product.previousPurchaseDate}</PreviousPurchaseDate>
              <OrderButton onClick={() => handleOrderButtonClick(product.name)}>
                <ExtraordinaryIcon>🚀</ExtraordinaryIcon> Email to Order
              </OrderButton>
            </LowStockItem>
          ))}
        </LowStockList>
      </LowStockContainer>
      <ToastContainer position="bottom-right" autoClose={5000} />{/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Social Media */}
          <div className="footer-option">
            <span className="footer-heading">Follow Us:</span>
            <div className="social-media-icons">
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-option">
            <span className="footer-heading">Subscribe to Our Newsletter:</span>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>

          {/* Contact Information */}
          <div className="footer-option">
            <span className="footer-heading">Contact Us:</span>
            <div className="contact-details">
              <p>Phone: xxx-xxx-xxxx</p>
              <p>Address: 123 Main St, Cityville</p>
              <p>Fax: xxx-xxx-xxxx</p>
            </div>
          </div>
         
        </div><div className="copyright">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
      </footer>
    </>
    
  );
};

export default LowStockPage;
