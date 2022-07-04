import {Link} from "react-router-dom"
import { useMatch } from "react-router";
function LinkAdmin({ to , icon, text}) {
    const match = useMatch(to)
    const classActive = match ? "navigationAdmin__item-link d-flex align-items-center px-4 py-3 active" : "navigationAdmin__item-link d-flex align-items-center px-4 py-3";
    return (
        <>
            <Link className={classActive} to={to}>
                <span className='navigationAdmin__item-link-icon mb-1 me-3'>
                    {icon}
                </span>
                <p className='navigationAdmin__item-link-title mb-0 d-inline-block'>{text}</p>
            </Link>
        </>
    );
}

export default LinkAdmin;