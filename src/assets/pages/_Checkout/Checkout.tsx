import Header from "../../components/_Header/Header";
import Navigation from "../../components/_Navigation/Navigation";
import SingUp from "../../components/_SingUp/SingUp";
import Footer from "../../components/_Footer/Footer";
import '../../styles/index.css'

const Checkout = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
             {/*BREADCRUMB*/}
            <div id="breadcrumb" className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="breadcrumb-header">Checkout</h3>
                            <ul className="breadcrumb-tree">
                                <li><a href="#">Home</a></li>
                                <li className="active">Checkout</li>
                            </ul>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /BREADCRUMB */}

            {/* SECTION */}
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">

                        <div className="col-md-7">
                            {/* Billing Details */}
                            <div className="billing-details">
                                <div className="section-title">
                                    <h3 className="title">Billing address</h3>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="first-name" placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="last-name" placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="email" name="email" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="address" placeholder="Address"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="city" placeholder="City"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="country" placeholder="Country"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="zip-code" placeholder="ZIP Code"/>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="tel" name="tel" placeholder="Telephone"/>
                                </div>
                                <div className="form-group">
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="create-account"/>
                                            <label htmlFor="create-account">
                                                <span></span>
                                                Create Account?
                                            </label>
                                            <div className="caption">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                                <input className="input" type="password" name="password" placeholder="Enter Your Password"/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Billing Details */}

                            {/* Shiping Details */}
                            <div className="shiping-details">
                                <div className="section-title">
                                    <h3 className="title">Shiping address</h3>
                                </div>
                                <div className="input-checkbox">
                                    <input type="checkbox" id="shiping-address"/>
                                        <label htmlFor="shiping-address">
                                            <span></span>
                                            Ship to a diffrent address?
                                        </label>
                                        <div className="caption">
                                            <div className="form-group">
                                                <input className="input" type="text" name="first-name" placeholder="First Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="input" type="text" name="last-name" placeholder="Last Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="input" type="email" name="email" placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="input" type="text" name="address" placeholder="Address"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="input" type="text" name="city" placeholder="City"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="input" type="text" name="country" placeholder="Country"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="input" type="text" name="zip-code" placeholder="ZIP Code"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="input" type="tel" name="tel" placeholder="Telephone"/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            {/* /Shiping Details */}

                            {/* Order notes */}
                            <div className="order-notes">
                                <textarea className="input" placeholder="Order Notes"></textarea>
                            </div>
                            {/* /Order notes */}
                        </div>

                        {/* Order Details */}
                        <div className="col-md-5 order-details">
                            <div className="section-title text-center">
                                <h3 className="title">Your Order</h3>
                            </div>
                            <div className="order-summary">
                                <div className="order-col">
                                    <div><strong>PRODUCT</strong></div>
                                    <div><strong>TOTAL</strong></div>
                                </div>
                                <div className="order-products">
                                    <div className="order-col">
                                        <div>1x Product Name Goes Here</div>
                                        <div>$980.00</div>
                                    </div>
                                    <div className="order-col">
                                        <div>2x Product Name Goes Here</div>
                                        <div>$980.00</div>
                                    </div>
                                </div>
                                <div className="order-col">
                                    <div>Shiping</div>
                                    <div><strong>FREE</strong></div>
                                </div>
                                <div className="order-col">
                                    <div><strong>TOTAL</strong></div>
                                    <div><strong className="order-total">$2940.00</strong></div>
                                </div>
                            </div>
                            <div className="payment-method">
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-1"/>
                                        <label htmlFor="payment-1">
                                            <span></span>
                                            Direct Bank Transfer
                                        </label>
                                        <div className="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                </div>
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-2"/>
                                        <label htmlFor="payment-2">
                                            <span></span>
                                            Cheque Payment
                                        </label>
                                        <div className="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                </div>
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-3"/>
                                        <label htmlFor="payment-3">
                                            <span></span>
                                            Paypal System
                                        </label>
                                        <div className="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" id="terms"/>
                                    <label htmlFor="terms">
                                        <span></span>
                                        I've read and accept the <a href="#">terms & conditions</a>
                                    </label>
                            </div>
                            <a href="#" className="primary-btn order-submit">Place order</a>
                        </div>
                        {/* /Order Details */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /SECTION */}

            {/* NEWSLETTER */}
            <div id="newsletter" className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="newsletter">
                                <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                                <form>
                                    <input className="input" type="email" placeholder="Enter Your Email"/>
                                        <button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
                                </form>
                                <ul className="newsletter-follow">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /NEWSLETTER */}
            <SingUp/>
            <Footer/>
        </div>
    );
};

export default Checkout;