import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";

function SatisticalStore() {

    
    const handleChangePagination = (start, end) => {
        
    }

    return (
        <>
            <div className="table-responsive">
                <table className="tableAdmin table table-bordered table-striped table-hover mb-0 p-0">
                    <thead className="tableAdmin__thead">
                        <tr className="tableAdmin__tr border-bottom border-1">
                            <th className="tableAdmin__th text-center border-end border-1" colSpan="4">Information Goods</th>
                            <th className="tableAdmin__th text-center border-end border-1" style={{width: "4rem"}} colSpan="1">Opening Balance</th>
                            <th className="tableAdmin__th text-center border-end border-1" style={{width: "4rem"}} colSpan="1">Import</th>
                            <th className="tableAdmin__th text-center border-end border-1" style={{width: "4rem"}} colSpan="1">Export</th>
                            <th className="tableAdmin__th text-center" style={{width: "4rem"}} colSpan="1">Ending Balance</th>
                        </tr>
                        <tr className="tableAdmin__tr">
                            <th style={{width: "3rem"}} className="tableAdmin__th border-end border-1">#</th>
                            <th style={{width: "3rem"}} className="tableAdmin__th border-end border-1">ID</th>
                            <th className="tableAdmin__th border-end border-1">Name</th>
                            <th style={{width: "3rem"}} className="tableAdmin__th border-end border-1">DVT</th>
                            <th className="tableAdmin__th border-end border-1">Quantity</th>
                            <th className="tableAdmin__th border-end border-1">Quantity</th>
                            <th className="tableAdmin__th border-end border-1">Quantity</th>
                            <th className="tableAdmin__th border-end border-1">Quantity</th>
                        </tr>

                    </thead>
                    <tbody className="tableAdmin__tbody">
                        <tr className="tableAdmin__tr">
                            <td className="tableAdmin__td border-end border-1">1</td>
                            <td className="tableAdmin__td border-end border-1">PR001</td>
                            <td className="tableAdmin__td border-end border-1">Cabbage</td>
                            <td className="tableAdmin__td border-end border-1">Kg</td>
                            <td className="tableAdmin__td border-end border-1 text-end">0</td>
                            <td className="tableAdmin__td border-end border-1 text-end">5</td>
                            <td className="tableAdmin__td border-end border-1 text-end">2</td>
                            <td className="tableAdmin__td border-end border-1 text-end">3</td>
                        </tr>
                        <tr className="tableAdmin__tr">
                            <td className="tableAdmin__td border-end border-1">2</td>
                            <td className="tableAdmin__td border-end border-1">PR002</td>
                            <td className="tableAdmin__td border-end border-1">Potato</td>
                            <td className="tableAdmin__td border-end border-1">Kg</td>
                            <td className="tableAdmin__td border-end border-1 text-end">0</td>
                            <td className="tableAdmin__td border-end border-1 text-end">5</td>
                            <td className="tableAdmin__td border-end border-1 text-end">2</td>
                            <td className="tableAdmin__td border-end border-1 text-end">3</td>
                        </tr>
                        <tr className="tableAdmin__tr">
                            <td className="tableAdmin__td border-end border-1">3</td>
                            <td className="tableAdmin__td border-end border-1">PR003</td>
                            <td className="tableAdmin__td border-end border-1">Cucumber</td>
                            <td className="tableAdmin__td border-end border-1">Kg</td>
                            <td className="tableAdmin__td border-end border-1 text-end">0</td>
                            <td className="tableAdmin__td border-end border-1 text-end">5</td>
                            <td className="tableAdmin__td border-end border-1 text-end">2</td>
                            <td className="tableAdmin__td border-end border-1 text-end">3</td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
            <PaginationAdmin arrData={[{product: "Cabbage"},{product: "Tomato"}, {product: "Fish"}, {product:"Meat"}]} onChangePage={handleChangePagination} />
        </>

    );
}

export default SatisticalStore;