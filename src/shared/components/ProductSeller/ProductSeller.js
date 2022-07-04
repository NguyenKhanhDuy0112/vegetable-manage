import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Star from "../Star/Star";

function ProductSeller({ img, stars, title, priceOld, priceCurrent, unit,noneBtn, width, height, discount }) {
    return (
        <div className="productSeller d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <div className="position-relative d-flex align-items-center">
                    <Link to="/shop" className="d-block">
                        <img style={{ width: `${width ? width : "auto"}px` }} className="productSeller__img" src={img} alt="" />
                    </Link>
                    <div className="productItem__label top-0 start-0">
                        {discount > 0 && <span className="productItem__label-sale">{discount}%</span>}
                    </div>
                </div>
                <div className="productSeller-card-content ms-2">
                    <Link to="/shop" className="productItem__content-title">
                        {title}
                    </Link>
                    {unit && <p className="mb-0 fs-6 text-secondary">Unit: {unit}</p>}
                    <Star value={stars} size={6} />
                    <p className="productItem__content-price">
                        {priceOld > 0 && <span className="productItem__content-price-old me-2">${priceOld}</span>}
                        <span className="productItem__content-price-current">${priceCurrent}</span>
                    </p>
                </div>
            </div>
            {!noneBtn &&
                <button className="btn-default productSeller__btn">
                    <AiOutlinePlus />
                </button>
            }
        </div>
    );
}

export default ProductSeller;