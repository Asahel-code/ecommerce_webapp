import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import cabbage from '../../assets/images/mcabbage.png';
import fruit from '../../assets/images/mfruits.jpg';

import './Product.css';

const ProductsCategory = () => {

  const [curLink, setCurLink] = useState("home");
  const [hoverLink, setHoverLink] = useState({
    type: "fruits",
    style: "active"
  });

  useEffect(() => {
    setHoverLink(
      {
        ...hoverLink,
        type: curLink
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curLink]);
  
  return <div>
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4 links">
          <ul className="d-flex justify-content-center align-items-center">
            <li>
              <Link onClick={() => setCurLink("fruits")}
                className={hoverLink.type === "fruits" ? `${hoverLink.style} link-item` : "link-item"} to='/products'>Fruits
              </Link>
            </li>
            <li>
              <Link onClick={() => setCurLink("vegetables")}
                className={hoverLink.type === "vegetable" ? `${hoverLink.style} link-item` : "link-item"} to='/products'>Vegetables
              </Link>
            </li>
            <li>
              <Link onClick={() => setCurLink("cereals")}
                className={hoverLink.type === "cereals" ? `${hoverLink.style} link-item` : "link-item"} to='/products'>Cereals
              </Link>
            </li>
            <li>
              <Link onClick={() => setCurLink("legumes")}
                className={hoverLink.type === "legumes" ? `${hoverLink.style} link-item` : "link-item"} to='/products'>Legumes
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={cabbage} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={fruit} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={cabbage} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={fruit} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={cabbage} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={fruit} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={cabbage} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={fruit} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={cabbage} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={fruit} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={cabbage} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="products">
            <div className="card">
              <img src={cabbage} className="card-img-top" alt="..." height="200" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>

        {/* link to more */}
        <div className="col-md-12 col-sm-12 my-5 d-flex justify-content-center align-items-center">
          <div className="text-center py-3 more-btn">
            <Link className="more-btn-link" to="products">
              <div className="more">
                more <i className="bi bi-arrow-right"></i>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  </div>;
}

export default ProductsCategory;
