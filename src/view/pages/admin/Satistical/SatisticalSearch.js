import { useState } from "react";
import SatisticalDebtProvider from "./SatisticalDebtProvider";
import SatisticalStore from "./SatisticalStore";
import SatisticalTableDebt from "./SatisticalTableDebt";

function SatisticalSearch() {

    const [type, setType] = useState('debt-customer')

    return (
        <>
            <div className="searchAdmin p-3 mb-3">
                <div className="row g-3">
                    <div className="col-md-4">
                        <input
                            placeholder="From date..."
                            type="date"
                            className="searchAdmin__input"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            placeholder="To date..."
                            type="date"
                            className="searchAdmin__input"
                        />
                    </div>
                    <div className="col-md">
                        <select
                            onChange={(e) => setType(e.target.value)}
                            className="searchAdmin__input"
                        >
                            <option value="debt-customer">Debt statistical: customer</option>
                            <option value="debt-provider">Debt statistics: provider</option>
                            <option value="store">Export/import/storage statistics</option>
                        </select>
                    </div>
                </div>
            </div>
            {type === "debt-customer" ? <SatisticalTableDebt/> : ""}
            {type === "debt-provider" ? <SatisticalDebtProvider/> : ""}
            {type === "store" ? <SatisticalStore/>: ""}
        </>
    );
}

export default SatisticalSearch;