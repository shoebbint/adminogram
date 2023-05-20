import React from 'react';
import Navbar from '../Shared/Navbar.js/Navbar';
import { Link, Outlet } from 'react-router-dom';
import ProductList from './Products/ProductList/ProductList';

const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-gray-400 ">

<Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

      <li><Link to={"/dashboard"}>Dashboard</Link></li>
      <li><Link to={"/productlist"}>Product List</Link></li>
      <li><Link to={"/customerlist"}>Customer List</Link></li>
      <li><Link to={"/orderlist"}>Customer List</Link></li>
    </ul>
  
  </div>
</div>

        </div>
    );
};

export default DashboardLayout;