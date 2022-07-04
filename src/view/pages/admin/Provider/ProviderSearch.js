import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi";
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import ProviderTable from "./ProviderTable";
import * as Yup from "yup";
import providersService from "../../../../services/providersService";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

function ProviderSearch() {
    const [providers, setProviders] = useState([])
    const [show, setShow] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        handleLoadData()
    }, [])

    const handleLoadData = () => {
        providersService.list().then(res => setProviders(res.data))
    }

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: "",
            phoneNumber: "",
            address: "",
        },
        validationSchema: Yup.object({
            id: Yup.string().required("This is field required.").max(10, "Must be <= 10 character."),
            name: Yup.string().required("This is field required.").max(50, "Must be <= 50 character."),
            address: Yup.string().required("This is field required.").max(100, "Must be <= 100 characters."),
            email: Yup.string().required("This is fiels required.").email("This field must be email.").max(100, "Must be <= 100 characters."),
            phoneNumber: Yup.string().required("This is field required.").min(10, "Must be >= 10 character."),
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
            await providersService.get(id).then(res => {
                if (!res.errorMessage) {
                    formik.setValues(({ ...res.data, image: [res.data.avatar] }))
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
        if (id === 0) {
            providersService.add(`id=${data.id}&name=${data.name}&address=${data.address}&phone=${data.phoneNumber}&email=${data.email}`).then(res => {
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
            providersService.update(`id=${data.id}&name=${data.name}&address=${data.address}&phone=${data.phoneNumber}&email=${data.email}`).then(res => {
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
            providersService.list().then(res => {
                data = res.data
                const resultSearch = data.filter((provider) => {
                    return (provider.id.toLowerCase().includes(value)) || (provider.name.toLowerCase().includes(value))
                })
                setProviders(resultSearch);
            })
        }
    }

    const handleDeleteProvider = () => {
        providersService.delete(formik.values.id).then(res => {
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
                    <div className="col-xl-10 col-md-9">
                        <input
                            placeholder="Search by id/name provider"
                            type="search"
                            onChange={handleSearch}
                            className="searchAdmin__input"
                        />
                    </div>
                    <div className="col-xl-2 col-md-3">
                        <button className="searchAdmin__btn" onClick={() => handleModalShow("")}>
                            <HiOutlinePlus className="me-2" />Add Customer
                        </button>
                    </div>
                </div>
            </div>

            <ProviderTable
                providers={providers}
                onDeleteProvider={(id) => handleModalDeleteShow(id)}
                onEditProvider={(id) => handleModalShow(id)}
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
                        <button type="button" className="btn btn-success modal__btn-delete ms-1" onClick={handleDeleteProvider}>Yes, Delete It</button>
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
                            {id === 0 ? "Add" : "Update"} Provider
                        </h6>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ maxHeight: "70vh", height: "auto", overflowY: "scroll" }}>
                    <InputAdmin
                        placeholder="Provider ID..."
                        label="Provider ID"
                        id="id"
                        readOnly = {id === 1? true: false}
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('id')}
                        err={formik.touched.id && formik.errors.id}
                        errMessage={formik.errors.id}
                        input
                    />
                    <InputAdmin
                        placeholder="Name"
                        label="Name"
                        id="name"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('name')}
                        err={formik.touched.name && formik.errors.name}
                        errMessage={formik.errors.name}
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

export default ProviderSearch;