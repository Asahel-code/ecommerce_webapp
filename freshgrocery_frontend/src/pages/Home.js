import React from 'react';
import SliderImage from '../components/sliderImage/SliderImage';
import ProductsCategory from '../components/productCategory/ProductsCategory';


const Home = () => {
  return <div>
    <>
      <div>
        <SliderImage />
      </div>
      <div>
        <ProductsCategory/>
      </div>

    </>
  </div>;
}

export default Home;
