import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi";
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import UploadFile from "../../../../shared/components/UploadFile";
import "@pathofdev/react-tag-input/build/index.css"
import ProductTable from "./ProductTable";
import productService from "../../../../services/productService";
import { useFormik } from "formik";
import { FiTrash2 } from "react-icons/fi";
import * as Yup from "yup"
import { toast } from "react-toastify";
import categoriesService from "../../../../services/categoriesService";
import axios from "axios";

function ProductSearch() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const [show, setShow] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [searchType, setSearchType] = useState(false)
    const [id, setId] = useState(0)
    
    useEffect(() => {
        handleLoadData()
        handleLoadCategories()
    }, [])

    const handleLoadData = () => {
        productService.list().then(res => setProducts(res.data))
    }

    const handleLoadCategories = () => {
        categoriesService.list().then(res => setCategories(res.data))
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
            image: "",
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

    const handleCreateImage = async (image) => {
        let postImage
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'twbtlhnv');
        postImage = await axios.post('https://api.cloudinary.com/v1_1/cloudprojectbackend/image/upload', formData)
        return postImage;
    }


    const handleModalDeleteClose = () => setShowModalDelete(false)

    const handleModalDeleteShow = (id) => {
        formik.setValues(prev => ({ ...prev, sku: id }))
        setShowModalDelete(true)
    }

    const handleModalClose = () => setShow(false)

    const handleModalShow = async (id) => {
        if (id !== "") {
            await productService.get(id).then(res => {
                if (!res.errorMessage) {
                   formik.setValues({...res.data, image: [res.data.image]})
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

    const handlePublished = (productId, published) => {
        productService.get(productId).then(res => {
            if (!res.errorMessage) {
                productService.update(`id=${res.data.sku}&des-id=null&title=${res.data.title}&price=${res.data.price}&sale_price=${res.data.salePrice}&description=${res.data.description}&category_id=${res.data.category}&quantity=${res.data.quantity}&unit=${res.data.unit}&published=${published}&image=${res.data.image}&tag=Vegetable`).then(res => {
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
    }

    const handleSubmitForm = (data) => {
        handleCreateImage(data.image[0].source).then(res => {
            data.image = res.data.url
            if (id === 0) {
                productService.add(`id=${data.sku}&des-id=null&title=${data.title}&price=${data.price}&sale_price=${data.salePrice}&description=${data.description}&category_id=${data.category}&quantity=0&unit=${data.unit}&published=1&image=${data.image}&tag=Vegetable`).then(res => {
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
                productService.update(`id=${data.sku}&des-id=null&title=${data.title}&price=${data.price}&sale_price=${data.salePrice}&description=${data.description}&category_id=${data.category}&quantity=${data.quantity}&unit=${data.unit}&published=${data.published}&image=${data.image}&tag=Vegetable`).then(res => {
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
            productService.list().then(res => {
                data = res.data
                const resultSearch = data.filter((product) => {
                    return (product.sku.toLowerCase().includes(value)) || (product.title.toLowerCase().includes(value)) && (searchType !== "" ? product.category === searchType : product)
                })
                setProducts(resultSearch);
            })
        }
    }

    const handleDeleteProduct = () => {
        productService.delete(formik.values.sku).then(res => {
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
                    <div className="col-md-4">
                        <input
                            placeholder="Search by product name"
                            type="search"
                            onChange={e => handleSearch(e)}
                            className="searchAdmin__input"
                        />
                    </div>
                    <div className="col-md">
                        <select
                            className="searchAdmin__input"
                            onChange={(e) => setSearchType(e.target.value)}
                        >
                            <option hidden>Category</option>
                            {categories.length > 0 && categories.map(cate => <option  key= {cate.id} value={cate.id}>{cate.name}</option>)}
                        </select>
                    </div>

                    <div className="col-md-3 col-xl-2">
                        <button className="searchAdmin__btn" onClick={() => handleModalShow("")}>
                            <HiOutlinePlus className="me-2" />Add Product
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <ProductTable
                    products={products}
                    onUpdateProduct={(id) => handleModalShow(id)}
                    onChangePublished={(id, published) => handlePublished(id, published)}
                    onDeleteProduct={(id) => handleModalDeleteShow(id)}
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
                        <button type="button" className="btn btn-success modal__btn-delete ms-1" onClick={handleDeleteProduct}>Yes, Delete It</button>
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
                            {id === 0 ? "Add" : "Update"} Product
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
                        readOnly = {id === 1? true: false}
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

export default ProductSearch;