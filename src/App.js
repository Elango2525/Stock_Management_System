// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Userlogin from './Userlogin';
import Userhome from './Userhome';
import Add from './Add';
import Salestrends from './Salestrends';
import Lowstock from './Lowstock'
import Stafflogin from './Stafflogin';
import Staff from './Staff';
import Reporting from './Reporting';
import Tracking from './Tracking';
import ProductTable from './ProductTable';
import Signup from './Signup';
import Profile from './Profile';
import { UserProvider } from './UserContext';




const App = () => {
  const user = { name: 'New User', email: 'newuser@example.com', password: 'password123' };
  return (
    
    <Router>
    
       <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userlogin" element={<Userlogin  />} />
        <Route path="/userhome" element={<Userhome  />} />
        <Route path="/add" element={<Add  />} />
        <Route path="/salestrends" element={<Salestrends />} />
        <Route path="/lowstock" element={<Lowstock />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/stafflogin" element={<Stafflogin />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/producttable" element={<ProductTable />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* Add more routes as needed */}
      </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
