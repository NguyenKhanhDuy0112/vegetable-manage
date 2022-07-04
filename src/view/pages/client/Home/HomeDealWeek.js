import { useEffect, useState } from "react";
import ProductSeller from "../../../../shared/components/ProductSeller/ProductSeller";
import Time from "../../../../shared/components/Time/Time";
import products from "../../../../shared/public/products";

function HomeDealWeek() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(products)
    }, [])

    return (
        <>
            <div className="container-plugin my-5 pt-4">
                <div className="home__dealWeek">
                    <div className="row g-3 justify-content-center align-items-center">
                        <div className="col-lg-auto col-12">
                            <h2 className="title mb-0">Best deal of the week!</h2>
                        </div>
                        <div className="col-lg-auto col-12">
                            <Time days={5} hours={2} minutes={4} seconds={10} />
                        </div>
                    </div>
                    <div className="home__dealWeek-content mt-4">
                        <div className="row">
                            {data.length > 0 && data.map((product, index) => {
                                return (product.discount > 0 &&
                                    <div key={product.id} className="col-lg-3 home__dealWeek-b-bottom home__dealWeek-b-right col-md-6 col-12 p-4">
                                        <ProductSeller
                                            noneBtn
                                            unit = {product.unit}
                                            discount={product.discount}
                                            img={product.imgs[0]}
                                            title={product.title}
                                            priceCurrent={product.priceCurrent}
                                            priceOld={product.priceOld}
                                            stars={product.stars}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeDealWeek;