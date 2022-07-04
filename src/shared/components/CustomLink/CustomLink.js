import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to , distanceLink}) {
    const match = useMatch(to)
    const classLink = `navigationClient__link-list-item-link ${distanceLink} ${match ? "active" : ""}`
    return (
        <>
            <li className="navigationClient__link-list-item">
                <Link className={classLink} to={to}>
                    {children}
                </Link>
            </li>
        </>
    );
}

export default CustomLink;