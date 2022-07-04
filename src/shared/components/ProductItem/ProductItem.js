import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs"
import { AiOutlineEye } from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../modules/modalProductItem/modalProduct"

function ProductItem({ onShow, horizontal, viewOne, imgs, title, description, priceOld, priceCurrent, stars, numberReview, discount, quantity, unit,  sku, category}) {
    const dispatch = useDispatch()

    const handleShowModal = () => dispatch(showModal( {imgs, title, description, priceOld, priceCurrent, stars, numberReview, discount, quantity, unit, sku, category} ))
    

    return (
        <>
            <div 
                className={`productItem 
                    ${horizontal ? "d-flex align-items-center productItem__horizontal" : ""} 
                    ${!viewOne && "productItem__hover"}`
                }
             >
                <div className="position-relative">
                    <Link to="/shop" className="position-relative d-block">
                        <img 
                            style={{ width: `${horizontal ? "100px" : "100%"}` }} 
                            src={imgs[0]} 
                            className="productItem__img" 
                            alt="" 
                        />
                    </Link>
                    <div className="productItem__action">
                        <span className="productItem__action-btn productItem__action-btn-heart"><BsHeart /></span>
                        <span
                            onClick={handleShowModal}
                            className="productItem__action-btn productItem__action-btn-view"
                        >
                            <AiOutlineEye />
                        </span>
                    </div>
                </div>
                <div className="productItem__content">
                    <Link to="/shop" className="productItem__content-type d-block">{category}</Link>
                    <Link to="/shop/alium/1" className="productItem__content-title">
                        {title}
                    </Link>
                    <p className="productItem__content-unit">Unit: {unit}</p>
                    <p className="productItem__content-price">
                        {priceOld > 0 && <span className="productItem__content-price-old me-2">${priceOld}</span>}
                        <span className="productItem__content-price-current">${priceCurrent}</span>
                    </p>
                    {!horizontal &&
                        <div className="productItem__content-cart">
                            <div className="productItem__content-cart-quantity">
                                <button className="productItem__content-cart-quantity-minus">-</button>
                                <input className="productItem__content-cart-quantity-input" />
                                <button className="productItem__content-cart-quantity-plus">+</button>
                            </div>
                            <button className="btn-default productItem__content-cart-btn"><BiShoppingBag /></button>
                        </div>
                    }
                </div>

                <div className="productItem__label">
                    {discount > 0 && <span className="productItem__label-sale">{discount}%</span>}
                    {quantity <= 0 && <span className="productItem__label-out">Out of stock</span>}
                </div>
            </div>
           
            
        </>
    );
}

export default ProductItem;