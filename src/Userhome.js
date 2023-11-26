// Import React and necessary styles
import React, { useState,useEffect } from 'react';
import './style/Userhome.css'; 
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';



const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* For mobile view, one column */
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr); /* For small devices (576px and up), two columns */
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* For medium devices (768px and up), three columns */
  }
`;
const CartIcon = styled.div`
  font-size: 24px;
  color: #fff; /* Customize the color according to your design */
  margin-right: 30px;
  cursor: pointer;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position:relative;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;
const ProductDescription = styled.div`
font-size: 14px;
color: #555;
margin-top: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
`;

const DiscountedPrice = styled.span`
  color: #e74c3c;
  font-weight: bold;
  font-size: 18px;
`;

const AddToCartButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 15px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  border-radius:8px;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Add transition for smoother color change */

  &:hover {
    background-color: #219653; /* Change color on hover */
  }

  &:active {
    transform: scale(0.95); /* Add a slight scale down effect on click */
  }

  /* Add more custom styles or animations as needed */
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const QuantityButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
`;

const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  font-size: 16px;
  margin: 0 10px;
`;

const StockAvailability = styled.div`
  margin-top: 10px;
  color: ${({ available }) => (available ? '#27ae60' : '#e74c3c')};
  font-weight: bold;
`;
const DiscountLabel = styled.div`
  position: absolute;
  top: 10;
  left: 10;
  background-color: yellow; /* Red background color for the label */
  color: #555;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 14px;
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
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const RatingStars = styled.div`
  color: #f1c40f; /* Star color */
  margin-right: 5px;
`;

const RatingNumber = styled.span`
  color: #555;
  font-size: 14px;
