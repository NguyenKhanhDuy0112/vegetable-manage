import { Link } from "react-router-dom"
import { BsShop } from "react-icons/bs"
import { BiCategoryAlt } from "react-icons/bi"
import { MdOutlineManageAccounts } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai";
import ModalPlugin from "../../../shared/components/ModalPlugin/ModalPlugin";
import { useState } from "react";
import NavigationCategoryList from "./NavigationCategoryList";
function NavMobile() {
    const [showModal, setShowModal] = useState(false)

    const handleModalShow = () => setShowModal(true)
    const handleModalClose = () => setShowModal(false)

    return (
        <>
            <div className="navigationClient__mobile d-xl-none d-block">
                <div className="d-flex navigationClient__mobile-list">
                    <div className="w-25">
                        <Link className="navigationClient__mobile-list-item-link" to="/shop">
                            <div className="d-flex justify-content-between flex-column align-items-center">
                                <span className="navigationClient__mobile-list-item-link-icon"><BsShop /></span>
                                <span className="navigationClient__mobile-list-item-link-text">Shop</span>
                            </div>
                        </Link>
                    </div>
                    <div className="w-25">
                        <div className="navigationClient__mobile-list-item-link" onClick={handleModalShow}>
                            <div className="d-flex justify-content-between flex-column align-items-center">
                                <span className="navigationClient__mobile-list-item-link-icon"><BiCategoryAlt /></span>
                                <span className="navigationClient__mobile-list-item-link-text">Category</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-25">
                        <Link className="navigationClient__mobile-list-item-link" to="/home">
                            <div className="d-flex justify-content-between flex-column align-items-center">
                                <span className="navigationClient__mobile-list-item-link-icon"><MdOutlineManageAccounts /></span>
                                <span className="navigationClient__mobile-list-item-link-text">Account</span>
                            </div>
                        </Link>
                    </div>
                    <div className="w-25">
                        <Link className="navigationClient__mobile-list-item-link" to="/wishlist">
                            <div className="d-flex justify-content-between flex-column align-items-center">
                                <span className="navigationClient__mobile-list-item-link-icon"><AiOutlineHeart /></span>
                                <span className="navigationClient__mobile-list-item-link-text">Wishlist</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <ModalPlugin
                show={showModal}
                onHide={handleModalClose}
                position="right"
                width="35"
                background="#F4C340"
                header="Categories"
            >

                <NavigationCategoryList />
            </ModalPlugin>
        </>
    );
}

export default NavMobile;