import { useEffect, useState } from "react";
import PaginationClient from "../../../../shared/components/PaginationClient/PaginationClient";
import ProductItem from "../../../../shared/components/ProductItem/ProductItem"
import products from "../../../../shared/public/products";

function ShopProduct() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState({start: 0, end: 12})

    useEffect(() => {
        setData(products)
    },[])

    const handleChangePage = (start, end) =>{
        setPagination({start: start, end: end})
        window.scrollTo({top: 0});
    }

    return (
        <>
            <article>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-4 row-cols-lg-3 g-4 mt-2">
                    {data.length > 0 && data.map((product,index) => {
                        return ( index >= pagination.start -1  && index <= pagination.end - 1 &&
                            <div key = {product.id} className= "col">
                                <ProductItem
                                    imgs={product.imgs}
                                    unit = {product.unit}
                                    title = {product.title}
                                    category = {product.category}
                                    quantity = {product.quantity}
                                    sku = {product.sku}
                                    discount =  {product.discount}
                                    priceOld = {product.priceOld}
                                    priceCurrent = {product.priceCurrent}
                                />
                            </div>
                        )
                    })}
                </div>
            </article>

            <PaginationClient 
                data={data} 
                onChangePage = {(start,end) => handleChangePage(start, end)} 
                show = {12}
            />
        </>
    );
}

export default ShopProduct;