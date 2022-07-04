import Banner from "../../../../shared/components/Banner"
import { MdOutlinePlace } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"
import { IoCalendarClearOutline } from "react-icons/io5"
import { useEffect } from "react"
function Contact() {
    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    return (
        <section className="position-relative">
            <Banner title="Contact" />
            <div className="contact__background position-absolute top-0 end-0 start-0 bottom-0" style={{backgroundImage: "url(https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/11/contact_bg1.jpg)" }}></div>
            <div className="container-plugin">
                <div className="contact__content">
                    <div className="row g-5">
                        <div className="col-lg-6 col-12">
                            <div className="row g-5">
                                <div className="col-12">
                                    <h2 className="contact__title">We Love to Hear From You</h2>
                                    <p className="blogDetail__content-des">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">London</h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon"><MdOutlinePlace /></span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    Fifth Avenue 5501,<br />
                                                    Broadway, New York
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">Paris</h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon"><MdOutlinePlace /></span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    Fifth Avenue 5501,<br />
                                                    Broadway, New York
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">Contact Information</h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon">
                                                    <AiOutlineMail />
                                                </span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    organicvegan@example.com<br />
                                                    info@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="contact__content-address">
                                        <h6 className="fw-bold contact__content-adress-title">Our Business Hours</h6>
                                        <div className="row">
                                            <div className="col-auto">
                                                <span className="contact__content-address-icon">
                                                    <IoCalendarClearOutline />
                                                </span>
                                            </div>
                                            <div className="col">
                                                <p className="blogDetail__content-des mb-0">
                                                    Monday - Friday: 8am - 4pm<br/>
                                                    Saturday - Sunday: 9am - 5pm
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact__message">
                                <h2 className="contact__title mb-4">Leave A Message</h2>
                                <input className="contact__message-input d-block w-100 mb-3" placeholder="Your Name"/>
                                <input type="email" className="contact__message-input d-block w-100 mb-3" placeholder="Email"/>
                                <input className="contact__message-input d-block w-100 mb-3" placeholder="Subject"/>
                                <textarea className="contact__message-input d-block w-100 mb-3" placeholder="Message" rows="5"></textarea>
                                <div className="contact__message-submit">
                                    <button className="contact__message-submit-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;