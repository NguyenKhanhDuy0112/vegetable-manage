import {useEffect, useState, useRef} from "react"
import { FiTrash2 } from "react-icons/fi";
import { useFormik } from "formik";
import { Button, Modal } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi"
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import UploadFile from "../../../../shared/components/UploadFile";
import BlogAdminTable from "./BlogAdminTable";
import * as Yup from "yup"
import { toast } from "react-toastify";
import axios from "axios";
import blogService from "../../../../services/blogsService";

function BlogAdminSearch() {
    const [show, setShow] = useState(false)
    const [blogs, setBlogs] = useState([])
    const [id, setId] = useState(0)
    const [showModalDelete, setShowModalDelete] = useState(false)

    useEffect(() => {
        handleLoadData()
    },[])

    const handleLoadData = () => {
        blogService.list().then(res => {
            setBlogs(res.data)
        })
    }
   
    const formik = useFormik({
        initialValues: {
            id: "",
            type: "",
            name: "",
            content: "",
            image:[]
        },
        validationSchema: Yup.object({
            id: Yup.string().required("This is field required.").max(50, "Must be at least 50 characters"),
            type: Yup.string().nullable().required("This is field required.").max(50, "Must be at least 50 characters"),
            name: Yup.string().required("This is field required.").max(200, "Must be at least 200 characters"),
            content: Yup.string().nullable().required("This is field required.")
        }),
        onSubmit: values => {
            handleSubmitForm(values)
        }
    })

    const handleCreateImage = async (image) => {
        let postImage
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'twbtlhnv');
        postImage = await axios.post('https://api.cloudinary.com/v1_1/cloudprojectbackend/image/upload', formData)
        return postImage;
    }

    const handleSubmitForm = (values) => {
        const today = new Date()
        const currentDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        handleCreateImage(values.image[0].source).then(res => {
            values.image = res.data.url
            if (id===0) {
                blogService.add(`image=${values.image}&type=${values.type}&name=${values.name}&content=${values.content}&id=${values.id}&author=A_0001&date=${currentDate}`).then(res => {
                    if (!res.errorMessage) {
                        toast.success("Add blog success")
                        handleLoadData();
                    }
                    else {
                        toast.error('Add blog fail')
                    }
                
            })}
            else {
                console.log("Data: ", values)
                blogService.update(`image=${values.image}&type=${values.type}&name=${values.name}&content=${values.content}&id=${values.id}&author=A_0001&date=${values.date}`).then(res => {
                    if (!res.errorMessage) {
                        toast.success("Update blog success")
                        handleLoadData();
                    }
                    else {
                        toast.error("Update blog fail")
                    }
                })
                
            }
        })
        
        handleModalClose()
    }
    const handleModalClose = () => setShow(false)

    const handleModalDeleteClose = () => setShowModalDelete(false)

    const handleModalShow = async (id) => {
        if (id !== "") {
            await blogService.get(id).then(res => {
                if(!res.errorMessage){
                    formik.setValues(({...res.data, image: [res.data.image]}))
                }
            })
            setId(1)
        }
        else {
            formik.resetForm()
            setId(0)
        }   
        setShow(true)
    }

    const handleModalDeleteShow = (id) => {
        formik.setValues(prev => ({...prev, id: id}))
        setShowModalDelete(true)
    }
    const handleDeleteBlog = () => {
        blogService.deleted(formik.values.id).then(res => {
            if (!res.errorMessage) {
                toast.success("Delete blog success")
                handleLoadData();
            }
            else {
                toast.error("Delete blog fail")
            }
        })
        
        handleModalDeleteClose()
    }

    return (
        <article>
            <div className="searchAdmin p-3 mb-3">
                <div className="row g-3">
                    <div className="col-md">
                        <input
                            placeholder="Search by title"
                            type="search"
                            className="searchAdmin__input"
                        />
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <button className="searchAdmin__btn" onClick={() => handleModalShow("")}>
                            <HiOutlinePlus className="me-2" />Add Blog
                        </button>
                    </div>
                </div>
            </div>
            <BlogAdminTable 
                blogs = {blogs}
                onEditBlog={(id) => handleModalShow(id)}
                onDeleteBlog={(id) => handleModalDeleteShow(id)}
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
                        <button type="button" className="btn btn-success modal__btn-delete ms-1" onClick={handleDeleteBlog}>Yes, Delete It</button>
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
                            {id === 0 ? "Add" : "Update"} Blog
                        </h6>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ maxHeight: "70vh", overflowY: "scroll" }}>
                    <div className="row align-items-center mb-3 g-3">
                        <div className="col-md-4 col-lg-3">
                            <label className="mb-0 fs-6">Image</label>
                        </div>
                        <div className="col-md">
                            <UploadFile
                                maxFile={1}
                                file={formik.values.image}
                                onChangeFile={(data) => {
                                    formik.setValues(prev=>({...prev, image:data}))
                                }}
                            />
                        </div>
                    </div>
                    <InputAdmin
                        placeholder="Id..."
                        label="Id"
                        id="id"
                        readOnly = {id === 1? true: false}
                        frmField={formik.getFieldProps('id')}
                        labelClass="col-md-4 col-lg-3"
                        err={formik.touched.id && formik.errors.id}
                        errMessage={formik.errors.id}
                        input
                    />
                    <InputAdmin
                        placeholder="Topic..."
                        label="Topic"
                        id="type"
                        frmField={formik.getFieldProps('type')}
                        labelClass="col-md-4 col-lg-3"
                        err={formik.touched.type && formik.errors.type}
                        errMessage={formik.errors.type}
                        input
                    />
                    <InputAdmin
                        placeholder="Title..."
                        label="Title"
                        id="name"
                        frmField={formik.getFieldProps('name')}
                        labelClass="col-md-4 col-lg-3"
                        err={formik.touched.name && formik.errors.name}
                        errMessage={formik.errors.name}
                        input
                    />
                    <InputAdmin
                        placeholder="Content..."
                        label="Content"
                        id="content"
                        
                        frmField={formik.getFieldProps('content')}
                        labelClass="col-md-4 col-lg-3"
                        err={formik.touched.content && formik.errors.content}
                        errMessage={formik.errors.content}
                        rows = "5"
                        
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="success" disabled={!formik.dirty || !formik.isValid} onClick={formik.handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </article>
    );
}

export default BlogAdminSearch;