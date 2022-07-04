import { useState } from "react";
import { BsBasket2 } from "react-icons/bs";
import ModalPlugin from "../../../shared/components/ModalPlugin/ModalPlugin";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr"
function HeaderClientCart() {
    const [showModal, setShowModal] = useState(false)

    const handleModalClose = () => setShowModal(false)
    const handleModalShow = () => setShowModal(true)

    return (
        <article>
            <button
                onClick={handleModalShow}
                className="btn-default header__btn-cart"
            >
                <BsBasket2 />
                <span className="btn-default-notify">3</span>
            </button>
            <ModalPlugin
                show={showModal}
                onHide={handleModalClose}
                position="right"
                header="SHOPPING CART"
                width="47"
                noneContainer
                background="#fff"
            >
                <div className="header__cart-modal d-flex justify-content-between flex-column">
                    <ul className="list-unstyled header__cart-modal-list">
                        <li className="header__cart-modal-list-item d-flex align-items-center justify-content-between p-2">
                            <div className="d-flex align-items-center">
                                <Link to="/shop" className="header__cart-modal-list-item-img d-block">
                                    <img className="header__cart-modal-list-item-img-child" src="https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/84-460x460.png" alt="" />
                                </Link>
                                <div className="header__cart-modal-list-item-content ms-2">
                                    <Link to="/shop" className="header__cart-modal-list-item-content-title mb-0">
                                        Synergitic Contton Knife
                                    </Link>
                                    <p className="mb-0">
                                        <span className="header__cart-modal-list-item-content-quantity">1</span>
                                        <span className="mx-1 header__cart-modal-list-item-content-multifly">X</span>
                                        <span className="header__cart-modal-list-item-content-price">
                                            $8.17
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <span className="d-block header__cart-modal-list-item-content-icon ps-1 pt-1 pb-1">
                                <GrFormClose />
                            </span>

                        </li>
                        <li className="header__cart-modal-list-item d-flex align-items-center justify-content-between p-2">
                            <div className="d-flex align-items-center">
                                <Link to="/shop" className="header__cart-modal-list-item-img d-block">
                                    <img className="header__cart-modal-list-item-img-child" src="https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/82-460x460.png" alt="" />
                                </Link>
                                <div className="header__cart-modal-list-item-content ms-2">
                                    <Link to="/shop" className="header__cart-modal-list-item-content-title mb-0">
                                        Heavy Duty Iron Car
                                    </Link>
                                    <p className="mb-0">
                                        <span className="header__cart-modal-list-item-content-quantity">1</span>
                                        <span className="mx-1 header__cart-modal-list-item-content-multifly">X</span>
                                        <span className="header__cart-modal-list-item-content-price">
                                            $10.5
                                        </span>

                                    </p>

                                </div>
                            </div>
                            <span className="d-block header__cart-modal-list-item-content-icon ps-1 pt-1 pb-1">
                                <GrFormClose />
                            </span>

                        </li>
                    </ul>
                    <div className="header__cart-modal-calc">
                        <div className="px-2 py-3">
                            <div className="d-flex justify-content-between mb-4">
                                <h5 className="mb-0">Subtotal</h5>
                                <h5 className="text-heading mb-0 text-heading fw-bold">$18.67</h5>
                            </div>
                            <div>
                                <Link onClick={handleModalClose} to = "/cart" className="header__cart-modal-calc-btn mb-3 d-block">
                                    View Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalPlugin>
        </article>
    );
}

export default HeaderClientCart;