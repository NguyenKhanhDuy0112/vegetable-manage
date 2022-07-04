import { useState, useRef, useEffect } from "react"

import ProductItem from "../../../../shared/components/ProductItem/ProductItem";

import SwiperCore, { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import products from "../../../../shared/public/products";


SwiperCore.use([Autoplay])

function HomeMeatSeafood() {
    const [data, setData] = useState([])
    const [tabBtn, setTabBtn] = useState("All Product")
    const tabs = useRef(["All Product", "Organic Produce", "Fresh Vegetable", "Fresh Fruit"])

    useEffect(() => {
        setData(products)
    }, [])

    const config = {
        spaceBetween: 20,
        autoplay: {
            delay: 50000,
            disableOnInteraction: false
        },

        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1022: {
                slidesPerView: 3,
                spaceBetween: 10
            },

            // when window width is >= 640px
            1300: {
                slidesPerView: 5,
                spaceBetween: 25
            },
        },

    }
    return (
        <div className="container-plugin mt-5 pt-5 pb-2">
            <div className="row g-3 mb-5">
                <div className="col">
                    <h2 className="title">Meat & Seafood</h2>
                </div>
                <div className="col-xl-auto col-12">
                    <div className="row g-3">
                        {tabs.current.map(tab => {
                            return (
                                <div key={tab} className="col-auto" onClick={() => setTabBtn(tab)}>
                                    <button className={`home__product-tab ${tabBtn === tab ? "active" : ""}`}>{tab}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


            <div className="row">
                <Swiper {...config} >
                    {data.length > 0 && data.map((product, index) => {
                        return (index < 10 &&
                            <SwiperSlide style={{ paddingBottom: "50px" }} key={index}>
                                <ProductItem
                                    imgs={product.imgs}
                                    unit={product.unit}
                                    title={product.title}
                                    category={product.category}
                                    quantity={product.quantity}
                                    sku={product.sku}
                                    discount={product.discount}
                                    priceOld={product.priceOld}
                                    priceCurrent={product.priceCurrent}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

        </div>
    );
}

export default HomeMeatSeafood;