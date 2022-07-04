import { BACKGROUND } from "../../../../shared/assets/images";
import { Link } from "react-router-dom"
function HomeOffer() {
    return (
        <section className="container-plugin mt-5 pt-5">
            <div className="home__offer">
                <h2 className="mb-5 title">Hot Offers</h2>
                <div className="row row-cols-lg-2 row-cols-1 g-4">
                    <div className="col">
                        <Link to="/shop" className="home__offer-child">
                            <div className="home__offer-background" style={{ backgroundImage: `url(${BACKGROUND.fish})` }}></div>
                            <div className="home__offer-content">
                                <h4 className="home__offer-content-title">Best Cuisine from the <br className="d-md-block d-none"/> sea of America</h4>
                                <small className="home__offer-content-text">Premium seafood available everyday!</small>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/shop" className="home__offer-child">
                            <div className="home__offer-background" style={{ backgroundImage: `url(${BACKGROUND.vegetable})` }}></div>
                            <div className="home__offer-content">
                                <h4 className="home__offer-content-title fresh">Fresh vegetable &<br/> Fruit basket</h4>
                                <small className="home__offer-content-text fresh">Fresh Packed to order</small>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeOffer;