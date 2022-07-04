import { FiEdit, FiTrash2 } from "react-icons/fi";
import TableAdmin from "../../../../shared/components/TableAdmin"
function SatisticalTableDebt() {
    return (
        <>
            <TableAdmin rows={["ID", "Name", "Date", "Address","Total", "METHOD","Money to pay", "Action"]}>
                <tr className="tableAdmin__tr">
                    <td className="tableAdmin__td">KH001</td>
                    <td className="tableAdmin__td">Ngan</td>
                    <td className="tableAdmin__td">12/5/2021</td>
                    <td className="tableAdmin__td">New York</td>
                    <td className="tableAdmin__td">$1000</td>
                    <td className="tableAdmin__td">COD</td>
                    <td className="tableAdmin__td">$500</td>
                    <td className="tableAdmin__td">
                        <div className="tableAdmin__container">
                        <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child pe-1" 
                                        >
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child tableAdmin__btn-child-danger ps-1"
                                        >
                                            <div className="tableAdmin__btn-notify tableAdmin__btn-notify-danger">Delete</div>
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </td>
                </tr>
                <tr className="tableAdmin__tr">
                    <td className="tableAdmin__td">KH002</td>
                    <td className="tableAdmin__td">Quoc</td>
                    <td className="tableAdmin__td">12/5/2021</td>
                    <td className="tableAdmin__td">New York</td>
                    <td className="tableAdmin__td">$4000</td>
                    <td className="tableAdmin__td">COD</td>
                    <td className="tableAdmin__td">$600</td>
                    <td className="tableAdmin__td">
                        <div className="tableAdmin__container">
                        <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child pe-1" 
                                        >
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child tableAdmin__btn-child-danger ps-1"
                                        >
                                            <div className="tableAdmin__btn-notify tableAdmin__btn-notify-danger">Delete</div>
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </td>
                </tr>
                <tr className="tableAdmin__tr">
                    <td className="tableAdmin__td">KH003</td>
                    <td className="tableAdmin__td">Duy</td>
                    <td className="tableAdmin__td">12/5/2021</td>
                    <td className="tableAdmin__td">New York</td>
                    <td className="tableAdmin__td">$10000</td>
                    <td className="tableAdmin__td">COD</td>
                    <td className="tableAdmin__td">$6000</td>
                    <td className="tableAdmin__td">
                        <div className="tableAdmin__container">
                        <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child pe-1" 
                                        >
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child tableAdmin__btn-child-danger ps-1"
                                        >
                                            <div className="tableAdmin__btn-notify tableAdmin__btn-notify-danger">Delete</div>
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </td>
                </tr>
            </TableAdmin>
        </>
    );
}

export default SatisticalTableDebt;