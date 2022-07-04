import { BsFillMoonFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai'
import NavigationAdmin from '../../navigation/navigationAdmin/NavigationAdmin';
import HeaderAdminAvatar from './HeaderAdminAvatar';
import HeaderAdminNotify from './HeaderAdminNotify';
import {  useState } from 'react';
function HeaderAdmin() {
    const [show, setShow] = useState(false);
    const handleShow = (show) => {
        setShow(show)
    }
    return (
        <>
            <div
                className={`overlay ${show ? "active" : ""}`}
                onClick={() => setShow(false)}
            >
            </div>
            <header className='headerAdmin d-flex align-items-center'>
                <div className='containerAdmin'>
                    <div className="row">
                        <div className="col">
                            <span className='p-1' onClick={() => setShow(true)}>
                                <AiOutlineMenu/>
                            </span>
                        </div>
                        <div className="col-auto">
                            <div className="row justify-content-end">
                                <div className="col-auto">
                                    <div className='headerAdmin__mode'>
                                        <span className='headerAdmin__mode-icon'>
                                            <BsFillMoonFill />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <HeaderAdminNotify />
                                </div>
                                <div className='col-auto'>
                                    <HeaderAdminAvatar />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
            <NavigationAdmin isShow={show} onShow = {(show) => handleShow(show)} />
        </>
    );
}

export default HeaderAdmin;