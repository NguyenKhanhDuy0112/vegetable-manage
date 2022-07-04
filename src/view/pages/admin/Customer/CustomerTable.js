import { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";
import TableAdmin from "../../../../shared/components/TableAdmin";

function CustomerTable({ customers, onEditCustomer, onDeleteCustomer }) {
    const [listCustomer, setListCustomer] = useState([])
    const [pagination , setPagination] = useState({start: 0, end: 0});

    useEffect(() => setListCustomer(customers), [customers])

    const handleEditCustomer = (id) => {
        onEditCustomer(id)
    }

    const handleDeleteCustomer = id => {
        onDeleteCustomer(id)
    }

    const handleChangePagination = (start, end) => {
        setPagination({start: start - 1, end  : end - 1})
    }
    
    return (
        <>
            <TableAdmin
                rows={["Id", "Avatar","Name", "Date Of Birth","Email", "Phone Number", "Debt", "Actions"]}
            >
                {listCustomer.length > 0 && listCustomer.map((customer,index) => {
                    return  index >= pagination.start && index <= pagination.end && (
                        <tr key = {customer.id} className="tableAdmin__tr">
                            <td className="tableAdmin__td">{customer.id}</td>
                            <td className = "tableAdmin__td">
                                <img className = "tableAdmin__img" src = {customer.avatar} alt = "Customer"/>
                            </td>
                            <td className="tableAdmin__td">{customer.name}</td>
                            <td className="tableAdmin__td">{customer.birthday}</td>
                            <td className="tableAdmin__td">{customer.email}</td>
                            <td className="tableAdmin__td">{customer.phoneNumber}</td>
                            <td className="tableAdmin__td">{customer.dept}</td>
                            <td className="tableAdmin__td">
                                <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button className="tableAdmin__btn-child pe-1" onClick={() => handleEditCustomer(customer.id)}>
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button onClick={() => handleDeleteCustomer(customer.id)} className="tableAdmin__btn-child tableAdmin__btn-child-danger ps-1">
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
            <PaginationAdmin arrData = {customers} onChangePage={(start,end) => handleChangePagination(start,end)}/>
        </>
    );
}

export default CustomerTable;