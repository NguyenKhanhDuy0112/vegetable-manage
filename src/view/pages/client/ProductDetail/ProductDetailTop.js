import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri"
import { Link } from "react-router-dom";
import InputQuantity from "../../../../shared/components/inputField/InputQuantity";
import Star from "../../../../shared/components/Star/Star";
import ShopSideBar from "../Shop/ShopSideBar"
import ProductDetailCenter from "./ProductDetailCenter";

const imgs = ["https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/39.png",
    "https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/86.png",
    "https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/61.png",
    "https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/27-2.png"]

function ProductDetailTop() {
    const [imgCurrent, setImgCurrent] = useState(0)
    return (
        <article className="productDetail__top my-5">
            <div className="container-plugin">
                <div className="row g-5">
                    <div className="col-lg-6 col-12">
                        <div className="overflow-hidden border-2-circle-20">
                            <div className="productDetail__top-img d-flex" style={{ transform: `translateX(-${imgCurrent * 100}%)` }}>
                                {imgs.map((img, index) => <img key={index} className="productDetail__top-img-child" src={img} alt="" />)}
                            </div>
                        </div>
                        <div className="row mt-3">
                            {imgs.map((img, index) => {
                                return (
                                    <div key={index} className="col">
                                        <div
                                            className={`productDetail__top-img border-2-circle-20 cursor-pointer ${index === imgCurrent && "active"}`}
                                            onClick={() => setImgCurrent(index)}
                                        >
                                            <img
                                                className="productDetail__top-img-child"
                                                src={img} alt=""
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-lg col-12">
                        <div className="productDetail__top-content">
                            <h2 className="productDetail__top-content-title mb-2">
                                Small Leather Bench
                            </h2>
                            <div className="d-flex align-items-center mb-2">
                                <Star value={4} />
                                <small className="productItem__modal-content-rating-review ms-2">(5 Customer Reviews)</small>
                            </div>
                            <div className="productItem__modal-content-price d-flex">
                                <p className="productItem__modal-content-price-old mb-0 me-2">
                                    $15.25
                                </p>
                                <p className="productItem__modal-content-price-current mb-0">$10.25</p>
                            </div>
                            <p className="productDetail__top-content-des py-3">
                                Est impedit hic eos dolor. Sed sit qui eos doloribus corrupti itaque. Consectetur dolores aut vitae sed nemo. Animi nihil voluptatem possimus et qui sequi est.
                            </p>
                            <p className="productDetail__top-content-unit">
                                Unit: <span className="productDetail__top-content-unit-child">kg</span>
                            </p>
                            <div className="productDetail__top-content-cart py-4 d-lg-flex d-block">
                                <InputQuantity />
                                <button className="productDetail__top-content-cart-btn mt-lg-0 mt-2 ms-lg-3 m-0">
                                    <span className="productDetail__top-content-cart-btn-icon me-2">
                                        <RiShoppingBagLine />
                                    </span>
                                    Add to cart
                                </button>
                            </div>

                            <div className="productDetail__top-content-wishlist py-4">
                                <button className="productDetail__top-content-wishlist-btn">
                                    <span className="productDetail__top-content-wishlist-btn-icon me-3"><BsHeart /></span>
                                    Add to wishlist
                                </button>
                            </div>
                            <p className="productDetail__top-content-sku mb-1 pt-4">
                                SKU: <span className="text-dark">small-leather-bench-27541098</span>
                            </p>

                            <p className="productDetail__top-content-sku mb-0 pb-4">
                                Category:
                                <Link to="/shop" className="text-dark productDetail__top-content-sku-link">
                                    small-leather-bench-27541098
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProductDetailTop;