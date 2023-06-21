import React, { useEffect, useState } from "react";
import { NavLink, json, useParams } from "react-router-dom";
function AddTocart() {

    const [cartproduct, setcartproduct] = useState([]);

    const productId = useParams();

    useEffect(() => {
        fetch(`http://localhost:51507/api/ProductTbls/${productId.productId}`)
            .then(responce => responce.json())
            .then(json => setcartproduct(json))
    })

    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                {/* <!--
                    manifest.json provides metadata used when your web app is installed on a
                    user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
                    --> */}
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                {/* <!--
                    Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.

                    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                    work correctly both with client-side routing and a non-root public URL.
                    Learn how to configure a non-root public URL by running `npm run build`.
                    --> */}
                <title>OPticart-Fashion</title>

                {/* <!-- Google Font --> */}
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
                    rel="stylesheet" />

                {/* <!-- Css Styles --> */}
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/font-awesome.min.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/elegant-icons.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/magnific-popup.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/nice-select.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/slicknav.min.css" type="text/css" />
                <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
            </head>
            <body>
                <div class="offcanvas-menu-overlay"></div>
                <div class="offcanvas-menu-wrapper">
                    <div class="offcanvas__option">
                        <div class="offcanvas__links">
                            <a href="#">Sign in</a>
                            <a href="#">FAQs</a>
                        </div>
                        <div class="offcanvas__top__hover">
                            <span>Usd <i class="arrow_carrot-down"></i></span>
                            <ul>
                                <li>USD</li>
                                <li>EUR</li>
                                <li>USD</li>
                            </ul>
                        </div>
                    </div>
                    <div class="offcanvas__nav__option">
                        <a href="#" class="search-switch"><img src="/assets/img/icon/search.png" alt="" /></a>
                        <a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a>
                        <a href="#"><img src="/assets/img/icon/cart.png" alt="" /> <span>0</span></a>
                        <div class="price">$0.00</div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                    <div class="offcanvas__text">
                        <p>Free shipping, 30-day return or refund guarantee.</p>
                    </div>
                </div>
                {/* <!-- Offcanvas Menu End --> */}

                {/* <!-- Header Section Begin --> */}
                <header class="header">
                    <div class="header__top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-7">
                                    <div class="header__top__left">
                                        <p>Protect your eye with our best products..!!</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-5">
                                    <div class="header__top__right">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </header>
                {/* <!-- Header Section End --> */}
                {/* <!-- Breadcrumb Section Begin --> */}
                <section class="breadcrumb-option">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="breadcrumb__text">
                                    <h4>Shopping Cart</h4>
                                    <div class="breadcrumb__links">
                                        <a href="./index.html">Home</a>
                                        <a href="./shop.html">Shop</a>
                                        <span>Shopping Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Breadcrumb Section End --> */}
                {/* <!-- Shopping Cart Section Begin --> */}
                <section class="shopping-cart spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="shopping__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="text-center">Product</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="product__cart__item">
                                                    <div class="product__cart__item__pic">
                                                        <img src={"/assets/img" + cartproduct.productImage} height="100px" width="100px" alt="" />
                                                    </div>
                                                    <br />
                                                    <div class="product__cart__item__text">
                                                        <h6>{cartproduct.productName}</h6>
                                                    </div>
                                                </td>
                                                <td class="quantity__item">
                                                    <div class="quantity">
                                                        <div class="pro-qty-2 text-center" >
                                                            {cartproduct.quantity}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="cart__price">₹{cartproduct.productPrice}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="continue__btn">
                                            <a href="/shop">Continue Shopping</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="continue__btn update__btn">
                                            <a href="#"><i class="fa fa-spinner"></i> Update cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="cart__discount">
                                    <h6>Discount codes</h6>
                                    <form action="#">
                                        <input type="text" placeholder="Coupon code" />
                                        <button type="submit">Apply</button>
                                    </form>
                                </div>
                                <div class="cart__total">
                                    <h6>Cart total</h6>
                                    <ul>
                                        <li>Subtotal <span>₹{cartproduct.productPrice}</span></li>
                                        <li>Total <span>₹{cartproduct.productPrice}</span></li>
                                    </ul>
                                    <a href="#" class="primary-btn">Proceed to checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Shopping Cart Section End --> */}
                {/* <!-- Footer Section Begin --> */}
                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="footer__about">
                                    <div class="footer__logo">
                                        <a href="#"><img src="img/footer-logo.png" alt="" /></a>
                                    </div>
                                    <p>The customer is at the heart of our unique business model, which includes design.</p>
                                    <a href="#"><img src="img/payment.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                                <div class="footer__widget">
                                    <h6>Shopping</h6>
                                    <ul>
                                        <li><a href="#">Clothing Store</a></li>
                                        <li><a href="#">Trending Shoes</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Sale</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6">
                                <div class="footer__widget">
                                    <h6>Shopping</h6>
                                    <ul>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Delivary</a></li>
                                        <li><a href="#">Return & Exchanges</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                                <div class="footer__widget">
                                    <h6>NewLetter</h6>
                                    <div class="footer__newslatter">
                                        <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                        <form action="#">
                                            <input type="text" placeholder="Your email" />
                                            <button type="submit"><span class="icon_mail_alt"></span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <div class="footer__copyright__text">

                                    <p>Copyright ©
                                        <script>
                                            document.write(new Date().getFullYear());
                                        </script>2023
                                        All rights reserved | This template is made with <i class="fa fa-heart-o"
                                            aria-hidden="true"></i> by <a href="https://bananasofttech.pythonanywhere.com" target="_blank">Banana SoftInfotech</a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Footer Section End --> */}

                {/* <!-- Search Begin --> */}
                <div class="search-model">
                    <div class="h-100 d-flex align-items-center justify-content-center">
                        <div class="search-close-switch">+</div>
                        <form class="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
                {/* <!-- Search End --> */}


                <script src="/assets/js/jquery-3.3.1.min.js"></script>
                <script src="/assets/js/bootstrap.min.js"></script>
                <script src="/assets/js/jquery.nice-select.min.js"></script>
                <script src="/assets/js/jquery.nicescroll.min.js"></script>
                <script src="/assets/js/jquery.magnific-popup.min.js"></script>
                <script src="/assets/js/jquery.countdown.min.js"></script>
                <script src="/assets/js/jquery.slicknav.js"></script>
                <script src="/assets/js/mixitup.min.js"></script>
                <script src="/assets/js/owl.carousel.min.js"></script>
                <script src="/assets/js/main.js"></script>
            </body>
        </html >
    )
}

export default AddTocart;