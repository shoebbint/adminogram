import React from 'react';
import UseProducts from '../../../Hooks/UseProducts';

const Products = () => {
    const [products,setProducts]=UseProducts()
    return (
        <div className=' my-20 mx-20 grid grid-cols-3 gap-10'>
            {
products.map(product=>
            
            <div className="card  glass">
  <figure><img className='h-24' src={product.image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
    </div>
  </div>
</div>
)
}
        </div>
    );
};

export default Products;