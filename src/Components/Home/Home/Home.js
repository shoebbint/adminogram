import React from 'react';
import img1 from '../../../images/banner.jpg'
import Product from '../../Products/Product/Product';
import Products from '../../Products/Products/Products';
const Home = () => {
    return (
        <div>
                        <div className="hero min-h-screen " style={{ backgroundImage: `url(${img1})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<Products></Products>
        </div>
    );
};

export default Home;