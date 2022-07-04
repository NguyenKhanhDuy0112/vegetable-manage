import Status from "../../../../shared/components/Status/Status";
import TableAdmin from "../../../../shared/components/TableAdmin";
import { AiOutlineEye } from 'react-icons/ai'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { memo, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PaginationAdmin from "../../../../shared/components/paginationAdmin/PaginationAdmin";
function ProductTable({ products, onChangePublished, onUpdateProduct, onDeleteProduct }) {

    const [productTable, setProductTable] = useState([])
    const [pagination , setPagination] = useState({start: 0, end: 0});

    useEffect(() => {
        setProductTable(products)
    },[products])

    const navigate = useNavigate();

    const handleChangePublish = (id, published) => {
        onChangePublished(id, published === 0 ? 1 : 0)
    }

    const handleUpdateProduct = (id) => {
        onUpdateProduct(id)
    }
    const handleDeleteProduct = (id) => {
        onDeleteProduct(id)
    }
    
    const handleChangePageInfo = (id) => {
        navigate(`/admin/products/${id}`)
    }

    const handleChangePagination = (start, end) => {
        setPagination({start: start - 1, end  : end - 1})
    }

    return (
        <>
            <TableAdmin
                rows={["#","Sku", "Product name", "category", "Price", "Stock", "Status", "Discount", "Details", "published", "Actions"]}
            >
                {productTable.length > 0 &&productTable.map((product,index) => {
                    return index >= pagination.start && index <= pagination.end &&  (
                        <tr key= {product.sku} className="tableAdmin__tr">
                            <td className = "tableAdmin__td">{index + 1}</td>
                            <td className="tableAdmin__td">{product.sku}</td>
                            <td className="tableAdmin__td">
                                <img src={product.image} className="tableAdmin__img" alt="Product" />
                                <span className="ms-1">{product.title}</span>
                            </td>
                            <td className="tableAdmin__td">{product.category}</td>
                            <td className="tableAdmin__td text-end">${product.price}</td>
                            <td className="tableAdmin__td text-end">{product.quantity}</td>
                            <td className="tableAdmin__td">
                                <Status 
                                    status={parseInt(product.quantity) <= 0 ? "Sold out" : "selling"} 
                                    type={parseInt(product.quantity) <= 0? "cancel" : "delivered"} 
                                />
                            </td>
                            <td className="tableAdmin__td">{product.salePrice}%</td>
                            <td className="tableAdmin__td">
                                <div className="tableAdmin__container">
                                    <div className="tableAdmin__btn text-center">
                                        <button className="tableAdmin__btn-child" onClick={() => handleChangePageInfo(product.sku)}>
                                            <div className="tableAdmin__btn-notify">Details</div>
                                            <AiOutlineEye />
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="tableAdmin__td">
                                <div className="form-check form-switch d-flex justify-content-center align-items-center">
                                    <input 
                                        className="form-check-input cursor-pointer" 
                                        type="checkbox"
                                        checked = {product.published}
                                        onChange={() => handleChangePublish(product.sku, product.published)}
                                        id="flexSwitchCheckChecked" 
                                    />
                                </div>
                            </td>
                            <td className="tableAdmin__td">
                                <div className="tableAdmin__btn-container">
                                    <div className="tableAdmin__btn">
                                        <button 
                                            className="tableAdmin__btn-child pe-1" 
                                            onClick={() => handleUpdateProduct(product.sku)}
                                        >
                                            <div className="tableAdmin__btn-notify">Edit</div>
                                            <FiEdit />
                                        </button>
                                    </div>
                                    <div className="tableAdmin__btn">
                                        <button 
                                            onClick={() => handleDeleteProduct(product.sku)}
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
            <PaginationAdmin arrData={products} onChangePage={handleChangePagination} />

        </>
    );
}

export default memo(ProductTable);