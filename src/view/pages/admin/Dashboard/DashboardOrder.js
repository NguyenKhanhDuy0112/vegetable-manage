import Status from "../../../../shared/components/Status/Status";
import TableAdmin from "../../../../shared/components/TableAdmin";

function DashboardOrder() {
    return (
        <>
            <div className="dashboard__order mb-0">
                <TableAdmin
                    rows={["Order time", "Delivery address", "Phone", "Payment Method", "Order Amount", "Status"]}
                >
                    <tr className="tableAdmin__tr">
                        <td className="tableAdmin__td">Dec 18, 2021</td>
                        <td className="tableAdmin__td">Mirpur, Dhaka</td>
                        <td className="tableAdmin__td">5165876145+1814</td>
                        <td className="tableAdmin__td">COD</td>
                        <td className="tableAdmin__td">$75.00</td>
                        <td className="tableAdmin__td"><Status status="Delivered" type="delivered" /></td>
                    </tr>
                    <tr className="tableAdmin__tr">
                        <td className="tableAdmin__td">Dec 18, 2021</td>
                        <td className="tableAdmin__td">Mirpur, Dhaka</td>
                        <td className="tableAdmin__td">5165876145+1814</td>
                        <td className="tableAdmin__td">COD</td>
                        <td className="tableAdmin__td">$75.00</td>
                        <td className="tableAdmin__td"><Status status="Delivered" type="delivered" /></td>
                    </tr>
                    <tr className="tableAdmin__tr">
                        <td className="tableAdmin__td">Dec 18, 2021</td>
                        <td className="tableAdmin__td">Mirpur, Dhaka</td>
                        <td className="tableAdmin__td">5165876145+1814</td>
                        <td className="tableAdmin__td">COD</td>
                        <td className="tableAdmin__td">$75.00</td>
                        <td className="tableAdmin__td"><Status status="Delivered" type="delivered" /></td>
                    </tr>
                    <tr className="tableAdmin__tr">
                        <td className="tableAdmin__td">Dec 18, 2021</td>
                        <td className="tableAdmin__td">Mirpur, Dhaka</td>
                        <td className="tableAdmin__td">5165876145+1814</td>
                        <td className="tableAdmin__td">COD</td>
                        <td className="tableAdmin__td">$75.00</td>
                        <td className="tableAdmin__td"><Status status="Delivered" type="delivered" /></td>
                    </tr>
                    <tr className="tableAdmin__tr">
                        <td className="tableAdmin__td">Dec 18, 2021</td>
                        <td className="tableAdmin__td">Mirpur, Dhaka</td>
                        <td className="tableAdmin__td">5165876145+1814</td>
                        <td className="tableAdmin__td">COD</td>
                        <td className="tableAdmin__td">$75.00</td>
                        <td className="tableAdmin__td"><Status status="Delivered" type="delivered" /></td>
                    </tr>
                    <tr className="tableAdmin__tr">
                        <td className="tableAdmin__td">Dec 18, 2021</td>
                        <td className="tableAdmin__td">Mirpur, Dhaka</td>
                        <td className="tableAdmin__td">5165876145+1814</td>
                        <td className="tableAdmin__td">COD</td>
                        <td className="tableAdmin__td">$75.00</td>
                        <td className="tableAdmin__td"><Status status="Delivered" type="delivered" /></td>
                    </tr>
                    <tr className="tableAdmin__tr">
                        <td className="tableAdmin__td">Dec 18, 2021</td>
                        <td className="tableAdmin__td">Mirpur, Dhaka</td>
                        <td className="tableAdmin__td">5165876145+1814</td>
                        <td className="tableAdmin__td">COD</td>
                        <td className="tableAdmin__td">$75.00</td>
                        <td className="tableAdmin__td"><Status status="Delivered" type="delivered" /></td>
                    </tr>
                    <tr className="tableAdmin__tr">
                        <td className="tableAdmin__td">Dec 18, 2021</td>
                        <td className="tableAdmin__td">Mirpur, Dhaka</td>
                        <td className="tableAdmin__td">5165876145+1814</td>
                        <td className="tableAdmin__td">COD</td>
                        <td className="tableAdmin__td">$75.00</td>
                        <td className="tableAdmin__td"><Status status="Delivered" type="delivered" /></td>
                    </tr>

                </TableAdmin>
            </div>
        </>
    );
}

export default DashboardOrder;