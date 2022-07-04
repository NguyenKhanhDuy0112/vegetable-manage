import { AiOutlineCheck } from "react-icons/ai";
import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

function DashboardSystem() {
    return (
        <>
            <div className="dashboard__total-container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    <div className="col">
                        <div className="dashboard__total p-3">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="dashboard__total-icon dashboard__total-icon-order">
                                        <FiShoppingCart />
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="dashboard__total-content">
                                        <h6 className="dashboard__total-title">Total Order</h6>
                                        <p className="mb-0 dashboard__total-number">184</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="dashboard__total p-3">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="dashboard__total-icon dashboard__total-icon-pending">
                                       <MdOutlinePublishedWithChanges/>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="dashboard__total-content">
                                        <h6 className="dashboard__total-title">Order Pending</h6>
                                        <p className="mb-0 dashboard__total-number">40</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="dashboard__total p-3">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="dashboard__total-icon dashboard__total-icon-process">
                                        <FiTruck/>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="dashboard__total-content">
                                        <h6 className="dashboard__total-title">Order Processing</h6>
                                        <p className="mb-0 dashboard__total-number">62</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="dashboard__total p-3">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="dashboard__total-icon dashboard__total-icon-delivery">
                                        <AiOutlineCheck/>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="dashboard__total-content">
                                        <h6 className="dashboard__total-title">Order Delivered</h6>
                                        <p className="mb-0 dashboard__total-number">65</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default DashboardSystem;