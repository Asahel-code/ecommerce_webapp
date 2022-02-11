import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
    const [curLink, setCurLink] = useState("home");
    const [hoverLink, setHoverLink] = useState({
        type: "home",
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
        <header>
            <div className="navbar">
                <div className="logo">
                    <h1><a href="/">freshgrocery</a></h1>
                    <span>We provide you fresh and organic products direct form the farm</span>
                </div>

                <div className="links">
                    <ul>
                        <li>
                            <Link onClick={() => setCurLink("home")}
                                className={hoverLink.type === "home" ? `${hoverLink.style} link-item` : "link-item"} to="/">Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setCurLink("products")}
                                className={hoverLink.type === "products" ? `${hoverLink.style} link-item` : "link-item"} to="/products">Products
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setCurLink("about")}
                                className={hoverLink.type === "about" ? `${hoverLink.style} link-item` : "link-item"} to="/about">About us
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setCurLink("login")}
                             className={hoverLink.type === "login" ? `${hoverLink.style} link-item` : "link-item"} to="/login">Login
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setCurLink("signup")}
                                className={hoverLink.type === "signup" ? `${hoverLink.style} link-item` : "link-item"} to="/register">signup
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setCurLink("cart")}
                                className={hoverLink.type === "cart" ? `${hoverLink.style} link-item` : "link-item"} to="/cart"><i className="bi bi-basket-fill"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    </div>;
}

export default Navbar;
