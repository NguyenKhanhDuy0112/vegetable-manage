import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";
import TableAdmin from "../../../../shared/components/TableAdmin";

function CategoryTable({ categories, onEditCategory, onPublished, onDeleteCategory }) {

    const [pagination, setPagination] = useState({start: 0, end: 0})

    const handleEditCategory = (id) => {
        onEditCategory(id)
    }

    const handleChangePublished = (id, published) => {
        onPublished(id, published === 0 ? 1 : 0)
    }

    const handleDeleteCategory = id => {
        onDeleteCategory(id)
    }

    const handleChangePagination = (start, end) => {
        setPagination({start: start - 1, end  : end - 1})
    }

    return (
        <>
            <TableAdmin rows={["#", "id", "icon", "type", "published", "action"]}>
                {categories.length > 0 && categories.map((category, index) => {
                    return index >= pagination.start && index <= pagination.end &&   (
                        <tr key={category.id} className="tableAdmin__tr">
                            <td className="tableAdmin__td">{index + 1}</td>
                            <td className="tableAdmin__td">{category.id}</td>
                            <td className="tableAdmin__td">
                                <img  src={category.image} className="tableAdmin__img" alt="ICON" />
                            </td>
                            <td className="tableAdmin__td">{category.name}</td>
                            <td className="tableAdmin__td">
                                <div className="d-flex justify-content-center">
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input cursor-pointer"
                                            type="checkbox"
                                            id="flexSwitchCheckChecked"
                                            checked={category.published}
                                            onChange={() => handleChangePublished(category.id, category.published)}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="tableAdmin__td">
                                <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button
                                            className="tableAdmin__btn-child pe-1"
                                            onClick={() => handleEditCategory(category.id)}
                                        >
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button
                                            onClick={() => handleDeleteCategory(category.id)}
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
            <PaginationAdmin arrData={categories} onChangePage={handleChangePagination} />

        </>
    );
}

export default CategoryTable;