import React from 'react';
import cabbage from '../../assets/images/mcabbage.png';
import fruit from '../../assets/images/mfruits.jpg';

const ProductsCategory = () => {
  return <div>
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2>Freshgroceries Categories</h2>
        </div>
        <div className="col-md-3">
          <div className="cat-header text-center">Cabbages</div>
          <div className="cat-image">
            <img className="rounded" src={cabbage} alt="" height="200" width="200"/>
          </div>
          <div class="cat-products">
            <ul>
              <li></li>
              <span></span>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-header text-center">Fruits</div>
          <div className="cat-image">
            <img className="rounded" src={fruit} alt="" height="200" width="200"/>
          </div>
          <div class="cat-products">
            <ul>
              <li></li>
              <span></span>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-header">Cabbages</div>
          <div className="cat-image">
            <img src="" alt="" />
          </div>
          <div class="cat-products">
            <ul>
              <li></li>
              <span></span>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cat-header">Cabbages</div>
          <div className="cat-image">
            <img src="" alt="" />
          </div>
          <div class="cat-products">
            <ul>
              <li></li>
              <span></span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default ProductsCategory;
