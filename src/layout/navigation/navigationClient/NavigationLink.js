import { FiPhoneCall } from "react-icons/fi";
import CustomLink from "../../../shared/components/CustomLink/CustomLink";
function NavigationLink({ distance, onHide }) {

    return (
        <>
            <nav className="navigationClient__link">
                <ul className="navigationClient__link-list m-0 p-0" onClick={onHide}>
                    <CustomLink distanceLink={`${distance ? distance : "p-4"}`} to="/home">
                        <span className="navigationClient__link-list-item-link-text">Home</span>
                    </CustomLink>
                    <CustomLink distanceLink={`${distance ? distance : "p-4"}`} to="/shop">
                        <span className="navigationClient__link-list-item-link-text">Shop</span>
                    </CustomLink>
                    <CustomLink distanceLink={`${distance ? distance : "p-4"}`} to="/about">
                        <span className="navigationClient__link-list-item-link-text">About</span>
                    </CustomLink>
                    <CustomLink distanceLink={`${distance ? distance : "p-4"}`} to="/blogs">
                        <span className="navigationClient__link-list-item-link-text">Blog</span>
                    </CustomLink>
                    <CustomLink distanceLink={`${distance ? distance : "p-4"}`} to="/contact">
                        <span className="navigationClient__link-list-item-link-text">Contact</span>
                    </CustomLink>
                    <li className="navigationClient__link-list-item d-xl-none d-block">
                        <a href="telto:0798132664" className={`header__tel navigationClient__link-list-item-link ${distance ? distance : "p-4"}`}>
                            <span className="header__tel-icon me-2">Tel: <FiPhoneCall /></span>
                            <span className="header__tel-text">079-8132-664</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavigationLink;