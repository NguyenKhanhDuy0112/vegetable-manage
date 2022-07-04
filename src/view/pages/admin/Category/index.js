import CategorySearch from "./CategorySearch";

function CategoryAdmin() {
    return ( 
        <>
            <div className="container">
                <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Category</h6>
                <CategorySearch/>
            </div>
        </>
     );
}

export default CategoryAdmin;