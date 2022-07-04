import { useState } from "react";
import ProviderSearch from "../Provider/ProviderSearch";
import CustomerSearch from "./CustomerSearch"


function CustomerAdmin() {
    const [tab, setTab] = useState('customer')
    return (
        <>
            <div className="container">
                <div className="dashboard__container">
                    <div className="d-flex dashboard__container-child">
                        <h6 
                            className={`dashboard__title-tab mb-0 h-100 ${tab === "customer" ? "active": ""}`} 
                            onClick = {() => setTab('customer')}
                        >
                            Customers
                        </h6>
                        
                        <h6 
                           className={`dashboard__title-tab mb-0 h-100 ${tab === "provider" ? "active": ""}`} 
                            onClick = {() => setTab('provider')}
                        >
                            Providers
                        </h6>
                    </div>
                    <div className="dashboard__body pt-3">
                        {tab === "provider" && <ProviderSearch/>}
                        {tab === "customer" && <CustomerSearch/>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerAdmin;