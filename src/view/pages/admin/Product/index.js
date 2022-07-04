import ProductSearch from "./ProductSearch";


function ProductAdmin() {
    return (
        <>
            <div className="container">
                <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Products</h6>
                <ProductSearch/>
            </div>
        </>
    );
}

export default ProductAdmin;