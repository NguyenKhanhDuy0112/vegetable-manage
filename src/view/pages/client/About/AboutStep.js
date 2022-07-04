function AboutStep() {
    return (
        <article className="about__step position-relative mt-lg-0 mt-5">
            <div className="about__step-background" style={{ backgroundImage: "url(https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h6_bg2.jpg)", }}></div>
            <div className="about__step-content d-flex container-plugin position-absolute top-0 end-0 start-0 bottom-0">
                <div className="row g-5">
                    <div className="col-12 col-lg d-flex justify-content-between flex-column align-items-center">
                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h6_image9.png" alt="" />
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2 className="text-white fw-bold">Pick a starter option</h2>
                            <small className="text-white">
                                Choose from select produce to start. Keep, add, or remove items
                            </small>
                        </div>
                    </div>
                    <div className="col-2 d-lg-flex d-none justify-content-start flex-column align-items-center">
                        <img className="img-fluid about__step-img" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h6_image5.png" alt="" />
                    </div>
                    <div className="col-12 col-lg d-flex justify-content-between flex-column align-items-center">
                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h6_image11.png" alt="" />
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2 className="text-white fw-bold">Shop groceries</h2>
                            <small className="text-white">
                                Choose from select produce to start. Keep, add, or remove items
                            </small>
                        </div>
                    </div>
                    <div className="col-2 d-lg-flex d-none justify-content-start flex-column align-items-center">
                        <img className="img-fluid about__step-img" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h6_image5.png" alt="" />
                    </div>
                    <div className="col-12 col-lg d-flex justify-content-between flex-column align-items-center">
                        <img className="img-fluid" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/h6_image10.png" alt="" />
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2 className="text-white fw-bold">
                                We deliver. You enjoy.
                            </h2>
                            <small className="text-white">
                                Choose from select produce to start. Keep, add, or remove items
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AboutStep;