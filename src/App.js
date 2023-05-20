import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar.js/Navbar';

import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './Components/AdminPanel/DashboardLayout';
import ProductList from './Components/AdminPanel/Products/ProductList/ProductList';
import Dashboard from './Components/AdminPanel/Dashboard/Dashboard';
import CustomerList from './Components/AdminPanel/Customers/CustomerList/CustomerList';
import OrderList from './Components/AdminPanel/Orders/OrderList/OrderList';

function App() {
  return (
    <div className="App">
		<Navbar></Navbar>


<Routes>

{/* <Route path='/login' element={<Login/>} /> */}
<Route path='/' element={<DashboardLayout/>}>
   <Route path='/productlist' element={<ProductList/>} />
   <Route path='/dashboard' element={<Dashboard/>} />
   <Route path='/customerlist' element={<CustomerList/>} />
   <Route path='/orderlist' element={<OrderList/>} />
</Route>


</Routes>

    </div>
  );
}

export default App;
