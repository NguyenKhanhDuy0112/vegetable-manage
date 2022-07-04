import { ICON } from "../../../../shared/assets/images";

function HomeIntro() {
    return (
        <article className="container-plugin mt-5 pt-5">
            <div className="home__intro">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 home__intro-child p-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img src={ICON.milkandMeat} alt="" className="home__intro-img" />
                            </div>
                            <div className="col">
                                <div className="home__intro-content">
                                    <h5 className="home__intro-content-title mb-1">
                                        Curated Products
                                    </h5>
                                    <p className="home__intro-content-text mb-0">
                                        Eating locally grown foods has many benefits
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 home__intro-child p-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img src={ICON.strawberry} alt="" className="home__intro-img" />
                            </div>
                            <div className="col">
                                <div className="home__intro-content">
                                    <h5 className="home__intro-content-title mb-1">
                                        Handmade
                                    </h5>
                                    <p className="home__intro-content-text mb-0">
                                        Made with passion by 300+ curators across.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 home__intro-child p-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img src={ICON.lemon} alt="" className="home__intro-img" />
                            </div>
                            <div className="col">
                                <div className="home__intro-content">
                                    <h5 className="home__intro-content-title mb-1">
                                        100% Natural
                                    </h5>
                                    <p className="home__intro-content-text mb-0">
                                        Eat local, consume local, closer
                                        to nature.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 home__intro-child p-3">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img src={ICON.shipping} alt="" className="home__intro-img" />
                            </div>
                            <div className="col">
                                <div className="home__intro-content">
                                    <h5 className="home__intro-content-title mb-1">
                                        Shipping
                                    </h5>
                                    <p className="home__intro-content-text mb-0">
                                        Free shipping is valid on orders of $50 or more shipped
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    );
}

export default HomeIntro;