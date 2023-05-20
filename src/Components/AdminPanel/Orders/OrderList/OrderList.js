import React from 'react';
import UseOrders from '../../../../Hooks/UseOrders';

const OrderList = () => {
  const [orders,setOrders]=UseOrders();
    return (
        <div>
                              <div className="overflow-x-auto w-full">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
      <tr>
        <th></th> 
        <th>Order Time</th> 
        <th>Customer Name</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>
      {
        orders.map(order=>
      <tr>
        <th>{order.id}</th> 
        <td>{order.date}</td> 
        <td>{order.userId}</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr>
)}
          </tbody>


        </table>
      </div>
        </div>
    );
};

export default OrderList;