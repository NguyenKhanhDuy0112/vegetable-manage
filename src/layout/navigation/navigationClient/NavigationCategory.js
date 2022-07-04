import { BsUiRadiosGrid } from "react-icons/bs";
import { MdKeyboardArrowDown , MdKeyboardArrowUp} from "react-icons/md";
import NavigationCategoryList from "./NavigationCategoryList";

function NavigationCategory() {
    return (
        <>
            <div className="navigationClient__category position-relative">
                <button className="navigationClient__category-btn">
                    <span><BsUiRadiosGrid />  All Categories </span>
                    <p className="mb-0 d-flex flex-column">
                        <span className="navigationClient__category-btn-down"><MdKeyboardArrowDown /></span>
                        <span className="navigationClient__category-btn-up"><MdKeyboardArrowUp/></span>
                    </p>
                </button>
                <NavigationCategoryList/>
            </div>
        </>
    );
}

export default NavigationCategory;