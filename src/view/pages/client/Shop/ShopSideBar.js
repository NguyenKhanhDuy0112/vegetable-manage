import { Link } from "react-router-dom";
import ProductSeller from "../../../../shared/components/ProductSeller/ProductSeller";

function ShopSideBar() {
    return (
        <aside className="shop__sideBar p-4">
            <div className="row row-cols-1">
                <div className="col">
                    <h6 className="shop__sideBar-heading mb-3">Categories</h6>
                    <div className="shop__sideBar-category pb-4">
                        <ul className="shop__sideBar-category-list m-0 p-0">
                            <li className="shop__sideBar-category-list-item px-4 py-2">
                                <Link to="/shop" className="shop__sideBar-category-list-item-link">
                                    Alium(10)
                                </Link>
                            </li>
                            <li className="shop__sideBar-category-list-item px-4 py-2">
                                <Link to="/shop" className="shop__sideBar-category-list-item-link">
                                    Beverage(10)
                                </Link>
                            </li>
                            <li className="shop__sideBar-category-list-item px-4 py-2">
                                <Link to="/shop" className="shop__sideBar-category-list-item-link">
                                    Dairy Bread & Eggs(10)
                                </Link>
                            </li>
                            <li className="shop__sideBar-category-list-item px-4 py-2">
                                <Link to="/shop" className="shop__sideBar-category-list-item-link">
                                    Fruit & Vegetable(10)
                                </Link>
                            </li>
                            <li className="shop__sideBar-category-list-item px-4 py-2">
                                <Link to="/shop" className="shop__sideBar-category-list-item-link">
                                    Grocery & Staples
                                </Link>
                            </li>
                            <li className="shop__sideBar-category-list-item px-4 py-2">
                                <Link to="/shop" className="shop__sideBar-category-list-item-link">
                                    Health & Wellness(10)
                                </Link>
                            </li>
                            <li className="shop__sideBar-category-list-item px-4 py-2">
                                <Link to="/shop" className="shop__sideBar-category-list-item-link">
                                    Leafy Green(10)
                                </Link>
                            </li>
                            <li className="shop__sideBar-category-list-item px-4 py-2">
                                <Link to="/shop" className="shop__sideBar-category-list-item-link">
                                    Package Foods(8)
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h6 className="shop__sideBar-heading pt-4 mb-3">Price</h6>
                    <div className="shop__sideBar-filter pb-4">
                        <div className="shop__sideBar-filter-input">
                            <div className="d-flex align-items-center">
                                <input className="w-50 shop__sideBar-filter-input-child" placeholder="From..." />
                                <span className="mx-2">-</span>
                                <input className="w-50 shop__sideBar-filter-input-child" placeholder="To..." />

                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-end">
                            <button className="shop__sideBar-filter-btn mt-2">Filter</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h6 className="shop__sideBar-heading pt-4 mb-3">Products</h6>
                    <div className="shop__sideBar-product pb-4">
                        <div className="row row-cols-1">
                            <div className="col">
                                <ProductSeller
                                    img="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/87-460x460.png"
                                    title="Synergistic Cotton Knife"
                                    priceCurrent={8.17}
                                    priceOld={15.53}
                                    stars={4}
                                    width={80}
                                    noneBtn
                                />
                            </div>
                            <div className="col">
                                <ProductSeller
                                    img="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/86-460x460.png"
                                    title="Synergistic Cotton Knife"
                                    priceCurrent={6.54}
                                    priceOld={15.53}
                                    stars={5}
                                    width={80}
                                    noneBtn
                                />
                            </div>
                            <div className="col">
                                <ProductSeller
                                    img="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/60-460x460.png"
                                    title="Synergistic Cotton Knife"
                                    priceCurrent={12.2}
                                    priceOld={15.53}
                                    stars={4}
                                    width={80}
                                    noneBtn
                                />
                            </div>
                            <div className="col">
                                <ProductSeller
                                    img="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/83-460x460.png"
                                    title="Synergistic Cotton Knife"
                                    priceCurrent={9.3}
                                    priceOld={15.53}
                                    stars={5}
                                    width={80}
                                    noneBtn
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h6 className="shop__sideBar-heading mb-3">Tags</h6>
                    <div className="shop__sideBar-tags pb-4">
                        <div className="row">
                            <div className="col">
                                <Link to = "/shop" className="shop__sideBar-tags-child">fruit</Link>
                            </div>
                            <div className="col">
                                <Link to ="/shop" className="shop__sideBar-tags-child">healthy</Link>
                            </div>
                            <div className="col">
                                <Link to = "/shop" className="shop__sideBar-tags-child">juice</Link>
                            </div>
                            <div className="col">
                                <Link to = "/shop" className="shop__sideBar-tags-child">meat</Link>
                            </div>
                            <div className="col">
                                <Link to = "/shop" className="shop__sideBar-tags-child">natural</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default ShopSideBar;