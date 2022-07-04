import { FaShippingFast } from "react-icons/fa"
import NavigationCategory from "./NavigationCategory";
import NavigationLink from "./NavigationLink";
function NavigationClient() {
    return (
        <>
            <nav className="navigationClient">
                <div className="row align-items-center">
                    <div className="col d-flex align-items-center">
                        <NavigationCategory />
                        <NavigationLink />
                    </div>
                    <div className="col-auto d-xl-block d-none">
                        <p className="m-0 navigationClient__ship">
                            <span className="me-2 navigationClient__ship-icon"><FaShippingFast /></span>
                            <span className="navigationClient__ship-text">We ship to over 150 countries & region</span>
                        </p>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default NavigationClient;