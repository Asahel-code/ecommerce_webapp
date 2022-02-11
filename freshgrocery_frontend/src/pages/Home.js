import React from 'react';
import SliderImage from '../components/sliderImage/SliderImage';
import ProductsCategory from '../components/productCategory/ProductsCategory';
import AboutProduct from '../components/aboutProduct/AboutProduct';


const Home = () => {
  return <div>
    <>
      <div>
        <SliderImage />
      </div>
      <div>
        <ProductsCategory/>
      </div>
      <div>
        <AboutProduct/>
      </div>
    </>
  </div>;
}

export default Home;
