import { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";
import Status from "../../../../shared/components/Status/Status";
import TableAdmin from "../../../../shared/components/TableAdmin";

function CouponTable({ coupons, onEditCoupon, onDeleteCoupon }) {
    const [pagination, setPagination] = useState({start: 0, end: 0})
    const [listCoupon, setListCoupon] = useState([])
    
    useEffect(() => setListCoupon(coupons), [coupons])
    
    const handleChangePagination = (start, end) => {
        setPagination({start: start - 1, end  : end - 1})
    }

    return (
        <>
            <TableAdmin rows={["ID", "START DATE", "END DATE", "CAMPAIGNS NAME", "CODE", "PERCENTAGE", "STATUS", "ACTIONS"]}>
                {listCoupon.length > 0 && listCoupon.map((coupon,index) => {
                    return index >= pagination.start && index <= pagination.end && coupon.id !== "C_007" && (
                        <tr key = {coupon.id} className="tableAdmin__tr">
                            <td className="tableAdmin__td">{coupon.id}</td>
                            <td className="tableAdmin__td">{coupon.startDate}</td>
                            <td className="tableAdmin__td">{coupon.endDate}</td>
                            <td className="tableAdmin__td">{coupon.name}</td>
                            <td className="tableAdmin__td">{coupon.code}</td>
                            <td className="tableAdmin__td">{coupon.percent}%</td>
                            <td className="tableAdmin__td">
                                <Status status={coupon.status ? "Active" : "Expired"} type={coupon.status ? "delivered" : "cancel"} />
                            </td>
                            <td className="tableAdmin__td">
                                <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child pe-1" 
                                            onClick={() => onEditCoupon(coupon.id)}
                                        >
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button 
                                            onClick={() => onDeleteCoupon(coupon.id)}
                                            className="tableAdmin__btn-child tableAdmin__btn-child-danger ps-1"
                                        >
                                            <div className="tableAdmin__btn-notify tableAdmin__btn-notify-danger">Delete</div>
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </TableAdmin>
            <PaginationAdmin arrData={coupons} onChangePage={handleChangePagination} />
            
        </>
    );
}

export default CouponTable;