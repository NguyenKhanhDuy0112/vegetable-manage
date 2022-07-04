import { AiOutlineEye } from "react-icons/ai";
import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";
import Status from "../../../../shared/components/Status/Status";
import TableAdmin from "../../../../shared/components/TableAdmin";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

function OrderTable({ orders }) {
    const [listOrder, setListOrder] = useState([])
    const [pagination, setPagination] = useState({start: 0, end: 0})
    const navigate = useNavigate()

    useEffect(() => {
        setListOrder(orders)
    },[orders])

    const handleChangePage = (id) => {
        navigate(`/admin/order/${id}`)
    }

    const handleChangeSelect = () => {
        
    }

    const handleChangePagination = (start, end) => {
        setPagination({start: start - 1, end  : end - 1})
    }
    
    return (
        <>
            <TableAdmin
                rows={["ORDER ID", "TIME", "SHIPPING ADDRESS", "PHONE", "METHOD", "AMOUNT", "STATUS", "ACTION", "INVOICE"]}
            >
                {listOrder.length > 0 && listOrder.map((order,index) => {
                    return index >= pagination.start && index <= pagination.end && order.type.toLowerCase() === 'x' &&(
                        <tr key= {order.id} className="tableAdmin__tr">
                            <td className="tableAdmin__td">{order.id}</td>
                            <td className="tableAdmin__td">{order.date}</td>
                            <td className="tableAdmin__td">{order.customer.address}</td>
                            <td className="tableAdmin__td">{order.customer.phoneNumber}</td>
                            <td className="tableAdmin__td">{order.method}</td>
                            <td className="tableAdmin__td">${(order.total).toFixed(2)}</td>
                            <td className="tableAdmin__td">
                                <Status 
                                    status={order.status} 
                                    type="pending" 
                                />
                            </td>
                            <td className="tableAdmin__td">
                                <select 
                                    className="searchAdmin__input"
                                    onChange={handleChangeSelect}
                                    value = {order.status}
                                >
                                    <option hidden>Status</option>
                                    <option value = "Delivered">Delivered</option>
                                    <option value = "Processing">Processing</option>
                                    <option value = "Cancel">Cancel</option>
                                    <option value = "Pending">Pending</option>
                                </select>
                            </td>
                            <td className="tableAdmin__td">
                                <div className="tableAdmin__container">
                                    <div className="tableAdmin__btn ms-2">
                                        <button className="tableAdmin__btn-child" onClick={() => handleChangePage(order.id)}>
                                            <div className="tableAdmin__btn-notify">View Invoice</div>
                                            <AiOutlineEye />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </TableAdmin>
            <PaginationAdmin arrData = {listOrder} onChangePage={(start,end) => handleChangePagination(start,end)}/>
        </>
    );
}

export default OrderTable;