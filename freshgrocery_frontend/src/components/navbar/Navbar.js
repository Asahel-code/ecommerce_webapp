import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

import './Navbar.css'

const Navbar = () => {

    //Variable declarations
    const [curLink, setCurLink] = useState("home");
    const [hoverLink, setHoverLink] = useState({
        type: "home",
        style: "active"
    });

    var AuthButtons = ""

    const navigate = useHistory();



    const onLogout = (e) => {
        e.preventDefault();
        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/logout`, ).then(res => {
                if (res.data.status === 200) {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('auth_name');
                    swal("Success", res.data.message, "success");
                    navigate.push("/");
                }
                else {
                  
                }
    
            });
        });
    }

   

    useEffect(() => {
        setHoverLink(
            {
                ...hoverLink,
                type: curLink
            }
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curLink]);


    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <ul>
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
            </ul>
        )
    }


    else {
        AuthButtons = (
            <ul>
                <li>
                    <Link onClick={() => setCurLink("profile")}
                        className={hoverLink.type === "profile" ? `${hoverLink.style} link-item` : "link-item"} to="/profile">User
                    </Link>
                </li>
                <li>
                    <button type="button" onClick={onLogout} className="logout-btn">Logout</button>
                </li>
            </ul>
        )
    }

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
                                className={hoverLink.type === "products" ? `${hoverLink.style} link-item` : "link-item"} to="/#products">Products
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setCurLink("about")}
                                className={hoverLink.type === "about" ? `${hoverLink.style} link-item` : "link-item"} to="/about">About us
                            </Link>
                        </li>

                        {AuthButtons}

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
