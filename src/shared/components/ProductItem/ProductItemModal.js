import { MdOutlineShoppingBag } from "react-icons/md";
import ModalPlugin from "../ModalPlugin/ModalPlugin";
import Star from "../Star/Star";
import { Link } from "react-router-dom"

import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from "react-redux";


SwiperCore.use([Autoplay, Navigation])

function ProductItemModal({ onShow, handleClose }) {

    const product = useSelector(state => state.modalProduct.product)

    const config = {
        loop: true,
        module: [Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false

        },
        navigation: true,
    }

    return (
        <ModalPlugin
            show={onShow}
            onHide={handleClose}
            position="center"
        >

            <div className="d-flex justify-content-between productItem__modal g-lg-0 g-3">
                <div className="productItem__modal-img d-flex align-items-center">
                    <Swiper {...config} >
                        {product.imgs && product.imgs.map((img, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="d-flex justify-content-lg-center">
                                        <img className="productItem__modal-img-child" src={img} alt="" />
                                    </div>
                                </SwiperSlide>
                            )
                        })}


                    </Swiper>

                </div>
                <div className="productItem__modal-content">
                    <h3 className="productItem__modal-content-title mb-2">{product.title && product.title}</h3>
                    <div className="d-flex align-items-center productItem__modal-rating mb-2">
                        <Star value={3} />
                        <small className="productItem__modal-content-rating-review ms-2">(5 customer review)</small>
                    </div>
                    <div className="productItem__modal-content-price d-flex">
                        {product.priceOld && product.priceOld > 0 &&
                            <p className="productItem__modal-content-price-old mb-0 me-2">
                                {`$${product.priceOld}`}
                            </p>
                        }
                        <p className="productItem__modal-content-price-current mb-0">
                            {product.priceCurrent && `$${product.priceCurrent}`}
                        </p>
                    </div>
                    <p className="productItem__modal-content-des py-3">
                        Est impedit hic eos dolor. Sed sit qui eos doloribus corrupti itaque. Consectetur dolores aut vitae sed nemo. Animi nihil voluptatem possimus et qui sequi est.
                    </p>
                    <div className="productItem__modal-content-cart d-flex align-items-center">
                        <input className="productItem__modal-content-cart-input me-3" />
                        <button className="productItem__modal-content-cart-btn">
                            <span className="fs-4 mb-1"><MdOutlineShoppingBag /></span> Add to cart
                        </button>
                    </div>
                    <p className="productItem__modal-content-sku mb-0">
                        SKU: synergistic-cotton-knife-71532233
                    </p>
                    <p className="productItem__modal-content-type mb-0">
                        Category: <Link className="productItem__modal-content-type-link" to="/shop">Allium</Link>
                    </p>

                </div>
            </div>
        </ModalPlugin>
    );
}

export default ProductItemModal;