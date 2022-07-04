import { BiStoreAlt } from "react-icons/bi";
import { FaCheese, FaPizzaSlice } from "react-icons/fa";
import { GiBananaBunch, GiCabbage, GiCirclingFish, GiEggClutch, GiMeat, GiMilkCarton } from "react-icons/gi";
import { Link } from "react-router-dom";

function NavigationCategoryList() {
    return ( 
        <ul className="navigationClient__category-list">
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"><GiMilkCarton /></span>
                            Milk & Cream
                        </Link>
                    </li>
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"><GiBananaBunch /></span>
                            Fruits
                        </Link>
                    </li>
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"> <GiCabbage /></span>
                            Vegtables
                        </Link>
                    </li>
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"><GiMeat /></span>
                            Fresh Meat
                        </Link>
                    </li>
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"><GiCirclingFish /></span>
                            Ocean Foods

                        </Link>
                    </li>
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"><GiEggClutch /></span>
                            Butter & Eggs
                        </Link>
                    </li>
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"> <FaPizzaSlice /></span>
                            Fastfood
                        </Link>
                    </li>
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"><FaCheese /></span>
                            Cheese & Breakfast
                        </Link>
                    </li>
                    <li className="navigationClient__category-list-item">
                        <Link className="navigationClient__category-list-item-link" to="/shop">
                            <span className="fs-4 me-2"><BiStoreAlt /></span>
                            Biscuit & Snack
                        </Link>
                    </li>

                </ul>
     );
}

export default NavigationCategoryList;