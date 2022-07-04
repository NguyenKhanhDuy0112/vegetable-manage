import Banner from "../../../../shared/components/Banner";
import { MdOutlineWindow } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai"
import { useEffect } from "react"
import ShopProduct from "./ShopProduct";
import ShopSideBar from "./ShopSideBar";
function Shop() {

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    
    return (
        <section className="shop">
            <Banner title="Shop"/>
            <div className="container-plugin my-5">
                <div className="shop__product">
                    <div className="row g-lg-4 g-5 order-lg-first order-last">
                        <div className="col d-lg-block d-none">
                            <ShopSideBar />
                        </div>
                        <div className="col-lg-9 col-12">

                            <div className="row align-items-center g-3">
                                <div className="col">
                                    <h6 className="shop__product-show mb-0">Showing 1–12 of 78 results</h6>
                                </div>
                                <div className="col-auto d-flex">
                                    <span className="shop__product-btn p-2 me-2"><MdOutlineWindow /></span>
                                    <span className="shop__product-btn p-2 me-2"><AiOutlineBars /></span>
                                    <select className="shop__product-sort">
                                        <option>Sort by popularity</option>
                                        <option>Sort by average rating</option>
                                        <option>Sort by latest</option>
                                        <option>Sort by price: low to high</option>
                                        <option>Sort by price: high to low</option>
                                    </select>
                                </div>
                            </div>
                            <ShopProduct />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shop;