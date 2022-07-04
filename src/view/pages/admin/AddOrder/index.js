import { IoClose } from "react-icons/io5"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { RiBillLine } from "react-icons/ri"
import TableAdmin from "../../../../shared/components/TableAdmin";
import { FiTrash2 } from "react-icons/fi";
import AddOrderPayment from "./AddOrderPayment";
import CardSearchAdmin from "../../../../shared/components/Card/CardSearchAdmin";
import { useEffect, useState, useRef } from "react";
import productService from "../../../../services/productService";

function AddOrder() {
    const [data, setData] = useState([])
    const [dataSearch, setDataSearch] = useState([])
    const [orders, setOrders] = useState([])
    const [valueSearch, setValueSearch] = useState('')
    const [activeSearch, setActiveSearch] = useState(-1)
    const [totalAmount, setTotalAmount] = useState(0)
    const inputSearch = useRef('')
    const [note, setNote] = useState('')

    useEffect(() => {
        handleLoadProducts()
    }, [])


    const handleLoadProducts = () => {
        productService.list().then(res => setData(res.data))
    }

    window.onkeypress = (e) => {e.charCode === 13 && handleAddProduct(activeSearch, 0)}

    const handleSearchProduct = e => {
        const value = e.target.value.toLowerCase()
        const resultSearch = data.filter((product) => {
            return value !== "" && (product.title.toLowerCase().includes(value) || product.sku.toLowerCase().includes(value))
        })
        setActiveSearch(-1)
        setValueSearch(e.target.value.toLowerCase())
        setDataSearch(resultSearch)
    }

    const handleAddProduct = (idx, id) => {
        let tempId = id;
        if(idx !== -1){
            const findId = dataSearch.find((product,index) => index === idx)
            if(findId){
                tempId = findId.id
            }
        }

        if (tempId !== 0) {
            const order = data.find(product => product.sku === tempId)
            const test = orders.find(product => product.sku === tempId)
            const findIdx = orders.findIndex(product => product.sku === tempId)
            const newOrders = orders
            if (test) {
                newOrders.splice(findIdx, 1, 
                    { 
                        ...test, 
                        quantity: test.quantity + 1 , 
                        subTotal: (order.price * (test.quantity + 1)) - (order.price * (test.quantity + 1) * (order.salePrice / 100))
                    }
                )
            }
            else {
               
                newOrders.push(
                    { 
                        ...order, 
                        quantity: 1, 
                        subTotal: (order.price * 1) - (order.price * 1 * (order.salePrice / 100))
                    }
                )
            }
            
            inputSearch.current.focus()
            handleCalcTotal(newOrders)
            setValueSearch('')
            setDataSearch([])
            setOrders(newOrders)
        }
    }

    const handleDeleteProduct = id => {
        const dataOrder = orders.filter(order => order.sku !== id)
        handleCalcTotal(dataOrder)
        setOrders(dataOrder)
    }

    const handleKeyDownSearch = e => {
        if (e.keyCode === 40) {
            setActiveSearch(prev => prev > dataSearch.length - 2 ? 0 : prev + 1)
        }
        if (e.keyCode === 38) {
            setActiveSearch(prev => (prev <= 0) ? dataSearch.length - 1 : prev - 1)
        }
    }

    const handleCalcTotal = (orders) => {
        let total = 0;
        if(orders.length > 0){
            total = orders.reduce((prev, current) => prev + current.subTotal, 0)
        }
       setTotalAmount(total.toFixed(2))
    }

    const handleChangeQuantity = (e, index) => {
        let ordersChange = orders
        const newOrder = orders.find((order, idx) => idx === index)
        newOrder.quantity = parseInt(e.target.value === "" ? 0: e.target.value)
        newOrder.subTotal = (newOrder.price * newOrder.quantity) - (newOrder.price * newOrder.quantity * (newOrder.salePrice/100)) 
        ordersChange.splice(index, 1, newOrder)
        
        setOrders(ordersChange)
        handleCalcTotal(ordersChange)
    }


    return (
        <>
            <div className="addOrder">
                <div className="container">
                    <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Add Order</h6>
                    <div className="addOrder__header">
                        <div className="row align-items-center p-2 g-3 g-lg-1">
                            <div className="col-lg-4">
                                <div className="position-relative">
                                    <input
                                        type="search"
                                        value={valueSearch}
                                        ref={inputSearch}
                                        className="addOrder__header-search"
                                        placeholder="Search by id/name product"
                                        onKeyDown={handleKeyDownSearch}
                                        onChange={handleSearchProduct}
                                    />
                                    <ul className="list-unstyled m-0 addOrder__header-list-search p-2">
                                        {dataSearch.map((product, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => handleAddProduct(-1, product.sku)}
                                                    className={`addOrder__header-list-search-item ${activeSearch === index ? "active" : ""}`}
                                                >
                                                    <CardSearchAdmin
                                                        title={product.title}
                                                        quantity={product.quantity}
                                                        price={product.price}
                                                        code={product.sku}
                                                        img={product.image}
                                                    />
                                                </li>
                                            )
                                        })}
                                        {dataSearch.length === 0 &&
                                            <p className="text-center mb-0 p-2 text-secondary">No results were found.</p>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg">
                                <ul className="addOrder__header-list list-unstyled m-0">
                                    <li className="addOrder__header-list-item">
                                        <span className="me-2">
                                            <RiBillLine />
                                        </span>

                                        Invoice 1
                                        <span
                                            className="addOrder__header-list-item-icon ms-2"
                                        >
                                            <IoClose />
                                        </span>
                                    </li>
                                    <li className="addOrder__header-list-add ms-2">
                                        <AiOutlinePlusCircle />
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="addOrder__content p-2">
                        <div className="row addOrder__content-child">
                            <div className="col-lg-8" style={{ height: "80vh" }}>
                                <div className="d-flex flex-column justify-content-between h-100">
                                    <div className="addOrder__content-table">
                                        <TableAdmin rows={["ID", "Name", "Unit", "Discount", "Quantity", "Price", "Subtotal", " "]}>
                                            {orders.length > 0 &&
                                                orders.map((order,index) => {
                                                    return (
                                                        <tr key={index} className="tableAdmin__tr">
                                                            <td className="tableAdmin__td">{order.sku}</td>
                                                            <td className="tableAdmin__td">{order.title}</td>
                                                            <td className="tableAdmin__td">{order.unit}</td>
                                                            <td className="tableAdmin__td">{order.discount}%</td>
                                                            <td className="tableAdmin__td">
                                                                <input type = "number" className="searchAdmin__input" value={order.quantity} onChange={(e) => handleChangeQuantity(e, index)}/>
                                                            </td>
                                                            <td className="tableAdmin__td">${order.price}</td>
                                                            <td className="tableAdmin__td">
                                                                ${(order.price * order.quantity) - (order.price * order.quantity * (order.salePrice / 100))}
                                                            </td>
                                                            <td className="tableAdmin__td">
                                                                <div className="tableAdmin__btn">
                                                                    <button
                                                                        onClick={() => handleDeleteProduct(order.id)}
                                                                        className="tableAdmin__btn-child tableAdmin__btn-child-danger ps-1"
                                                                    >
                                                                        <FiTrash2 />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </TableAdmin>
                                    </div>
                                    <div className="mb-2">
                                        <input onChange={(e) => setNote(e.target.value)} placeholder="Note..." className="form-control h-100" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg">
                                <AddOrderPayment listOrder = {orders} total = {totalAmount} note = {note}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddOrder;