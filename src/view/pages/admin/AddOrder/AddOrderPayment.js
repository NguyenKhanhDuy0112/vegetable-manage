import { useEffect, useState, memo } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa"
import customersService from "../../../../services/customersService";
import productService from "../../../../services/productService";
import billsService from "../../../../services/billsService";
import billDetailService from "../../../../services/billDetail";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import UploadFile from "../../../../shared/components/UploadFile";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddOrderPayment({ listOrder, total, note }) {
    const [show, setShow] = useState(false)
    const [moneyPay, setMoneyPay] = useState(0)
    const [invoice, setInvoice] = useState({total: 0})
    const [customers, setCustomers] = useState([])
    const [products, setProducts] = useState([])
    const [searchCustomers, setSearchCustomers] = useState([])
    const [valueSearch, setValueSearch] = useState({ id: 0, value: "" })
    const [activeSearch, setActiveSearch] = useState(-1)

    useEffect(() => {
        handleLoadCustomer()
        handleLoadProduct()
    }, [])

    const handleLoadCustomer = () => {
        customersService.list().then(res => setCustomers(res.data))
    }

    const handleLoadProduct = () => {
        productService.list().then(res => setProducts(res.data))
    }

    useEffect(() => {
        setInvoice(prev => ({...prev, orders: listOrder}))
    },[listOrder])

    useEffect(() => {
        setInvoice(prev => ({...prev, total: total}))
    },[total])

    useEffect(() => {
        setInvoice(prev => ({...prev, note: note}))
    },[note])

    window.onkeypress = (e) => { e.charCode === 13 && handleClickCustomer(activeSearch, { customerId: 0 }) }

    const handleSearchCustomer = e => {
        const value = e.target.value.toLowerCase()
        const resultSearch = customers.filter((customer) => {
            return value !== "" && (customer.name.toLowerCase().includes(value) || customer.id.toLowerCase().includes(value))
        })
        setValueSearch({ ...valueSearch, value })
        setActiveSearch(-1)
        setSearchCustomers(resultSearch)
    }

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            birthday: "",
            email: "",
            phoneNumber: "",
            image: [],
            dept: 0,
            address: "",
        },
        validationSchema: Yup.object({
            id: Yup.string().required("This is field required.").max(10, "Must be <= 10 character."),
            name: Yup.string().required("This is field required.").max(50, "Must be <= 50 character."),
            birthday: Yup.date().required("This is field required."),
            email: Yup.string().required("This is fiels required.").email("This field must be email.").max(100, "Must be <= 100 characters."),
            phoneNumber: Yup.string().required("This is field required.").min(10, "Must be >= 10 character."),
            address: Yup.string().required("This is field required.").max(100, "Must be <= 100 character."),
        }),
        onSubmit: (values) => {
            handleSubmitForm(values)
        }
    })


    const handleModalClose = () => setShow(false)

    const handleModalShow = async (id) => {
        formik.resetForm()
        setShow(true)
    }

    const handleClickCustomer = (idx, customer) => {
        if (valueSearch.value !== "") {
            let tempCustomer = customer
            if (idx !== -1) {
                const findCustomerByIdx = searchCustomers.find((product, index) => index === idx)
                if (findCustomerByIdx) {
                    tempCustomer = findCustomerByIdx
                }
            }

            if (tempCustomer.id !== 0) {
                setInvoice(prev => ({...prev, nameCustomer: tempCustomer.name, customerId: tempCustomer.id}))
                setValueSearch({ id: tempCustomer.id, value: `${tempCustomer.name} ${tempCustomer.id}` })
            }
        }
        setSearchCustomers([])
    }


    const handleKeyDownSearch = e => {
        if (valueSearch.value !== "") {
            if (e.keyCode === 40) {
                setActiveSearch(prev => prev > searchCustomers.length - 2 ? 0 : prev + 1)
            }
            if (e.keyCode === 38) {
                setActiveSearch(prev => (prev <= 0) ? searchCustomers.length - 1 : prev - 1)
            }
        }
    }

    const handleCreateImage = async (image) => {
        let postImage
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'twbtlhnv');
        postImage = await axios.post('https://api.cloudinary.com/v1_1/cloudprojectbackend/image/upload', formData)
        return postImage;
    }

    const handleSubmitForm = (data) => {
        console.log("Data: ", data)
         handleCreateImage(data.image[0].source).then(res => {
             data.image = res.data.url
             console.log("data: ", data)
             customersService.add(`id=${data.id}&name=${data.name}&date=${data.birthday}&phone=${data.phoneNumber}&email=${data.email}&avatar=${data.image}&address=${data.address}&dept=${data.dept}`).then(res => {
                if (!res.errorMessage) {
                    toast.success("Add customer successfully!")
                    handleLoadCustomer()
                }
                else {
                    toast.error(res.errorMessage)
                }
            })
 
         })
 
         handleModalClose()
     }

    const handleSubmit = async () => {
        const today = new Date()
        const currentDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        
        await billsService.add(`bill-id=${invoice.billId}&provider-id=&customer-id=${invoice.customerId}&coupon-id=C_007&bill-type=X&bill-description=${invoice.note}&bill-date=${currentDate}&bill-status=pending&bill-method=${invoice.method}`)
        invoice.orders.forEach(async order => {
            await billDetailService.add(`bill-id=${invoice.billId}&sku=${order.sku}&quantity=${order.quantity}&price=${order.price}`)
            
            const product = await  products.find(pro => pro.sku === order.sku)
            product.quantity = await product.quantity - order.quantity
            await productService.update(`id=${product.sku}&des-id=null&title=${product.title}&price=${product.price}&sale_price=${product.salePrice}&description=${product.description}&category_id=${product.category}&quantity=${product.quantity}&unit=${product.unit}&published=${product.published}&image=${product.image}&tag=Vegetable`)
        });

        toast.success("Order Successfully!")
    }

    return (
        <>
            <div className="addOrder__content-calc p-3">
                <div>
                    <div className="row mb-3 align-items-center">
                        <div className="col">
                            <div className="position-relative d-flex align-items-center justify-content-center addOrder__content-calc-customer">
                                {valueSearch.id === 0 &&
                                    <input
                                        placeholder="Search customer"
                                        className="form-control addOrder__header-search addOrder__content-calc-customer-search"
                                        type="search"
                                        onKeyDown={handleKeyDownSearch}
                                        onChange={handleSearchCustomer}
                                    />
                                }
                                {valueSearch.id !== 0 &&
                                    <div className="d-flex form-control addOrder__header-search addOrder__content-calc-customer-search justify-content-around align-items-center w-100 cursor-pointer">
                                        <small><FaUserAlt /></small>
                                        <small>{valueSearch.value}</small>
                                        <small
                                            onClick={() => setValueSearch({ id: 0, value: "" })}
                                        >
                                            <IoCloseSharp />
                                        </small>
                                    </div>
                                }
                                <ul className="list-unstyled m-0 addOrder__header-list-search p-2">
                                    {searchCustomers.map((customer, index) => {
                                        return (
                                            <li
                                                key={customer.id}
                                                onClick={() => handleClickCustomer(-1, customer)}
                                                className={`addOrder__header-list-search-item ${activeSearch === index ? "active" : ""}`}
                                            >
                                                <div className="addOrder__header-list-search-item-customer p-2">
                                                    <img
                                                        src={customer.avatar}
                                                        alt=""
                                                        className="addOrder__header-list-search-item-customer-img"
                                                    />
                                                    <div className="ms-2">
                                                        <h6 className="addOrder__header-list-search-item-customer-name">{customer.name}</h6>
                                                        <small className="d-block addOrder__header-list-search-item-customer-id">{customer.id}</small>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                    {searchCustomers.length === 0 &&
                                        <p className="text-center mb-0 p-2 text-secondary">No results were found.</p>
                                    }
                                </ul>
                                {valueSearch.id === 0 && <button onClick={handleModalShow} className="addOrder__content-calc-customer-btn"><AiOutlinePlus /></button>}
                            </div>
                        </div>
                        <div className="col-auto">
                            <p className="mb-0 addOrder__content-calc-date">18/1/2022</p>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <p className="mb-0 addOrder__content-calc-title">
                                Total amount
                            </p>
                        </div>
                        <div className="col-auto">
                            <p className="mb-0 addOrder__content-calc-price">${invoice.total}</p>
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col">
                            <p className="mb-0 addOrder__content-calc-title">Bill ID</p>
                        </div>
                        <div className="col-5">
                        <input onChange={(e) => setInvoice(prev => ({...prev, billId: e.target.value}))} className="form-control addOrder__content-calc-input-bt" />
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col">
                            <p className="mb-0 addOrder__content-calc-title fw-bold">
                                Customer need to pay
                            </p>
                        </div>
                        <div className="col-auto">
                            <p className="mb-0 addOrder__content-calc-price addOrder__content-calc-price-primary">${invoice.total}</p>
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col">
                            <p className="mb-0 addOrder__content-calc-title fw-bold">
                                Paying Customer
                            </p>
                        </div>
                        <div className="col-5">
                            <input onChange={(e) => setMoneyPay(e.target.value)} value = {moneyPay} className="form-control addOrder__content-calc-input-bt" />
                        </div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <div className="col">
                            <p className="mb-0 addOrder__content-calc-title fw-bold">
                                Excess Money
                            </p>
                        </div>
                        <div className="col-5">
                            <p className="mb-0 text-end addOrder__content-calc-price addOrder__content-calc-price-primary">${(moneyPay > 0 ? moneyPay -  invoice.total  : 0).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-6">
                            <div className="form-check">
                                <input onChange={() => setInvoice(prev => ({...prev, method: "cash"}))} className="form-check-input" type="radio" name="paying" id="cash" />
                                <label className="form-check-label cursor-pointer" htmlFor="cash"><small>Cash</small></label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check">
                                <input onChange={() => setInvoice(prev => ({...prev, method: "transfer"}))} className="form-check-input" type="radio" name="paying" id="transfer" />
                                <label className="form-check-label cursor-pointer" htmlFor="transfer"><small>Transfer</small></label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check">
                                <input onChange={() => setInvoice(prev => ({...prev, method: "credit card"}))} className="form-check-input" type="radio" name="paying" id="card" />
                                <label className="form-check-label cursor-pointer" htmlFor="card"><small>Credit card</small></label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check">
                                <input onChange={() => setInvoice(prev => ({...prev, method: "COD"}))} className="form-check-input" type="radio" name="paying" id="card" />
                                <label className="form-check-label cursor-pointer" htmlFor="card"><small>COD</small></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary w-100 p-3" onClick={handleSubmit}>
                        <h6 className="mb-0">Payment</h6>
                    </button>
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
                           Add Customer
                        </h6>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ maxHeight: "70vh", height: "auto", overflowY: "scroll" }}>
                    <div className="row align-items-center mb-3 g-3">
                        <div className="col-md-4 col-lg-3">
                            <label className="mb-0 fs-6">Image</label>
                        </div>
                        <div className="col-md">
                            <UploadFile
                                file={formik.values.image}
                                maxFile={1}
                                onChangeFile={(data) => {
                                    formik.setValues(prev => ({...prev, image:data}))
                                 }}
                            />
                        </div>
                    </div>
                    <InputAdmin
                        placeholder="Customer ID..."
                        label="Customer ID"
                        id="id"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('id')}
                        err={formik.touched.id && formik.errors.id}
                        errMessage={formik.errors.id}
                        input
                    />
                    <InputAdmin
                        placeholder="Name"
                        label="Name"
                        id="title"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('name')}
                        err={formik.touched.name && formik.errors.name}
                        errMessage={formik.errors.name}
                        input
                    />
                    <InputAdmin
                        placeholder="Date"
                        label="Date Of Birth"
                        id="dateOfBirth"
                        type="date"
                        labelClass="col-md-4 col-lg-3"
                        input
                        frmField={formik.getFieldProps('birthday')}
                        err={formik.touched.birthday && formik.errors.birthday}
                        errMessage={formik.errors.birthday}
                    />
                    <InputAdmin
                        placeholder="Email"
                        type="email"
                        labelClass="col-md-4 col-lg-3"
                        label="Email"
                        id="email"
                        frmField={formik.getFieldProps('email')}
                        err={formik.touched.email && formik.errors.email}
                        errMessage={formik.errors.email}
                        input
                    />
                    <InputAdmin
                        placeholder="Phone Number..."
                        labelClass="col-md-4 col-lg-3"
                        label="Phone Number"
                        id="phoneNumber"
                        frmField={formik.getFieldProps('phoneNumber')}
                        err={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        errMessage={formik.errors.phoneNumber}
                        input
                    />
                    <InputAdmin
                        placeholder="Address..."
                        labelClass="col-md-4 col-lg-3"
                        label="Address"
                        id="address"
                        frmField={formik.getFieldProps('address')}
                        err={formik.touched.address && formik.errors.address}
                        errMessage={formik.errors.address}
                        rows={3}
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
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default memo(AddOrderPayment);