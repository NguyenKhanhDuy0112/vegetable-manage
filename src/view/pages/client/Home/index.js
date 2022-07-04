import HomeProduct from "./HomeProduct"
import HomeBanner from "./HomeBanner";
import HomeIntro from "./HomeIntro";
import HomeOffer from "./HomeOffer";
import { BACKGROUND } from "../../../../shared/assets/images";
import { Link } from "react-router-dom";
import HomeMeatSeafood from "./HomeMeatSeafood";
import HomeDealWeek from "./HomeDealWeek";
import HomeCategory from "./HomeCategory";
import HomeSaleRated from "./HomeSaleRated";
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    
    return (
        <>
            <section className="home">
                <HomeBanner />
                <HomeIntro />
                <HomeOffer />
                <HomeProduct />
                <div className="container-plugin my-5">
                    <Link to="/shop" className="home__banner-sale position-relative d-block">
                        <div className="home__banner-sale-vegetable" style={{ backgroundImage: `url(${BACKGROUND.sale})` }}></div>
                        <div className="home__banner-sale-content d-flex justify-content-center align-items-center p-50">
                            <div>
                                <p className="home__banner-sale-content-heading">On All Weekend Sales</p>
                                <h1 className="home__banner-sale-content-title mb-3">
                                    Get Up to 15% Off Vegetables
                                </h1>
                                <p className="home__banner-sale-content-text mb-5">
                                    We supply high quality organic product
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div to="/shop" className="home__banner-content-btn">
                                        Shop Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <HomeMeatSeafood />
            <section className="container-plugin mt-2">
                <div className="row g-4">
                    <div className="col-lg-8 col-12">
                        <Link to="/shop" className="home__banner-sale position-relative d-block">
                            <div className="home__banner-sale-vegetable" style={{ height: "280px", backgroundImage: `url(https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_img4.jpg)` }}></div>
                            <div className="home__banner-sale-content justify-content-center align-items-center p-50">
                                <div>
                                    <h2 className="home__banner-sale-content-title mb-2 text-heading">
                                        Get Up to <span className="color-primary">15% Off</span> Vegetables
                                    </h2>
                                    <p className="home__banner-sale-content-heading mb-5 text-gray">
                                        Premium seafood available everyday!
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <div to="/shop" className="home__banner-content-btn">
                                            Shop Now
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Link to="/shop" className="home__banner-sale position-relative d-block">
                            <div className="home__banner-sale-vegetable" style={{ height: "280px", backgroundImage: `url(${BACKGROUND.everyFresh})` }}></div>
                            <div className="home__banner-sale-content justify-content-start align-items-center p-50 text-start">
                                <div>
                                    <h2 className="home__banner-sale-content-title mb-2">
                                        Everyday Fresh
                                    </h2>
                                    <p className="home__banner-sale-content-heading lowercase text-start mb-5">On All Weekend Sales</p>
                                    <div className="d-flex justify-content-start">
                                        <div to="/shop" className="home__banner-content-btn">
                                            Shop Now
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <HomeDealWeek />
            <HomeCategory />

            <section className="container-plugin my-5 pb-5 pt-4">
                <Link to="/shop" className="home__banner-sale position-relative d-block">
                    <div className="home__banner-sale-secure" style={{ height: "188px",backgroundImage: `url(https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_img6.jpg)` }}></div>
                    <div className="home__banner-sale-content d-flex justify-content-lg-between align-items-center p-50">
                        <div className="row w-100 d-flex justify-content-lg-between justify-content-center align-items-center">
                            <div className="col-lg">
                                <h3 className="home__banner-sale-content-title mb-2 text-heading">
                                    100% Secure delivery without contacting the courier
                                </h3>
                            </div>
                            <div className="col-lg-auto">
                                <div className="d-flex justify-content-center">
                                    <div to="/shop" className="home__banner-content-btn">
                                        Shop Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
            <HomeSaleRated/>
        </>
    );
}

export default Home;