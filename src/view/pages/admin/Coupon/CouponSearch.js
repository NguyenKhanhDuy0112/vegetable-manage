import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import CouponTable from "./CouponTable";
import { Button, Modal } from "react-bootstrap";
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import couponsService from "../../../../services/couponsService";
import { useFormik } from "formik";
import * as Yup from "yup"
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";

function CouponSearch() {
    const [show, setShow] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [id, setId] = useState(0)
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        handleLoadData()
    }, [])

    const handleLoadData = () => {
        couponsService.list().then(res => setCoupons(res.data))
    }

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            code: "",
            percent: 0,
            startDate: "",
            endDate: "",
            status: 1,
        },
        validationSchema: Yup.object({
            id: Yup.string().required("This is field required.").max(10, "Must be <= 10 character."),
            name: Yup.string().required("This is field required.").max(50, "Must be <= 50 character."),
            code: Yup.string().required("This is field required.").max(50, "Must be <= 50 character."),
            percent: Yup.number("This field must be numeric.").required("This is field required.").typeError('This field must be number.').min(1, "Percent must be > 0.").max(101, "Percent must be <= 100."),
            startDate: Yup.date().required("This is field required."),
            endDate: Yup.date().required("This is field required.")
        }),
        onSubmit: (values) => {
            handleSubmitForm(values)
        }
    })


    const handleModalDeleteClose = () => setShowModalDelete(false)

    const handleModalDeleteShow = (id) => {
        formik.setValues(prev => ({ ...prev, id: id }))
        setShowModalDelete(true)
    }

    const handleModalClose = () => setShow(false)

    const handleModalShow = async (id) => {
        if (id !== "") {
            await couponsService.get(id).then(res => {
                if (!res.errorMessage) {
                    formik.setValues(res.data)
                    console.log('Formik: ', formik.values)
                }
                setId(1)
            })

        }
        else {
            formik.resetForm()
            setId(0)
        }
        
        setShow(true)
    }

    const handleSubmitForm = (data) => {
        // const startDate = new Date(data.startDate)
        // const endDate = new Date(data.endDate)
        // const today = new Date()
        // endDate > startDate && endDate > today ? data.status = 1 : data.status = 0
        if (id === 0) {
            couponsService.add(`id=${data.id}&name=${data.name}&product-type=CATE_001&percent=${data.percent}&code=${data.code}&status=${data.status}&start-date=${data.startDate}&end-date=${data.endDate}`).then(res => {
                if (!res.errorMessage) {
                    toast.success("Add successfully!")
                    handleLoadData()
                }
                else {
                    toast.error(res.errorMessage)
                }
            })
        }
        else {
            couponsService.update(`id=${data.id}&name=${data.name}&product-type=&percent=${data.percent}&code=${data.code}&status=${data.status}&start-date=${data.startDate}&end-date=${data.endDate}`).then(res => {
                if (!res.errorMessage) {
                    toast.success("Update successfully!")
                    handleLoadData()
                }
                else {
                    toast.error(res.errorMessage)
                }
            })
        }

        handleModalClose()
    }

    const handleSearch = e => {
        const value = e.target.value.toLowerCase()
        if (value === "") {
            handleLoadData()
        }
        else {
            let data = []
            couponsService.list().then(res => {
                data = res.data
                const resultSearch = data.filter((cou) => {
                    return (cou.id.toLowerCase().includes(value)) || (cou.name.toLowerCase().includes(value)) || (cou.code.toLowerCase().includes(value))
                })
                setCoupons(resultSearch);
            })
        }
    }

    const handleDeleteCoupon = () => {
        couponsService.delete(formik.values.id).then(res => {
            if (!res.errorMessage) {
                toast.success("Delete successfully!")
                handleLoadData()
            }
            else {
                toast.error("Delete failed!")
            }
        })
        handleModalDeleteClose()
    }

    return (
        <>
            <div className="searchAdmin p-3 mb-3">
                <div className="row g-3">
                    <div className="col-lg-10 col-md-9">
                        <input placeholder="Search by coupon code/name" onChange={handleSearch} type="search" className="searchAdmin__input" />
                    </div>
                    <div className="col-md">
                        <button className="searchAdmin__btn" onClick={() => handleModalShow("")}>
                            <HiOutlinePlus className="me-2" />Add Coupon
                        </button>
                    </div>
                </div>
            </div>
            <CouponTable
                coupons={coupons}
                onDeleteCoupon={(id) => handleModalDeleteShow(id)}
                onEditCoupon={(id) => handleModalShow(id)}
            />

            <Modal show={showModalDelete} centered onHide={handleModalDeleteClose}>
                <Modal.Body>
                    <p className="text-center text-danger fs-3"><FiTrash2 /></p>
                    <h5 className="text-center modal__text-head mb-1">Are You Sure! Want to Delete This Item?</h5>
                    <p className="text-center modal__text-sub mb-0">Do you really want to delete this item? You can't view this in your list anymore if you delete!</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <button className="btn modal__btn-cancel me-1" onClick={handleModalDeleteClose}>No, Keep It</button>
                        <button type="button" className="btn btn-success modal__btn-delete ms-1" onClick={handleDeleteCoupon}>Yes, Delete It</button>
                    </div>
                </Modal.Footer>
            </Modal>


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
                            {id === 0 ? "Add" : "Update"} Coupon
                        </h6>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ maxHeight: "70vh", height: "auto", overflowY: "scroll" }}>
                    <InputAdmin
                        placeholder="ID..."
                        readOnly = {id === 1 ? true : false}
                        label="Coupon ID"
                        id="couponId"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('id')}
                        err={formik.touched.id && formik.errors.id}
                        errMessage={formik.errors.id}
                        input
                    />
                    <InputAdmin
                        placeholder="Name..."
                        label="Coupon Name"
                        id="couponName"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('name')}
                        err={formik.touched.name && formik.errors.name}
                        errMessage={formik.errors.name}
                        input
                    />
                    <InputAdmin
                        placeholder="Coupon Code..."
                        label="Coupon Code"
                        id="code"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('code')}
                        err={formik.touched.code && formik.errors.code}
                        errMessage={formik.errors.code}
                        input
                    />
                     <InputAdmin
                        placeholder="Percent..."
                        label="Percent"
                        id="percent"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('percent')}
                        err={formik.touched.percent && formik.errors.percent}
                        errMessage={formik.errors.percent}
                        input
                    />
                    <InputAdmin
                        placeholder="Start Date"
                        label="Start Date"
                        id="startDate"
                        type = "date"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('startDate')}
                        err={formik.touched.startDate && formik.errors.startDate}
                        errMessage={formik.errors.startDate}
                        input
                    />
                    <InputAdmin
                        placeholder="End Date"
                        label="End Date"
                        id="endDate"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('endDate')}
                        err={formik.touched.endDate && formik.errors.endDate}
                        errMessage={formik.errors.endDate}
                        type = "date"
                        input
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="success" disabled={!formik.dirty || !formik.isValid}
                        onClick={formik.handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CouponSearch;