import { IoClose } from "react-icons/io5"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { RiBillLine } from "react-icons/ri"
import TableAdmin from "../../../../shared/components/TableAdmin";
import { FiTrash2 } from "react-icons/fi";
import CardSearchAdmin from "../../../../shared/components/Card/CardSearchAdmin";
import { useEffect, useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import productService from "../../../../services/productService"
import AddImportPayment from "./AddImportPayment";
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import UploadFile from "../../../../shared/components/UploadFile";
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import categoriesService from "../../../../services/categoriesService";

function AddImport() {
    const [categories, setCategories] = useState([])
    const [show, setShow] = useState(false)
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
        handleLoadCategories()
    }, [])

    const handleLoadCategories = () => {
        categoriesService.list().then(res => setCategories(res.data))
    }

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

    const handleCreateImage = async (image) => {
        let postImage
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'twbtlhnv');
        postImage = await axios.post('https://api.cloudinary.com/v1_1/cloudprojectbackend/image/upload', formData)
        return postImage;
    }

    const formik = useFormik({
        initialValues: {
            category: "",
            descriptionDetail: "",
            title: "",
            description: "",
            unit: "",
            published: 1,
            quantity: 0,
            price: 0,
            salePrice: 0,
            tags: "",
            image: [],
            sku: ""
        },
        validationSchema: Yup.object({
            category: Yup.string().required("This is field required."),
            title: Yup.string().required("This field is required.").max(50, "Must be <= 50 characters."),
            description: Yup.string().required("This is field required.").max(200, "Must be <= 200 character."),
            unit: Yup.string().required("This is field required.").max(20, "Must be <= 20 characters"),
            price: Yup.number("This field must be numeric.").required("This is field required.").typeError('This field must be number.').min(1, "Price must be > 0.").max(1000000000, "Price must be < 1000000000."),
            salePrice: Yup.number("This field must be numeric.").required("This is field required.").typeError('This field must be number.').max(1000000000, "Sale Price must be < 1000000000."),
            sku: Yup.string().required("This is field required.").max(50, "Must be <= 50 characters"),
        }),

        onSubmit: (values) => {
            handleSubmitForm(values)
        }
    })

    const handleModalClose = () => setShow(false)

    const handleModalShow = () => {
        formik.resetForm()
        setShow(true)
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

    const handleSubmitForm = (data) => {
        handleCreateImage(data.image[0].source).then(res => {
            data.image = res.data.url
            productService.add(`id=${data.sku}&des-id=null&title=${data.title}&price=${data.price}&sale_price=${data.salePrice}&description=${data.description}&category_id=${data.category}&quantity=0&unit=${data.unit}&published=1&image=${data.image}&tag=Vegetable`).then(res => {
                if (!res.errorMessage) {
                    toast.success("Add product successfully!")
                    handleLoadProducts()
                }
                else {
                    toast.error(res.errorMessage)
                }
            })
        })
        
        handleModalClose()
    }


    return (
        <>
            <div className="addOrder">
                <div className="container">
                    <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Add Import</h6>
                    <div className="addOrder__header">
                        <div className="row align-items-center p-2 g-3 g-lg-1">
                            <div className="col-lg-4">
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        value={valueSearch}
                                        ref={inputSearch}
                                        className="addOrder__header-search"
                                        placeholder="Search by id/name product"
                                        onKeyDown={handleKeyDownSearch}
                                        onChange={handleSearchProduct}
                                    />
                                    <button onClick={handleModalShow} className="position-absolute top-0 end-0 addOrder__content-calc-customer-btn"><AiOutlinePlus /></button>
                                   
                                    <ul className="list-unstyled m-0 addOrder__header-list-search p-2">
                                        {dataSearch.map((product, index) => {
                                            return (
                                                <li
                                                    key={product.sku}
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
                                                        <tr key={order.sku} className="tableAdmin__tr">
                                                            <td className="tableAdmin__td">{order.sku}</td>
                                                            <td className="tableAdmin__td">{order.title}</td>
                                                            <td className="tableAdmin__td">{order.unit}</td>
                                                            <td className="tableAdmin__td">{order.salePrice}%</td>
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
                                                                        onClick={() => handleDeleteProduct(order.sku)}
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
                                <AddImportPayment listOrder = {orders} total = {totalAmount} note = {note}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleModalClose}
                backdrop="static"
                size="lg"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h6 className="modalAdmin__title mb-0">
                            Add Product
                        </h6>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ height: "70vh", overflowY: "scroll" }}>
                    <div className="row align-items-center mb-3 g-3">
                        <div className="col-md-4 col-lg-3">
                            <label className="mb-0 fs-6">Image</label>
                        </div>
                        <div className="col-md">
                            <UploadFile
                                file={formik.values.image}
                                maxFile={1}
                                onChangeFile={(data) => formik.setValues(prev => ({ ...prev, image: data }))}
                            />
                        </div>
                    </div>
                    <InputAdmin
                        placeholder="SKU..."
                        label="SKU"
                        id="sku"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('sku')}
                        err={formik.touched.sku && formik.errors.sku}
                        errMessage={formik.errors.sku}
                        input
                    />
                    <InputAdmin
                        placeholder="Product title/name"
                        label="Title/Name"
                        id="title"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('title')}
                        err={formik.touched.title && formik.errors.title}
                        errMessage={formik.errors.title}
                        input
                    />
                    <InputAdmin
                        placeholder="Product Type"
                        label="Product Type"
                        id="type"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('category')}
                        err={formik.touched.category && formik.errors.category}
                        errMessage={formik.errors.category}
                        options={categories.map(cate => ({ value: cate.id, name: cate.name }))}
                    />
                    <InputAdmin
                        placeholder="Unit"
                        labelClass="col-md-4 col-lg-3"
                        label="Unit(kg,pcs,..etc)"
                        id="unit"
                        frmField={formik.getFieldProps('unit')}
                        err={formik.touched.unit && formik.errors.unit}
                        errMessage={formik.errors.unit}
                        input
                    />
                    <InputAdmin
                        placeholder="Price..."
                        labelClass="col-md-4 col-lg-3"
                        label="Price"
                        id="price"
                        frmField={formik.getFieldProps('price')}
                        err={formik.touched.price && formik.errors.price}
                        errMessage={formik.errors.price}
                        input
                    />
                    <InputAdmin
                        placeholder="Sale price..."
                        labelClass="col-md-4 col-lg-3"
                        label="Sale price"
                        input
                        id="salePrice"
                        frmField={formik.getFieldProps('salePrice')}
                        err={formik.touched.salePrice && formik.errors.salePrice}
                        errMessage={formik.errors.salePrice}
                    />

                    <InputAdmin
                        placeholder="Description..."
                        label="Description"
                        id="description"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('description')}
                        err={formik.touched.description && formik.errors.description}
                        errMessage={formik.errors.description}
                        rows="3"
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button 
                        variant="success" 
                        disabled={!formik.dirty || !formik.isValid} 
                        onClick={formik.handleSubmit}
                    >Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddImport;