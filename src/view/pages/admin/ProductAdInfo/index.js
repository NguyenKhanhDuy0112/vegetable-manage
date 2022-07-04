import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router";
import productService from "../../../../services/productService";
import Status from "../../../../shared/components/Status/Status";
import * as Yup from "yup"
import UploadFile from "../../../../shared/components/UploadFile";
import InputAdmin from "../../../../shared/components/inputField/InputAdmin";
import categoriesService from "../../../../services/categoriesService";
import axios from "axios";
import { toast } from "react-toastify";

function ProductAdInfo() {
    const [show, setShow] = useState(false)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [categories, setCategories] = useState([])

    useEffect(() => {
        handleLoadData()
        handleLoadCategories()
    }, [])

    const handleLoadData = () => {
        productService.get(id).then(res => setProduct(res.data))
    }

    const handleLoadCategories = () => {
        categoriesService.list().then(res => setCategories(res.data))
    }

    const handleModalShow = () => {
        formik.setValues(product)
        setShow(true)
    }

    const handleModalClose = () => setShow(false)

    
    
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
            price: Yup.number("This field must be numeric.").required("This is field required."),
            salePrice: Yup.number("This field must be numeric.").required("This is field required."),
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

    const handleSubmitForm = (data) => {
        handleCreateImage(data.image[0].source).then(res => {
            data.image = res.data.url

            productService.update(`id=${data.sku}&des-id=null&title=${data.title}&price=${data.price}&sale_price=${data.salePrice}&description=${data.description}&category_id=${data.category}&quantity=${data.quantity}&unit=${data.unit}&published=${data.published}&image=${data.image}&tag=Vegetable`).then(res => {
                if (!res.errorMessage) {
                    toast.success("Update successfully!")
                    handleLoadData()
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
            <div className="container">
                <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Products Details</h6>
                {product.sku &&
                    <div className="row">
                        <div className="col-lg-5">
                            <img className="w-100" src={product.image} alt="Product" />
                        </div>
                        <div className="col-lg">
                            <div className="mt-5">
                                <p className="product-ad-info__status mb-2">
                                    Status:
                                    <span className="product-ad-info__status-text">
                                        {product.published === 1? "This product showing" : "Hide"}
                                    </span>
                                </p>
                            </div>
                            <h4 className="product-ad-info__title mb-1">{product.title}</h4>
                            <p className="product-ad-info__sku">
                                SKU: <span className="product-ad-info__sku-text">{product.sku}</span>
                            </p>
                            <div className="product-ad-info__price">
                                <h4 className="product-ad-info__price-current">${product.price - product.price*(product.salePrice/100)}</h4>
                                <h5 className="product-ad-info__price-old">${product.price}</h5>
                            </div>
                            <div className="product-ad-info__quantity mb-3">
                                <Status status={product.quantity > 0 ? "In Stock" : "Sold Out"} type={product.quantity > 0? "delivered" : "cancel"} />
                                <span className="product-ad-info__quantity-text">Quantity: {product.quantity}</span>
                            </div>
                            <p className="product-ad-info__des mb-3">
                                {product.description}
                            </p>
                            <p className="product-ad-info__category mb-2">
                                Category: <span className="product-ad-info__category-child">Grocery</span>
                            </p>
                            {/* <div className="product-ad-info__tag">
                            <span className="product-ad-info__tag-child">Lettuce</span>
                            <span className="product-ad-info__tag-child">Fresh Vegetable</span>
                        </div> */}
                            <div className="mt-4">
                                <button onClick={handleModalShow} className="btn btn-success product-ad-info__btn">Edit Product</button>
                            </div>
                        </div>
                    </div>
                }
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
                        readOnly
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
                    <Button variant="danger" onClick={handleModalClose}>
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

export default ProductAdInfo;