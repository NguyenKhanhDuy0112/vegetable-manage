import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import UploadFile from "../../../../shared/components/UploadFile";
import CategoryTable from "./CategoryTable";
import * as Yup from "yup"
import categoriesService from "../../../../services/categoriesService";
import { toast } from "react-toastify";
import axios from "axios";

function CategorySerch() {
    const [show, setShow] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [typeSort, setTypeSort] = useState('des')
    const [id, setId] = useState(0)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        handleLoadData()
    }, [])

    const handleLoadData = () => {
        categoriesService.list().then(res => setCategories(res.data))
    }

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            image: "",
            published: true,
        },
        validationSchema: Yup.object({
            id: Yup.string().required("This is field required.").max(10, "Must be <= 10 character."),
            name: Yup.string().required("This is field required.").max(50, "Must be <= 50 character.")
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
            await categoriesService.get(id).then(res => {
                if (!res.errorMessage) {
                    formik.setValues(({...res.data, image: [res.data.image]}))
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
    

    const handlePublished = (cateId, published) => {
        categoriesService.get(cateId).then(res => {
            if (!res.errorMessage) {
                categoriesService.update(`id=${res.data.id}&name=${res.data.name}&published=${published}&image=${res.data.image}`).then(res => {
                    if (!res.errMessage) {
                        toast.success("Update successfully")
                        handleLoadData()
                    }
                })
            }
        })
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
       handleCreateImage(data.image[0].source).then(res => {
            data.image = res.data.url
            if (id === 0) {
                categoriesService.add(`id=${data.id}&name=${data.name}&published=1&image=${data.image}`).then(res => {
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
                categoriesService.update(`id=${data.id}&name=${data.name}&published=1&image=${data.image}`).then(res => {
                    if (!res.errorMessage) {
                        toast.success("Update successfully!")
                        handleLoadData()
                    }
                    else {
                        toast.error(res.errorMessage)
                    }
                })
            }
           
       })

       handleModalClose()
    }

    const handleSearch = e => {
        const value = e.target.value.toLowerCase()
        if (value === "") {
            handleLoadData()
        }
        else {
            let data = []
            categoriesService.list().then(res => {
                data = res.data
                const resultSearch = data.filter((cate) => {
                    return (cate.id.toLowerCase().includes(value)) || (cate.name.toLowerCase().includes(value))
                })
                setCategories(resultSearch);
            })
        }
    }

    const handleDeleteCategory = () => {
        categoriesService.delete(formik.values.id).then(res => {
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
                            placeholder="Search by id/name category"
                            type="search"
                            onChange={handleSearch}
                            className="searchAdmin__input"
                        />
                    </div>
                    <div className="col-xl-2 col-md-3">
                        <button className="searchAdmin__btn" onClick={() => handleModalShow("")}>
                            <HiOutlinePlus className="me-2" />Add Category
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <CategoryTable
                    categories={categories}
                    onEditCategory={(id) => handleModalShow(id)}
                    onPublished={(id, published) => handlePublished(id, published)}
                    onDeleteCategory={(id) => handleModalDeleteShow(id)}
                />
                
            </div>

            <Modal show={showModalDelete} centered onHide={handleModalDeleteClose}>
                <Modal.Body>
                    <p className="text-center text-danger fs-3"><FiTrash2 /></p>
                    <h5 className="text-center modal__text-head mb-1">Are You Sure! Want to Delete This Item?</h5>
                    <p className="text-center modal__text-sub mb-0">Do you really want to delete this item? You can't view this in your list anymore if you delete!</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <button className="btn modal__btn-cancel me-1" onClick={handleModalDeleteClose}>No, Keep It</button>
                        <button type="button" className="btn btn-success modal__btn-delete ms-1" onClick={handleDeleteCategory}>Yes, Delete It</button>
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
                            {id === 0 ? "Add" : "Update"} Category
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
                                maxFile={1}
                                file={formik.values.image}
                                onChangeFile={(data) => {
                                   formik.setValues(prev => ({...prev, image:data}))
                                }}
                            />
                        </div>
                    </div>
                    <InputAdmin
                        placeholder="Category ID..."
                        label="Category ID"
                        id="categoryId"
                        readOnly = {id === 1? true : false}
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('id')}
                        err={formik.touched.id && formik.errors.id}
                        errMessage={formik.errors.id}
                        input
                    />
                    <InputAdmin
                        placeholder="Category Type..."
                        label="Category Name"
                        id="categoryName"
                        labelClass="col-md-4 col-lg-3"
                        frmField={formik.getFieldProps('name')}
                        err={formik.touched.name && formik.errors.name}
                        errMessage={formik.errors.name}
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

export default CategorySerch;