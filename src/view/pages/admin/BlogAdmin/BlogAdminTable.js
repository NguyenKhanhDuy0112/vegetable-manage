import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";
import TableAdmin from "../../../../shared/components/TableAdmin";

function BlogAdminTable({ blogs, onEditBlog, onDeleteBlog }) {
    const [pagination, setPagination] = useState({start: 0, end: 0})

    const handleEditBlog = (id) => {
        onEditBlog(id)
    }

    const handleDeleteBlog = id => {
        onDeleteBlog(id)
    }

    const handleChangePagination = (start, end) => {
        setPagination({start: start - 1, end  : end - 1})
    }

    return (
        <article>
            <TableAdmin
                rows={["#", "Image", "Topic", "Title", "Date", "action"]}
            >
                {blogs.length > 0 && blogs.map((blog, index) => {
                    return index >= pagination.start && index <= pagination.end &&(

                        <tr key={blog.id} className="tableAdmin__tr">
                            <td className="tableAdmin__td">
                                {index + 1}
                            </td>
                            <td className="tableAdmin__td">
                                <img src={blog.image} width = "70" height= "70" className="img-fluid" alt="" />
                            </td>
                            <td className="tableAdmin__td">
                                {blog.type}
                            </td>
                            <td className="tableAdmin__td">{blog.name}</td>
                            <td className="tableAdmin__td">{blog.date}</td>

                            <td className="tableAdmin__td">
                                <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button
                                            className="tableAdmin__btn-child pe-1"
                                            onClick={() => handleEditBlog(blog.id)}
                                        >
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button
                                            onClick={() => handleDeleteBlog(blog.id)}
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
            <PaginationAdmin arrData={blogs} onChangePage={handleChangePagination} />
        </article>
    );
}

export default BlogAdminTable;