`;


const colors = {
  primary: '#333', // Blue
  secondary: '#27ae60', // Green
  accent: '#555', // Red
};


const HomePage = () => {
    const [products, setProducts] = useState([
        {
          id: 1,
          name: 'Product 1',
          image: 'https://www.sathya.in/media/89044/catalog/fridge-icons-single-door.jpg?size=256',
          originalPrice: 100,
          discountedPrice: 80,
          quantity: 1,
          rating: 4,
          inStock: true,
        },
        {
          id: 2,
          name: 'Product 2',
          image: 'https://www.sathya.in/media/78831/catalog/glam_left_side_1.jpg?size=255',
          originalPrice: 120,
          discountedPrice: 90,
          quantity: 1,
          rating: 5,
          inStock: false,
        },
        {
            id: 3,
            name: 'Product 3',
            image: 'https://www.sathya.in/media/89044/catalog/fridge-icons-single-door.jpg?size=256',
            originalPrice: 1300,
            discountedPrice: 780,
            quantity: 1,
            rating: 4,
            inStock: true,
          },
          {
            id: 4,
            name: 'Product 4',
            image: 'https://www.sathya.in/media/89044/catalog/fridge-icons-single-door.jpg?size=256',
            originalPrice: 100,
            discountedPrice: 80,
            quantity: 1,
            rating: 3,
            inStock: true,
          }
        // Add more products as needed
      ]);
      useEffect(() => {
        const updatedProducts = products.map((product) => {
          const discountPercentage = ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100;
          return { ...product, discountPercentage };
        });
        setProducts(updatedProducts);
      }, []);
      const handleQuantityChange = (productId, newQuantity) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId ? { ...product, quantity: newQuantity } : product
          )
        );
      };
  // State to track the selected values for each dropdown
  const navigate = useNavigate();
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

    // Check if the selected option is "Logout" and navigate to "/userlogin"
    if (selectedValue === 'Logout') {
      navigate('/userlogin');
    }
  };

  return (
    <div className="homepage">
      <header>
        <div className="header-content">
        <div className="head-content">
          <span className="manager-login">User Login</span>
          </div>
        <CartIcon>
            {/* You can replace this with your actual cart functionality */}
            <FontAwesomeIcon icon={faShoppingCart} />
          </CartIcon>
          {/* Dropdown 1 */}
          <DropdownContainer className="dropdown">
            <button className="dropdown-btn">{dropdownValues.dropdown1 || 'Entertainment'}</button>
            <div className="dropdown-content">
              <div onClick={() => handleDropdownChange('Product', 'Add Product')}>Television</div>
              <div onClick={() => handleDropdownChange('Product', 'Edit Product')}>DVD player</div>
              <div onClick={() => handleDropdownChange('Product', 'Remove Product')}>Home theater</div>
              <div onClick={() => handleDropdownChange('Product', 'View Product')}>Gaming console</div>
              
            </div>
          </DropdownContainer>

          {/* Dropdown 2 */}
          <DropdownContainer className="dropdown">
            <button className="dropdown-btn">{dropdownValues.dropdown2 || 'Kitchen Appliances'}</button>
            <div className="dropdown-content"><div onClick={() => handleDropdownChange('dropdown2', 'Sales trends')}>Refrigerator</div>
              <div onClick={() => handleDropdownChange('dropdown2', 'Stock History')}>Oven</div>
              <div onClick={() => handleDropdownChange('dropdown2', 'Generate report')}>Toaster</div>
              <div onClick={() => handleDropdownChange('dropdown2', 'Generate report')}>Blender</div>
               <div onClick={() => handleDropdownChange('dropdown2', 'Option 4')}>Coffee maker</div> 
            </div>
          </DropdownContainer>

          

          <DropdownContainer className="dropdown">
            <button className="dropdown-btn">{dropdownValues.dropdown2 || 'Laundry/Cleaning'}</button>
            <div className="dropdown-content">
              <div onClick={() => handleDropdownChange('dropdown2', 'Option 1')}>Washing Machine</div>
              <div onClick={() => handleDropdownChange('dropdown2', 'Option 2')}>Dryer</div>
               <div onClick={() => handleDropdownChange('dropdown2', 'Option 3')}>Vaccum Cleaner</div>
              <div onClick={() => handleDropdownChange('dropdown2', 'Option 4')}>Iron Box</div> 
            </div>
          </DropdownContainer>

          <DropdownContainer className="dropdown">
            <button className="dropdown-btn">{dropdownValues.dropdown2 || 'Sales Trends'}</button>
            <div className="dropdown-content">
              <div onClick={() => handleDropdownChange('dropdown2', 'Option 1')}>Top rating</div>
              <div onClick={() => handleDropdownChange('dropdown2', 'Option 2')}>Most purchase</div>
               <div onClick={() => handleDropdownChange('dropdown2', 'Option 3')}>Sales Analysis</div>
             
            </div>
          </DropdownContainer>

          {/* Dropdown 3 */}
          <DropdownContainer className="dropdown">
            <button className="dropdown-btn">{dropdownValues.dropdown3 || 'Dashboard'}</button>
            <div className="dropdown-content">
              <div onClick={() => handleDropdownChange('dropdown3', 'Profile')}>Profile</div>
              <div onClick={() => handleDropdownChange('dropdown3', 'Logout')}>Logout</div>
              
               {/*<div onClick={() => handleDropdownChange('dropdown3', 'Option 4')}>Option 4</div> */}
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
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        className="carousel"
      >
        <div>
          <img src="https://welpmagazine.com/wp-content/uploads/2020/10/Cooker_banner.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://cdn.cheapism.com/images/iStock-506997606.2e16d0ba.fill-1440x605.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://www.allperfectstories.com/wp-content/uploads/2018/11/Cooking-Appliances-.jpg" alt="Slide 3" />
        </div>
        
      </Carousel>
       {/* Product Grid */}
       <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
                 <DiscountLabel>{product.discountPercentage}% OFF</DiscountLabel>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <RatingContainer>
                <RatingStars>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon key={star} icon={faStar} style={{ color: star <= product.rating ? '#f1c40f' : '#ddd' }} />
                  ))}
                </RatingStars>
                <RatingNumber>({product.rating})</RatingNumber>
              </RatingContainer>
  <ProductDescription>
                {/* Add your product description here */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et feugiat elit. Sed vitae nisi et justo tincidunt varius.
              </ProductDescription>
              <PriceContainer>
                <PriceWrapper>
                  <OriginalPrice>&#8377;{product.originalPrice}</OriginalPrice>
                  <DiscountedPrice>&#8377;{product.discountedPrice}</DiscountedPrice>
                </PriceWrapper>
                <StockAvailability available={product.inStock}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </StockAvailability>
              </PriceContainer>
              <QuantityContainer>
                <QuantityButton
                  onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                  disabled={product.quantity === 1}
                >
                  -
                </QuantityButton>
                <QuantityInput
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                />
                <QuantityButton onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>
                  +
                </QuantityButton>
              </QuantityContainer>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </ProductCard>
          ))}
        </ProductGrid>
        
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
