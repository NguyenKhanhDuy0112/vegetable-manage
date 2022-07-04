import { useEffect, useState } from "react";
import ProductItem from "../../../../shared/components/ProductItem/ProductItem"
import SwiperCore, { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import products from "../../../../shared/public/products";

SwiperCore.use([Autoplay])

function ProductDetailBottom() {
    const [data, setData] = useState([])

    useEffect(() => setData(products), [])

    const config = {
        spaceBetween: 20,
        autoplay: {
            delay: 2000,
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
        <>
            <article className="container-plugin mb-5 pb-4">
                <h2 className="text-heading mb-5 fw-bold">Related products</h2>

                <Swiper {...config} >
                    {data.length > 0 && data.map((product, index) => {
                        return (index > 20 && index <  30 &&
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
            </article>

        </>
    );
}

export default ProductDetailBottom;