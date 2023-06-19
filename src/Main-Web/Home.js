import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { varibles } from "../API/variable";
import { Link } from "react-router-dom";

export class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            product: [],
            cats: [],
            loggedusernm: sessionStorage.getItem("user-info")
        }
    }

    logout() {

        if (this.loggedusernm == null) {
            sessionStorage.removeItem("user-info")
        }
        else {
            sessionStorage.removeItem("user-info")
        }

    }

    refreshlist() {
        fetch(varibles.API_URL + 'ProductTbls')
            .then(responce => responce.json())
            .then(data => {
                this.setState({ product: data })
            })
    }

    catelist() {
        fetch(varibles.API_URL + 'CategoryTbls')
            .then(res => res.json())
            .then(datas => {
                this.setState({ cats: datas })
            })
    }

    componentDidMount() {
        this.refreshlist();
        this.catelist();
    }

    render() {

        const {
            product,
            loggedusernm,
            logingout,
            cats
        } = this.state;

        return (
            <html lang="en">
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

                    <title>React App</title>

                    {/* <!-- Js Plugins --> */}

                </head>
                <body>

                    <div>
                        {/* // <!-- Page Preloder --> */}
                        {/* <div id="preloder">
                        <div class="loader"></div>
                    </div>
                 */}
                        {/* // <!-- Offcanvas Menu Begin --> */}
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
                                                <div class="header__top__links">
                                                    <NavLink to="/login" >Sign In</NavLink>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <a>Welcome : {loggedusernm}</a>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <button style={{ "border": "none", "backgroundColor": "black", "color": "white" }} >Logout</button>
                                                    {/* <a href="#">Sign in</a> */}
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
                                                <li><a href="#">Pages</a>
                                                    <ul class="dropdown">
                                                        <li><NavLink to="/about">About Us</NavLink></li>
                                                        <li><NavLink to="/detail">Shop Detaill</NavLink></li>
                                                        <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                                        <li><a href="./checkout.html">Check Out</a></li>
                                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="./blog.html">Blog</a></li>
                                                <li><NavLink to="/contact">Contacts</NavLink></li>
                                                {/* <li><a href="./contact.html">Contacts</a></li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                    <div class="col-lg-3 col-md-3">
                                        <div class="header__nav__option">
                                            <a href="#" class="search-switch"><img src="/assets/img/icon/search.png" alt="" /></a>
                                            <a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a>
                                            <a href="#"><img src="/assets/img/icon/cart.png" alt="" /> <span>0</span></a>
                                            <div class="price">$0.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="canvas__open"><i class="fa fa-bars"></i></div>
                            </div>
                        </header>
                        {/* <!-- Header Section End --> */}

                        {/* <!-- Hero Section Begin --> */}
                        <section class="hero">
                            <div class="hero__slider owl-carousel" >
                                <div class="hero__items set-bg" dataset-bg="/assets/img/hero/hero-1.jpg">
                                    <div><img src="/assets/img/hero/hero-1.jpg" /></div>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-5 col-lg-7 col-md-8">
                                                <div class="hero__text">
                                                    <h6>Summer Collection</h6>
                                                    <h2>Fall - Winter Collections 2030</h2>
                                                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                                        commitment to exceptional quality.</p>
                                                    <a href="#" class="primary-btn">Shop now <span class="arrow_right"></span></a>
                                                    <div class="hero__social">
                                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero__items set-bg" data-setbg="/assets/img/hero/hero-2.jpg"><img src="/assets/img/hero/hero-2.jpg" />
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-5 col-lg-7 col-md-8">
                                                <div class="hero__text">
                                                    <h6>Summer Collection</h6>
                                                    <h2>Fall - Winter Collections 2030</h2>
                                                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                                        commitment to exceptional quality.</p>
                                                    <a href="#" class="primary-btn">Shop now <span class="arrow_right"></span></a>
                                                    <div class="hero__social">
                                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Hero Section End --> */}

                        {/* <!-- Banner Section Begin --> */}
                        <section class="banner spad">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-7 offset-lg-4">
                                        <div class="banner__item">
                                            <div class="banner__item__pic">
                                                <img src="/assets/img/upload/images/C1/cat-01.jpg" width="600px" alt="" />
                                            </div>
                                            <div class="banner__item__text">
                                                <a>Sunglasses</a>
                                                {/* <a href="#">Shop now</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="banner__item banner__item--middle">
                                            <div class="banner__item__pic">
                                                <img src="/assets/img/upload/images/C2/cat-02.jpg" alt="" />
                                            </div>
                                            <div class="banner__item__text">
                                                <a>UV Glasses</a>
                                                {/* <a href="#">Shop now</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="banner__item banner__item--last">
                                            <div class="banner__item__pic">
                                                <img src="/assets/img/upload/images/C4/cat-04.jpg" width="600px" alt="" />
                                            </div>
                                            <div class="banner__item__text">
                                                <a>Goggles</a>
                                                {/* <a href="#">Shop now</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Banner Section End --> */}

                        {/* <!-- Product Section Begin --> */}
                        <div className="text-center">
                            <h2 className="active">
                                <span><b>All Products</b></span>
                            </h2>
                        </div>
                        <br />
                        <br />
                        <section class="product spad">

                            <div class="container"  >
                                <div class="row product__filter" >
                                    {product.map(pr =>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 " key={pr.productId}>
                                            <div class="product__item">
                                                <div class="product__item__pic set-bg" data-setbg="/assets/img/product/product-1.jpg">
                                                    <div><Link to={`/detail/${pr.productId}`}><img src={"/assets/img" + pr.productImage} height="250px" width="300px" /></Link></div>
                                                    <span class="label">New</span>
                                                    <ul class="product__hover">
                                                        <li><a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a></li>
                                                        <li><a href="#"><img src="/assets/img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                                        <li><a href="#"><img src="/assets/img/icon/search.png" alt="" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__item__text">
                                                    <h6>{pr.productName}</h6>
                                                    
                                                    <a href={pr.productId} className="add-cart">+ Add To Cart</a>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <h5>{pr.productPrice}</h5>
                                                    <div class="product__color__select">
                                                        <label for="pc-1">
                                                            <input type="radio" id="pc-1" />
                                                        </label>
                                                        <label class="active black" for="pc-2">
                                                            <input type="radio" id="pc-2" />
                                                        </label>
                                                        <label class="grey" for="pc-3">
                                                            <input type="radio" id="pc-3" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/*  */}
                                </div>
                            </div>
                        </section>
                        {/* <!-- Product Section End --> */}

                        {/* <!-- Category Section Begin --> */}
                        <div className="text-center">
                            <h2 className="active">
                                <span><b>All Categories</b></span>
                            </h2>
                        </div>
                        <br />
                        <br />
                        <section class="product spad">

                            <div class="container"  >
                                <div class="row product__filter" >
                                    {cats.map(ct =>
                                        <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 " key={ct.categoryId}>
                                            <div class="product__item">
                                                <div class="product__item__pic set-bg" data-setbg="/assets/img/product/product-1.jpg">
                                                    <div><img src={"/assets/img" + ct.image} /> 
                                                        <div className="banner_item">
                                                            <div class="banner__item__text">
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>{ct.categoryname}</a>                                                            
                                                            </div>                                                        
                                                        </div>                                                        
                                                    </div>
                                                    <div className="product__item__text"><a href="#" class="add-cart">+ Shop Now</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/*  */}
                                </div>
                            </div>
                        </section>
                        {/* <!-- Category Section End --> */}

                        {/* <!-- Categories Section Begin --> */}
                        <section class="categories spad">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="categories__text">
                                            <h2><span></span>Sun Glasses <br /> <span>Goggles</span> <br /> Diamond </h2>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="categories__hot__deal">
                                            <img src="/assets/img/upload/images/C1/cat-01.jpg" alt="" />
                                            <div class="hot__deal__sticker">
                                                <span>Sale Of</span>
                                                <h5>$29.99</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 offset-lg-1">
                                        <div class="categories__deal__countdown">
                                            <span>Deal Of The Week</span>
                                            <h2>Round Shape Brown Sun Glasses</h2>
                                            <div class="categories__deal__countdown__timer" id="countdown">
                                                <div class="cd-item">
                                                    <span>3</span>
                                                    <p>Days</p>
                                                </div>
                                                <div class="cd-item">
                                                    <span>1</span>
                                                    <p>Hours</p>
                                                </div>
                                                <div class="cd-item">
                                                    <span>50</span>
                                                    <p>Minutes</p>
                                                </div>
                                                <div class="cd-item">
                                                    <span>18</span>
                                                    <p>Seconds</p>
                                                </div>
                                            </div>
                                            <a href="#" class="primary-btn">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Categories Section End --> */}

                        {/* <!-- Instagram Section Begin --> */}
                        <section class="instagram spad">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="instagram__pic">
                                            <div className="instagram__pic__item set-bg" data-setbg="/assets/img/instagram/instagram-1.jpg"><img src="/assets/img/instagram/instagram-1.jpg" /></div>
                                            <div class="instagram__pic__item set-bg" data-setbg="/assets/img/instagram/instagram-2.jpg"><img src="/assets/img/instagram/instagram-2.jpg" /></div>
                                            <div class="instagram__pic__item set-bg" data-setbg="/assets/img/instagram/instagram-3.jpg"><img src="/assets/img/instagram/instagram-3.jpg" /></div>
                                            <div class="instagram__pic__item set-bg" data-setbg="/assets/img/instagram/instagram-4.jpg"><img src="/assets/img/instagram/instagram-4.jpg" /></div>
                                            <div class="instagram__pic__item set-bg" data-setbg="/assets/img/instagram/instagram-5.jpg"><img src="/assets/img/instagram/instagram-5.jpg" /></div>
                                            <div class="instagram__pic__item set-bg" data-setbg="/assets/img/instagram/instagram-6.jpg"><img src="/assets/img/instagram/instagram-6.jpg" /></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="instagram__text">
                                            <h2>Instagram</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                            <h3>#OPticart_Fashion</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Instagram Section End --> */}

                        {/* <!-- Latest Blog Section Begin --> */}
                        <section class="latest spad">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="section-title">
                                            <span>Latest News</span>
                                            <h2>Fashion New Trends</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-sm-6">
                                        <div class="blog__item">
                                            <div class="blog__item__pic set-bg" data-setbg="/assets/img/blog/blog-1.jpg"></div>
                                            <div><img src="/assets/img/upload/images/C2/cat-02.jpg" height="270px" /></div>
                                            <br />
                                            <div class="blog__item__text">
                                                <span><img src="/assets/img/icon/calendar.png" alt="" /> 16 February 2020</span>
                                                <h5>What Curling Irons Are The Best Ones</h5>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6">
                                        <div class="blog__item">
                                            <div class="blog__item__pic set-bg" data-setbg="/assets/img/blog/blog-2.jpg"></div>
                                            <div><img src="/assets/img/blog/blog-2.jpg" /></div>
                                            <br />
                                            <div class="blog__item__text">
                                                <span><img src="/assets/img/icon/calendar.png" alt="" /> 21 February 2020</span>
                                                <h5>Eternity Bands Do Last Forever</h5>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6">
                                        <div class="blog__item">
                                            <div class="blog__item__pic set-bg" data-setbg="/assets/img/blog/blog-3.jpg"></div>
                                            <div><img src="/assets/img/blog/blog-3.jpg" /></div>
                                            <br />
                                            <div class="blog__item__text">
                                                <span><img src="/assets/img/icon/calendar.png" alt="" /> 28 February 2020</span>
                                                <h5>The Health Benefits Of Sunglasses</h5>
                                                <a href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Latest Blog Section End --> */}

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
                    </div>

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
        );
    }
}