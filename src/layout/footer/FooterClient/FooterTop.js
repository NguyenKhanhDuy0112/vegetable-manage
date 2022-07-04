import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { PAYMENT } from "../../../shared/assets/images";

function FooterTop() {
    return (
        <div className="footer__header py-5">
            <div className="row justify-content-between g-5">
                <div className="col-lg-4 col-md-12 text-lg-start text-md-center text-start">
                    <h6 className="footer__header-title mb-4">Newsletter</h6>
                    <p className="footer__header-text mb-4">
                        Get now free <span className="color-primary">20%</span> discount for all products on your first order!
                    </p>
                    <div className="row">
                        <div className="col-8">
                            <input className="footer__header-input w-100" placeholder="Email address" />
                        </div>
                        <div className="col">
                            <button className="footer__header-btn w-100">Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <h6 className="footer__header-title mb-4">Store Location</h6>
                    <p className="mb-4 footer__header-text">
                        9066 Green Lake Drive Chevy<br />
                        Chase, MD 20815
                    </p>
                    <div className="row" style={{ height: "50px" }}>
                        <div className="col">
                            <a href="telto:0798132664" className="d-flex align-items-center footer__header-title footer__header-tel">
                                <span className="footer__header-tel-child py-1 px-4">
                                    <span className="me-2"><FiPhoneCall /></span> (1800)-88-66-911
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-auto text-md-end text-start">
                    <h6 className="footer__header-title mb-4">Follow us</h6>
                    <div className="mb-4 footer__header-text d-flex justify-content-lg-end justify-content-start">
                        <a href="/#" className="footer__header-icon me-2">
                            <GrFacebookOption />
                        </a>
                        <a href="/#" className="footer__header-icon me-2">
                            <AiOutlineTwitter />
                        </a>
                        <a href="/#" className="footer__header-icon">
                            <AiOutlineInstagram />
                        </a>
                    </div>
                    <h6 className="footer__header-title mb-4">Accept payment</h6>
                    <div>
                        <a href="/#">
                            <img className="img-fluid" src={PAYMENT.paymentFooter} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;