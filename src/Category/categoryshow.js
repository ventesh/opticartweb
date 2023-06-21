import React, { Component, useEffect, useState } from "react";
import { NavLink, json, useParams } from "react-router-dom";
import { varibles } from "../API/variable";
import { Link } from "react-router-dom";


function Catshow() {

    const [cats, setcats] = useState([]);
    const [products, setproducts] = useState([]);

    const categoryid = useParams();

    useEffect(() => {
        fetch(`http://localhost:51507/api/ProductTbls/cat/${categoryid.categoryid}`)
            .then(responce => responce.json())
            .then(json => setproducts(json))


        fetch(`http://localhost:51507/api/CategoryTbls`)
            .then(res => res.json())
            .then(json => setcats(json))
        console.log(categoryid);
    })

    return (
        <div>
            <html>
                <haed>
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
                </haed>
                <body>
                    {/* // <!-- Offcanvas Menu Begin --> */}
                    <div className="offcanvas-menu-overlay"></div>
                    <div className="offcanvas-menu-wrapper">
                        <div className="offcanvas__option">
                            <div className="offcanvas__links">
                                <a href="#">Sign in</a>
                                <a href="#">FAQs</a>
                            </div>
                            <div className="offcanvas__top__hover">
                                <span>Usd <i className="arrow_carrot-down"></i></span>
                                <ul>
                                    <li>USD</li>
                                    <li>EUR</li>
                                    <li>USD</li>
                                </ul>
                            </div>
                        </div>
                        <div className="offcanvas__nav__option">
                            <a href="#" className="search-switch"><img src="/assets/img/icon/search.png" alt="" /></a>
                            <a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a>
                            <a href="#"><img src="/assets/img/icon/cart.png" alt="" /> <span>0</span></a>
                            <div className="price">$0.00</div>
                        </div>
                        <div id="mobile-menu-wrap"></div>
                        <div className="offcanvas__text">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                        </div>
                    </div>
                    {/* <!-- Offcanvas Menu End --> */}

                    {/* <!-- Header Section Begin --> */}
                    <header className="header">
                        <div className="header__top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-7">
                                        <div className="header__top__left">
                                            <p>Protect your eye with our best products..!!</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-5">
                                        <div className="header__top__right">
                                            <div className="header__top__links">

                                            </div>
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
                    <section className="breadcrumb-option">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb__text">
                                        <h4>Shop</h4>
                                        <div className="breadcrumb__links">
                                            <a href="./index.html">Home</a>
                                            <span>Shop</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Breadcrumb Section End --> */}
                    {/* <!-- Shop Section Begin --> */}
                    <section className="shop spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="shop__sidebar">
                                        <div className="shop__sidebar__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search..." />
                                                <button type="submit"><span className="icon_search"></span></button>
                                            </form>
                                        </div>
                                        <div className="shop__sidebar__accordion">
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample" >
                                                        {cats.map(ct =>
                                                            <div className="card-body" key={ct.categoryId}>
                                                                <div className="shop__sidebar__categories">
                                                                    <ul className="nice-scroll">
                                                                        {/* <li><a href="#"></a></li>*/}
                                                                        <h2><a href="#" >{ct.categoryname}</a></h2>
                                                                        <Link to={`/catshow/${ct.categoryId}`}><img src={"/assets/img" + ct.image} /></Link>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="shop__product__option">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="shop__product__option__left">
                                                    <p>Showing 1–12 of 126 results</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="shop__product__option__right">
                                                    <p>Sort by Price:</p>
                                                    <select>
                                                        <option value="">Low To High</option>
                                                        <option value="">$0 - $55</option>
                                                        <option value="">$55 - $100</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {products.map(pr =>
                                            <div className="col-lg-4 col-md-6 col-sm-6" key={pr.productId} >
                                                <div className="product__item">
                                                    <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                                        <div><Link to={`/detail/${pr.productId}`}><img src={"/assets/img" + pr.productImage} height="250px" width="300px" /></Link></div>
                                                        <ul className="product__hover">
                                                            <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                                                            <li><a href="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a>
                                                            </li>
                                                            <li><a href="#"><img src="img/icon/search.png" alt="" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6>{pr.productName}</h6>
                                                        <a href="#" className="add-cart">+ Add To Cart</a>
                                                        <div className="rating">
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <h5>₹{pr.productPrice}</h5>
                                                        <div className="product__color__select">
                                                            <label for="pc-4">
                                                                <input type="radio" id="pc-4" />
                                                            </label>
                                                            <label className="active black" for="pc-5">
                                                                <input type="radio" id="pc-5" />
                                                            </label>
                                                            <label className="grey" for="pc-6">
                                                                <input type="radio" id="pc-6" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Shop Section End --> */}

                    {/* <!-- Footer Section Begin --> */}
                    <footer className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="footer__about">
                                        <div className="footer__logo">
                                            <a href="#"><img src="img/footer-logo.png" alt="" /></a>
                                        </div>
                                        <p>The customer is at the heart of our unique business model, which includes design.</p>
                                        <a href="#"><img src="img/payment.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                                    <div className="footer__widget">
                                        <h6>Shopping</h6>
                                        <ul>
                                            <li><a href="#">Clothing Store</a></li>
                                            <li><a href="#">Trending Shoes</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Sale</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="footer__widget">
                                        <h6>Shopping</h6>
                                        <ul>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Payment Methods</a></li>
                                            <li><a href="#">Delivary</a></li>
                                            <li><a href="#">Return & Exchanges</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                                    <div className="footer__widget">
                                        <h6>NewLetter</h6>
                                        <div className="footer__newslatter">
                                            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                            <form action="#">
                                                <input type="text" placeholder="Your email" />
                                                <button type="submit"><span className="icon_mail_alt"></span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="footer__copyright__text">
                                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                        <p>Copyright ©
                                            <script>
                                                document.write(new Date().getFullYear());
                                            </script>2020
                                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        </p>
                                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- Footer Section End --> */}

                    {/* <!-- Search Begin --> */}
                    <div className="search-model">
                        <div className="h-100 d-flex align-items-center justify-content-center">
                            <div className="search-close-switch">+</div>
                            <form className="search-model-form">
                                <input type="text" id="search-input" placeholder="Search here....." />
                            </form>
                        </div>
                    </div>
                    {/* <!-- Search End --> */}

                    {/* <!-- Js Plugins --> */}
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
            </html>
        </div>
    )
}

export default Catshow;