import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AVATAR } from "../../../shared/assets/images";

function HeaderAdminAvatar() {
    const [show, setShow] = useState(false);
    return (
        <div className='headerAdmin__avatar'>
            <img 
                className='headerAdmin__avatar-img cursor-pointer' 
                src={AVATAR.avatar2} alt="" 
                onClick={() => setShow(!show)}
            />
            <ul className={`headerAdmin__avatar-list list-unstyled m-0 ${show && "active"}`}>
                <li className='headerAdmin__avatar-item'>
                    <Link onClick={() => setShow(!show)} to="/admin/dashboard" className='headerAdmin__avatar-link py-2 px-3 d-block'>
                        <RiDashboardLine className='me-3' />
                        <span className="small">Dashboard</span>
                    </Link>
                </li>
                <li className='headerAdmin__avatar-item'>
                    <Link onClick={() => setShow(!show)} to="/admin/setting" className='headerAdmin__avatar-link py-2 px-3 d-block'>
                        <FiSettings className='me-3' />
                        <span className="small">Setting</span>
                    </Link>
                </li>
                <li className='headerAdmin__avatar-item'>
                    <Link onClick={() => setShow(!show)} to="/admin" className='headerAdmin__avatar-link py-2 px-3 d-block'>
                        <IoLogOutOutline className='me-3' />
                        <span className="small">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HeaderAdminAvatar;