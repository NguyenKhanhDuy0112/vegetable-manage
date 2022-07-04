import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductSeller from "../../../../shared/components/ProductSeller/ProductSeller";
import products from "../../../../shared/public/products";
function HomeSaleRated() {
    const [data, setData] = useState([])

    useEffect(() => setData(products), [])

    return (
        <>
            <div className="container-plugin mb-5 pb-5">
                <div className="home__seller">
                    <div className="row g-4 row-cols-1 row-cols-lg-3">
                        <div className="col">
                            <h2 className="title mb-4">Best Seller</h2>
                            <ul className="m-0 p-0 list-unstyled p-4 home__seller-list">
                                {data.length > 0 && data.map((product, index) => {
                                    return (index > 10 && index < 15 &&
                                        <li key = {product.id} className="border-bottom p-3">
                                            <ProductSeller
                                                img={product.imgs[0]}
                                                title={product.title}
                                                priceCurrent={product.priceCurrent}
                                                priceOld={product.priceOld}
                                                stars={product.stars}
                                            />
                                        </li>
                                    )
                                })}
                                <li className="pt-4 px-4 pb-2">
                                    <Link to="/shop" className="home__seller-link text-center d-block">Shop All Products</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col">
                            <h2 className="title mb-4">Top Rated</h2>
                            <ul className="m-0 p-0 list-unstyled p-4 home__seller-list">
                                {data.length > 0 && data.map((product, index) => {
                                    return (index > 20 && index < 25 &&
                                        <li key={product.id} className="border-bottom p-3">
                                            <ProductSeller
                                                img={product.imgs[0]}
                                                title={product.title}
                                                priceCurrent={product.priceCurrent}
                                                priceOld={product.priceOld}
                                                stars={product.stars}
                                            />
                                        </li>
                                    )
                                })}
                                <li className="pt-4 px-4 pb-2">
                                    <Link to="/shop" className="home__seller-link text-center d-block">Shop All Products</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="col">
                            <div className="row g-4">
                                <div className="col-12">
                                    <Link to="/shop" className="home__banner-sale position-relative d-block">
                                        <div className="home__banner-sale-vegetable" style={{ height: "340px", backgroundImage: `url(https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_img7.jpg)` }}></div>
                                        <div className="home__banner-sale-content d-flex justify-content-start align-items-center p-50 text-start">
                                            <div>
                                                <h2 className="home__banner-sale-content-title mb-2">
                                                    Keto Dietat LowestPrice
                                                </h2>
                                                <p className="home__banner-sale-content-heading lowercase text-start mb-5">Fresh Packed to order</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12">
                                    <Link to="/shop" className="home__banner-sale position-relative d-block">
                                        <div className="home__banner-sale-vegetable" style={{ height: "340px", backgroundImage: `url(https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_img8.jpg)` }}></div>
                                        <div className="home__banner-sale-content d-flex justify-content-start align-items-center p-50 text-start">
                                            <div>
                                                <h2 className="home__banner-sale-content-title mb-2">
                                                    $15.5 Off<br /> Special Flavour
                                                </h2>
                                                <p className="home__banner-sale-content-heading lowercase text-start mb-5">On All Weekend Sales</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSaleRated;