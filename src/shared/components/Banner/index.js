import { BACKGROUND } from "../../assets/images";
import { Link, useLocation } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"

function Banner({ title } ) {

    const location = useLocation()
    const pathName = location.pathname.split("/")

    return (
        <article className="position-relative">
            <div style={{ backgroundImage: `url(${BACKGROUND.bannerShop})`, minHeight: "260px", width: "100%" }}></div>
            <div className="position-absolute w-100 justify-content-center top-50 start-50 translate-middle d-flex flex-column align-items-center">
                <h1 className="text-heading fw-bold">{title}</h1>
                <div className="d-flex align-items-center">
                    <Link to="/home" className="banner__link">
                        <small>Home Page</small>
                    </Link>
                    {pathName.map((item, index) => {
                        return item !== "" && <p key={index} className="mb-0">
                            <small className="mx-2 color-bc"><IoIosArrowForward /></small>
                            <small className="text-capitalize">{item}</small>
                        </p>
                    })}
                </div>
            </div>
        </article>
    );
}

export default Banner;