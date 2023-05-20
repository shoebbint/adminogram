import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar.js/Navbar';

import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './Components/AdminPanel/DashboardLayout/DashboardLayout';
import ProductList from './Components/AdminPanel/Products/ProductList/ProductList';
import Dashboard from './Components/AdminPanel/Dashboard/Dashboard';
import CustomerList from './Components/AdminPanel/Customers/CustomerList/CustomerList';
import OrderList from './Components/AdminPanel/Orders/OrderList/OrderList';
import Login from './Components/Shared/Login/Login/Login';
import Register from './Components/Shared/Login/Register/Register';
import Home from './Components/Home/Home/Home';
import Cart from './Components/Cart/Cart/Cart';

function App() {
  return (
    <div className="App">


        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<Cart />} >
                <Route element={<Navbar></Navbar>}>
                    <Route path='/home' element={<Home />} />
                      <Route path='/' element={<DashboardLayout />}>
                            <Route path='/productlist' element={<ProductList />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/customerlist' element={<CustomerList />} />
                            <Route path='/orderlist' element={<OrderList />} />
                      </Route>
                  </Route>
            </Route>
        </Routes>

    </div>
  );
}

export default App;
