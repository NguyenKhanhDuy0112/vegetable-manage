import { Link } from "react-router-dom";
import { BACKGROUND } from "../../../../shared/assets/images";

function HomeBanner() {
    return (
        <article className="home__banner position-relative">
            <img src={BACKGROUND.cartVegetable} alt="" className="home__banner-cart" />
            <img src={BACKGROUND.decorate} alt="" className="home__banner-decorate" />
            <img src={BACKGROUND.label100} alt="" className="home__banner-label100" />
            <div className="home__banner-content">
                <div className="container">
                    <h1 className="home__banner-content-title">
                        Eat Organic<br /> & Healthy Good
                    </h1>
                    <p className="home__banner-content-text">
                        Eat local, Box contents change weekly to<br /> reflect the season's best
                    </p>
                    <div className="d-flex justify-content-lg-start justify-content-center">
                        <Link to="/shop" className="home__banner-content-btn">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default HomeBanner;