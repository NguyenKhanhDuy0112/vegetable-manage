import BlogAdminSearch from "./BlogAdminSearch";

function BlogAdmin() {
    return ( 
        <section className="container">
            <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Blog</h6>
            <BlogAdminSearch/>
        </section>
     );
}

export default BlogAdmin;