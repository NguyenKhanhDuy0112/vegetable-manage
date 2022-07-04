import { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";
import TableAdmin from "../../../../shared/components/TableAdmin";

function ProviderTable({ providers, onEditProvider, onDeleteProvider }) {
    const [listProvider, setListProvider] = useState([])
    const [pagination , setPagination] = useState({start: 0, end: 0});

    useEffect(() => setListProvider(providers), [providers])

    const handleDeleteProvider = (id) => onDeleteProvider(id)

    const handleEditProvider = (id) => onEditProvider(id)

    
    const handleChangePagination = (start, end) => {
        setPagination({start: start - 1, end  : end - 1})
    }

    return (
        <>
            <TableAdmin
                rows={["Id", "Name", "Email", "Phone Number", "Address", "Actions"]}
            >

                {listProvider.length > 0 && listProvider.map((provider,index) => {
                    return index >= pagination.start && index <= pagination.end && (
                        <tr key={provider.id} className="tableAdmin__tr">
                            <td className="tableAdmin__td">{provider.id}</td>
                            <td className="tableAdmin__td">{provider.name}</td>
                            <td className="tableAdmin__td">{provider.email}</td>
                            <td className="tableAdmin__td">{provider.phoneNumber}</td>
                            <td className="tableAdmin__td">{provider.address}</td>
                            <td className="tableAdmin__td">
                                <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child pe-1" 
                                            onClick={() => handleEditProvider(provider.id)}
                                        >
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button 
                                            onClick={() => handleDeleteProvider(provider.id)}
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
            <PaginationAdmin arrData = {listProvider} onChangePage={(start,end) => handleChangePagination(start,end)}/>
        </>
    );
}

export default ProviderTable;