import { LOGO } from "../../../shared/assets/images";

function FooterCenter() {
    return (
        <div className="footer__center py-5">
            <div className="row g-5 justify-content-between">
                <div className="col-8 order-lg-first order-last">
                    <div className="row g-5 row-cols-lg-4 row-cols-md-2 row-cols-1">
                        <div className="col">
                            <h5 className="footer__center-title mb-3">Information</h5>
                            <ul className="footer__center-list list-unstyled">
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">About us</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Blog</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Check out</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Contact</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="footer__center-title mb-3">My Account</h5>
                            <ul className="footer__center-list list-unstyled">
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">My Account</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Contact</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Shopping cart</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Shop</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="footer__center-title mb-3">Categories</h5>
                            <ul className="footer__center-list list-unstyled">
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Fruit & Vegetable</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Dairy Products</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Package Foods</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Beverage</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Health & Wellness</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="footer__center-title mb-3">Style Advisor</h5>
                            <ul className="footer__center-list list-unstyled">
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Your Account</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Information</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Addresses</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Discount</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Orders History</a>
                                </li>
                                <li className="footer__center-list-item">
                                    <a href="/#" className="footer__center-list-item-link py-1">Orders Tracking</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-auto text-end order-lg-last order-first">
                    <div className="mb-4 pb-1 text-lg-end text-start">
                        <img className="footer__center-logo" src={LOGO.logoFooter} alt="" />
                    </div>
                    <p className="footer__center-email">Support@ecoliveorganicstore.com</p>
                    <p className="footer__center-date mb-1">Monday – Saturday: 8:00 am – 4:00pm</p>
                    <p className="footer__center-date mb-0 text-lg-end text-start">Sunday: 9:00 am – 5:00pm</p>
                </div>
            </div>
        </div>
    );
}

export default FooterCenter;