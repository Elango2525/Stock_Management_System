// Import React and necessary styles
import React, { useState } from 'react';
import './style/Home.css'; 
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)); /* Default: 3 columns */
  gap: 20px;

  @media (max-width: 768px) {
    /* For screens 768px and below, change to 2 columns */
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    /* For screens 480px and below, change to 1 column */
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
 
`;
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


const colors = {
  primary: '#333', // Blue
  secondary: '#27ae60', // Green
  accent: '#555', // Red
};

const GridItem = styled.div`
  background: linear-gradient(to bottom, ${colors.primary}, ${colors.secondary});
  color: #fff;
  padding: 70px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(to bottom, ${colors.accent}, ${colors.primary});
    transform: scale(1.05); /* Example: Scale the grid item on hover */
  }

  /* Animation for the grid item */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fadeInUp 0.5s ease-out; /* Example: Fade in and move up animation */
`;
const HomePage = () => {
  // State to track the selected values for each dropdown
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
    <div className="homepage">
      <header>
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

      <div className="main-content" style={{ marginTop: '80px' }}>
        <GridContainer>
          {/* You can customize the grid items as needed */}
          <GridItem onClick={() => alert('Clicked on Grid 1')}><h3>Stock Management</h3></GridItem>
          <GridItem onClick={() => alert('Clicked on Grid 2')}><h3>Sales Trends</h3></GridItem>
          <GridItem onClick={() => alert('Navigate to Notifications')}><h3>Notifications</h3></GridItem>
          <div className='word'>
          </div>
          <GridItem onClick={() => alert('Clicked on Grid 3')}><h3>Staff</h3></GridItem>
          <Link to='/tracking'>
          <GridItem onClick={() => alert('Clicked on Grid 3')}><h3>Inventory Tracking</h3></GridItem></Link>
          <GridItem onClick={() => alert('Clicked on Grid 3')}><h3>Reporting</h3></GridItem>
          <div className='word'>
          </div>
          <GridItem onClick={() => alert('Clicked on Grid 3')}><h3>Stock History</h3></GridItem>
          <GridItem onClick={() => alert('Clicked on Grid 3')}><h3>View All Products</h3></GridItem>
          
          {/* Add more grid items as needed */}
        </GridContainer>
        
      </div>
      {/* Footer */}
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
    </div>
  );
};


export default HomePage;
