import React from "react";
import { NavLink } from "react-router-dom";

function Checkout() {
    return (
        <html>
            <head>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3">
                            <div class="header__logo">
                                <a href="./index.html"><img src="/assets/img/opti.jpg" height="150px" width="300px" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <nav class="header__menu mobile-menu">
                                <ul>
                                    <li class="active"><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/shop">Shop</NavLink></li>
                                    <li><NavLink to="/about">About Us</NavLink></li>
                                    {/* <li><a href="#">Pages</a>
                                                    <ul class="dropdown">
                                                        <li><NavLink to="/about">About Us</NavLink></li>
                                                        <li><NavLink to="/detail">Shop Detaill</NavLink></li>
                                                        <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                                        <li><a href="./checkout.html">Check Out</a></li>                                                        
                                                    </ul>
                                                </li>                                                 */}
                                    <li><NavLink to="/contact">Contacts</NavLink></li>
                                    {/* <li><a href="./contact.html">Contacts</a></li> */}
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <div class="header__nav__option">
                                <a href="#" class="search-switch"><img src="/assets/img/icon/search.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/icon/cart.png" alt="" /> <span></span></a>                                
                            </div>
                        </div>
                    </div>
                    <div class="canvas__open"><i class="fa fa-bars"></i></div>
                </div>
            </head>
            <body>

            </body>
        </html> 
    )
}

export default Checkout;