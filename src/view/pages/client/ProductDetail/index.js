import { useEffect } from "react";
import Banner from "../../../../shared/components/Banner";
import ProductDetailBottom from "./ProductDetailBottom";
import ProductDetailCenter from "./ProductDetailCenter";
import ProductDetailTop from "./ProductDetailTop";


function ProductDetail() {
    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    return ( 
        <section className="productDetail">
            <Banner title=""/>
            <ProductDetailTop/>
            <ProductDetailCenter />
            <ProductDetailBottom/>
        </section>
     );
}

export default ProductDetail;