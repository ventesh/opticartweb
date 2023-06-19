import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { varibles } from "../API/variable";
import { Link } from "react-router-dom";

export class Shop extends Component {

    constructor(props){
        super(props);

        this.state = {
            products: [],
            cats: []
        }
    }

    refreshlist(){
        fetch(varibles.API_URL + "ProductTbls")
        .then(responce => responce.json())
        .then(data => {
            this.setState({ products: data })
        })
    }

    catrefreshlist(){
        fetch(varibles.API_URL + "categoryTbls")
        .then(responce=>responce.json())
        .then(data => {
            this.setState({ cats: data })
        })
    }

    componentDidMount(){
        this.refreshlist();
        this.catrefreshlist();
    }



    render() {

        const {
            products,
            cats
        } = this.state;

        return (
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
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-3">
                                    <div className="header__logo">
                                        <a href="./index.html"><img src="/assets/img/opti.jpg" height="150px" width="300px" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <nav className="header__menu mobile-menu">
                                        <ul>
                                            <li className="active"><NavLink to="/">Home</NavLink></li>
                                            <li><NavLink to="/shop"></NavLink></li>
                                            <li><a href="#">Pages</a>
                                                <ul className="dropdown">
                                                    <li><NavLink to="/about">About Us</NavLink></li>
                                                    <li><NavLink to="/detail">Shop Details</NavLink></li>
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
                                <div className="col-lg-3 col-md-3">
                                    <div className="header__nav__option">
                                        <a href="#" className="search-switch"><img src="/assets/img/icon/search.png" alt="" /></a>
                                        <a href="#"><img src="/assets/img/icon/heart.png" alt="" /></a>
                                        <a href="#"><img src="/assets/img/icon/cart.png" alt="" /> <span>0</span></a>
                                        <div className="price">$0.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="canvas__open"><i className="fa fa-bars"></i></div>
                        </div>
                    </header>
                    {/* <!-- Header Section End --> */}

                    {/* <!-- Hero Section Begin --> */}
                    <section className="hero">
                        <div className="hero__slider owl-carousel" >
                            <div className="hero__items set-bg" dataset-bg="/assets/img/hero/hero-1.jpg">
                                <div><img src="/assets/img/hero/hero-1.jpg" /></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-7 col-md-8">
                                            <div className="hero__text">
                                                <h6>Summer Collection</h6>
                                                <h2>Fall - Winter Collections 2030</h2>
                                                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                                    commitment to exceptional quality.</p>
                                                <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                                <div className="hero__social">
                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__items set-bg" data-setbg="/assets/img/hero/hero-2.jpg"><img src="/assets/img/hero/hero-2.jpg" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-7 col-md-8">
                                            <div className="hero__text">
                                                <h6>Summer Collection</h6>
                                                <h2>Fall - Winter Collections 2030</h2>
                                                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                                    commitment to exceptional quality.</p>
                                                <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                                <div className="hero__social">
                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Hero Section End --> */}
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
                                                    {cats.map(ct=> 
                                                        <div className="card-body" key={ct.categoryId}>
                                                            <div className="shop__sidebar__categories">
                                                                <ul className="nice-scroll">
                                                                    {/* <li><a href="#"></a></li>*/}
                                                                    <h2>{ct.categoryname}</h2>
                                                                    <img src={"/assets/img" + ct.image} />
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        )}
                                                    </div>
                                                    
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="shop__sidebar__brand">
                                                                <ul>
                                                                    <li><a href="#">Louis Vuitton</a></li>
                                                                    <li><a href="#">Chanel</a></li>
                                                                    <li><a href="#">Hermes</a></li>
                                                                    <li><a href="#">Gucci</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                                                    </div>
                                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="shop__sidebar__price">
                                                                <ul>
                                                                    <li><a href="#">$0.00 - $50.00</a></li>
                                                                    <li><a href="#">$50.00 - $100.00</a></li>
                                                                    <li><a href="#">$100.00 - $150.00</a></li>
                                                                    <li><a href="#">$150.00 - $200.00</a></li>
                                                                    <li><a href="#">$200.00 - $250.00</a></li>
                                                                    <li><a href="#">250.00+</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                                                    </div>
                                                    <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="shop__sidebar__size">
                                                                <label for="xs">xs
                                                                    <input type="radio" id="xs" />
                                                                </label>
                                                                <label for="sm">s
                                                                    <input type="radio" id="sm" />
                                                                </label>
                                                                <label for="md">m
                                                                    <input type="radio" id="md" />
                                                                </label>
                                                                <label for="xl">xl
                                                                    <input type="radio" id="xl" />
                                                                </label>
                                                                <label for="2xl">2xl
                                                                    <input type="radio" id="2xl" />
                                                                </label>
                                                                <label for="xxl">xxl
                                                                    <input type="radio" id="xxl" />
                                                                </label>
                                                                <label for="3xl">3xl
                                                                    <input type="radio" id="3xl" />
                                                                </label>
                                                                <label for="4xl">4xl
                                                                    <input type="radio" id="4xl" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                                    </div>
                                                    <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="shop__sidebar__color">
                                                                <label className="c-1" for="sp-1">
                                                                    <input type="radio" id="sp-1" />
                                                                </label>
                                                                <label className="c-2" for="sp-2">
                                                                    <input type="radio" id="sp-2" />
                                                                </label>
                                                                <label className="c-3" for="sp-3">
                                                                    <input type="radio" id="sp-3" />
                                                                </label>
                                                                <label className="c-4" for="sp-4">
                                                                    <input type="radio" id="sp-4" />
                                                                </label>
                                                                <label className="c-5" for="sp-5">
                                                                    <input type="radio" id="sp-5" />
                                                                </label>
                                                                <label className="c-6" for="sp-6">
                                                                    <input type="radio" id="sp-6" />
                                                                </label>
                                                                <label className="c-7" for="sp-7">
                                                                    <input type="radio" id="sp-7" />
                                                                </label>
                                                                <label className="c-8" for="sp-8">
                                                                    <input type="radio" id="sp-8" />
                                                                </label>
                                                                <label className="c-9" for="sp-9">
                                                                    <input type="radio" id="sp-9" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                                    </div>
                                                    <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="shop__sidebar__tags">
                                                                <a href="#">Product</a>
                                                                <a href="#">Bags</a>
                                                                <a href="#">Shoes</a>
                                                                <a href="#">Fashio</a>
                                                                <a href="#">Clothing</a>
                                                                <a href="#">Hats</a>
                                                                <a href="#">Accessories</a>
                                                            </div>
                                                        </div>
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
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="product__pagination">
                                                <a className="active" href="#">1</a>
                                                <a href="#">2</a>
                                                <a href="#">3</a>
                                                <span>...</span>
                                                <a href="#">21</a>
                                            </div>
                                        </div>
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
        )
    }
}
