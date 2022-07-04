import { Link } from "react-router-dom";

function AboutIntro() {
    return (
        <article className="container-plugin">
            <div className="row align-items-center">
                <div className="col-lg-7 col-12">
                    <div className="position-relative">
                        <img className="about__intro-img" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h6_image1.png" alt="" />
                        <img className="about__intro-img-background position-absolute top-0 bottom-0 end-0 start-0" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h6_deco.png" alt="" />
                    </div>
                </div>
                <div className="col-lg col-12">
                    <div className="about__intro text-lg-start text-center">
                        <p className="about__intro-title mb-0">We supply hight quality organic product</p>
                        <h1 className="about__intro-heading my-4">A shop for good people by good people</h1>
                        <p className="about__intro-text my-4">
                            Buy natural, sustainable and chemicalfree products from local sellers across the country.
                        </p>
                        <p className="about__intro-text mb-4">
                            We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness. We are a democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.
                        </p>
                        <div className="d-flex justify-content-lg-start justify-content-center">
                            <Link to="/shop" className="home__banner-content-btn">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AboutIntro;