import OrderSearch from "./OrderSearch";
import { useState } from "react";
import ImportGood from "../ImportGood"

function OrderAdmin() {
    const [tab, setTab] = useState('order')
    return (
        <>
            <div className="container">
                <div className="dashboard__container">
                    <div className="d-flex dashboard__container-child">
                        <h6
                            className={`dashboard__title-tab mb-0 h-100 ${tab === "order" ? "active" : ""}`}
                            onClick={() => setTab('order')}
                        >
                            Orders
                        </h6>

                        <h6
                            className={`dashboard__title-tab mb-0 h-100 ${tab === "import" ? "active" : ""}`}
                            onClick={() => setTab('import')}
                        >
                            Import Good
                        </h6>
                    </div>
                    <div className="dashboard__body pt-3">
                        {tab === "order" && <OrderSearch />}
                        {tab === "import" && <ImportGood />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderAdmin;