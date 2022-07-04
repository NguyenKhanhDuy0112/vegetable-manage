import { useState } from "react"
import ProductDetailCenterDes from "./ProductDetailCenterDes";
import ProductDetailCenterInfo from "./ProductDetailCenterInfo";
import ProductDetailCenterReview from "./ProductDetailCenterReview";
function ProductDetailCenter() {
    const [type, setType] = useState('des')

    return (
        <article className="productDetail__center my-5">
            <div className="container-plugin py-5">
                <div className="productDetail__center-content py-3">
                    <div className="row g-4 justify-content-center mb-4">
                        <div className="col-md-auto col-12 d-flex justify-content-center">
                            <button 
                                onClick={() => setType("des")} 
                                className={`productDetail__center-content-btn ${type === "des" && "active"}`}
                            >
                                Description
                            </button>
                        </div>
                        <div className="col-md-auto col-12 d-flex justify-content-center">
                            <button 
                                onClick={() => setType("info")} 
                                className={`productDetail__center-content-btn ${type === "info" && "active"}`}
                            >
                                Additional Information
                            </button>
                        </div>
                        <div 
                            onClick={() => setType("review")} 
                            className="col-md-auto col-12 d-flex justify-content-center"
                        >
                            <button className={`productDetail__center-content-btn ${type === "review" && "active"}`}>
                                Review (5)
                            </button>
                        </div>
                    </div>
                    {type === "des" && <ProductDetailCenterDes />}
                    {type === "info" && <ProductDetailCenterInfo/>}
                    {type === "review" && <ProductDetailCenterReview/>}
                </div>
            </div>
        </article>
    );
}

export default ProductDetailCenter;