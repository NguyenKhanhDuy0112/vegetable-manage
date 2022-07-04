import { Link } from "react-router-dom";

function HomeCategory() {
    return (
        <>
            <div className="container-plugin mt-5 pt-5">
                <div className="home__category">
                    <h2 className="title mb-5">Popular Categories</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6">
                        <div className="col">
                            <Link to="/shop" className="home__category-child">
                                <div className="home__category-child-img">
                                    <div className="home__category-child-img-primary">
                                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_cate-1.png" alt="" />
                                    </div>
                                </div>
                                <h5 className="text-dark text-center mt-3" style={{fontWeight: "600"}}>Meat Less</h5>
                            </Link>

                        </div>
                        <div className="col">
                            <Link to="/shop" className="home__category-child">
                                <div className="home__category-child-img">
                                    <div className="home__category-child-img-primary yellow">
                                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_cate-2.png" alt="" />
                                    </div>
                                </div>
                                <h5 className="text-dark text-center mt-3" style={{fontWeight: "600"}}>Vegetable</h5>
                            </Link>

                        </div>
                        <div className="col">
                            <Link to="/shop" className="home__category-child">
                                <div className="home__category-child-img">
                                    <div className="home__category-child-img-primary red">
                                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_cate-3.png" alt="" />
                                    </div>
                                </div>
                                <h5 className="text-dark text-center mt-3" style={{fontWeight: "600"}}>Fresh Fruit</h5>
                            </Link>

                        </div>
                        <div className="col">
                            <Link to="/shop" className="home__category-child">
                                <div className="home__category-child-img">
                                    <div className="home__category-child-img-primary orange">
                                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_cate-4.png" alt="" />
                                    </div>
                                </div>
                                <h5 className="text-dark text-center mt-3" style={{fontWeight: "600"}}>Salad Mixes</h5>
                            </Link>

                        </div>
                        <div className="col">
                            <Link to="/shop" className="home__category-child">
                                <div className="home__category-child-img">
                                    <div className="home__category-child-img-primary">
                                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_cate-5.png" alt="" />
                                    </div>
                                </div>
                                <h5 className="text-dark text-center mt-3" style={{fontWeight: "600"}}>Fresh Juice</h5>
                            </Link>

                        </div>
                        <div className="col">
                            <Link to="/shop" className="home__category-child">
                                <div className="home__category-child-img">
                                    <div className="home__category-child-img-primary pink">
                                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h1_cate-6.png" alt="" />
                                    </div>
                                </div>
                                <h5 className="text-dark text-center mt-3" style={{fontWeight: "600"}}>Lunch Ideas</h5>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCategory;