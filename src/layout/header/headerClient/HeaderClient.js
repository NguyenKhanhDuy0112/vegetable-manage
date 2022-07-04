import { LOGO } from "../../../shared/assets/images";
import { FiPhoneCall, FiSearch } from "react-icons/fi"
import { BiUser } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi"
import NavigationClient from "../../navigation/navigationClient/NavigationClient";
import { useEffect, useState } from "react";
import NavigationLink from "../../navigation/navigationClient/NavigationLink"
import ModalPlugin from "../../../shared/components/ModalPlugin/ModalPlugin";
import HeaderClientCart from "./HeaderClientCart";
import { useNavigate } from "react-router";

function HeaderClient() {
    const [scroll, setScroll] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const handleModalShow = () => setShowModal(true)
    const handleModalClose = () => setShowModal(false)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY >= 300)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", setScroll(0))
    }, [])

    return (
        <>
            <header className="header">
                <ModalPlugin 
                    show={showModal} 
                    onHide={handleModalClose} 
                    position="left" 
                    width="35" 
                    background="#F4C340"
                >
                    <div className="position-relative header__search my-2">
                        <input className="header__search-input" placeholder="Search product..." />
                        <button className="header__search-btn">
                            <span className="header__search-icon"><FiSearch /></span>
                        </button>
                    </div>
                    <NavigationLink onHide={handleModalClose} distance="py-4 px-0" />
                </ModalPlugin>
                <div className="container-plugin">
                    <div className={`header__container ${scroll && "active"} py-3`}>
                        <div className="row align-items-center">
                            <div className="col-auto d-xl-none d-block">
                                <button onClick={handleModalShow} className="header__btn-menu"><HiMenuAlt1 /></button>
                            </div>
                            <div className="col-xl-2 col d-xl-block d-flex justify-content-center align-items-center">
                                <img src={LOGO.logoHeader} className="header__img" alt="" />
                            </div>
                            <div className="col d-xl-block d-none">
                                {scroll
                                    ?
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <NavigationLink distance="py-2 px-4" />
                                        </div>
                                    </div>
                                    :
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <a href="telto:0798132664" className="header__tel">
                                                <span className="header__tel-icon me-2"><FiPhoneCall /></span>
                                                <span className="header__tel-text">079-8132-664</span>
                                            </a>
                                        </div>
                                        <div className="position-relative col-8 header__search">
                                            <input className="header__search-input" placeholder="Search product..." />
                                            <button className="header__search-btn">
                                                <span className="header__search-icon"><FiSearch /></span>
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="col-auto">
                                <div className="d-flex align-items-center">
                                    <div className="header__account d-xl-flex d-none align-items-center me-4" onClick={() => navigate("/login")}>
                                        <button className="btn-default header__account-btn-user me-2">
                                            <span className="header__account-btn-user-icon"><BiUser /></span>
                                        </button>
                                        <div className="cursor-pointer">
                                            <h6 className="header__account-title">Hello</h6>
                                            <h6 className="header__account-title mb-0">
                                                <strong className="text-black">Sign In</strong> or <strong className="text-black">Register</strong>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="me-4 d-xl-block d-none">
                                        <button onClick={() => navigate("/wishlist")} className="btn-default header__btn-wishlist">
                                            <AiOutlineHeart />
                                            <span className="btn-default-notify">9</span>
                                        </button>
                                    </div>
                                    <div>
                                        <HeaderClientCart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-xl-block d-none">
                        <NavigationClient />
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderClient;