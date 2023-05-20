import React from 'react';
import UseCustomers from '../../../../Hooks/UseCustomers';

const CustomerList = () => {
  const [customers, SetCustomers] = UseCustomers()
  console.log(customers);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Name</th>
              <th>Address</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              customers.map(customer =>
                <tr>
                  <th>
                    {customer.id}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={customer.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{customer.name}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    {customer.address}

                  </td>
                  <td>{customer.orders.length}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              )
            }
          </tbody>
          {/* foot */}


        </table>
      </div>
    </div>
  );
};

export default CustomerList;