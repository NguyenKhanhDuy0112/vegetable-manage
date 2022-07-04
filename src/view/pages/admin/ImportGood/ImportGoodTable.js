import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router";
import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";
import TableAdmin from "../../../../shared/components/TableAdmin";

function ImportGoodTable( { imports } ) {
    const [listImport, setListImport] = useState([])
    const [pagination, setPagination] = useState({start: 0, end: 0})
    const navigate = useNavigate()

    useEffect(() => {
        setListImport(imports)
    },[imports])

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
                rows={["ORDER ID", "TIME", "SHIPPING ADDRESS", "PHONE", "METHOD", "AMOUNT",  "INVOICE"]}
            >
                {listImport.length > 0 && imports.map((order,index) => {
                    return index >= pagination.start && index <= pagination.end && order.type.toLowerCase() === 'n' && typeof order.provider === 'object' && (
                        <tr key= {order.id} className="tableAdmin__tr">
                            <td className="tableAdmin__td">{order.id}</td>
                            <td className="tableAdmin__td">{order.date}</td>
                            <td className="tableAdmin__td">{order.provider.address}</td>
                            <td className="tableAdmin__td">{order.provider.phoneNumber}</td>
                            <td className="tableAdmin__td">{order.method}</td>
                            <td className="tableAdmin__td">${(order.total).toFixed(2)}</td>
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
            <PaginationAdmin arrData = {listImport} onChangePage={(start,end) => handleChangePagination(start,end)}/>
        </>
    );
}

export default ImportGoodTable;