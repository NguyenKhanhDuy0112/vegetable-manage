import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Banner from "../../../../shared/components/Banner";
import PaginationClient from "../../../../shared/components/PaginationClient/PaginationClient";
import blogs from "../../../../shared/public/blogs";

function Blog() {
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState({start : 0, end: 0})

    useEffect(() => setData(blogs), [blogs])
    
    useEffect(() => {
        window.scrollTo({top: 0});
    },[])

    const handleChangePage = (start, end) =>{
        setPagination({start: start, end: end})
        window.scrollTo({top: 0});
    }

    return (
        <>
            <section className="blog">
                <Banner title = "Blogs" />
                <article className="container-plugin my-5">
                    <div className="row row-cols-lg-2 row-cols-1 g-5">
                        {blogs.map((blog,index) => {
                            return ( index >= pagination.start -1  && index <= pagination.end - 1 &&
                                <div className="col" key ={blog.id}>
                                    <div className="blog__card h-100 d-lg-flex d-block">
                                        <div className="blog__card-img">
                                            <img 
                                                className="blog__card-img-child" 
                                                src={blog.img} 
                                                alt="" 
                                            />
                                        </div>
                                        <div className="blog__card-body">
                                            <div className="blog__card-body-type">
                                                <Link to="/blogs/1" className="blog__card-body-type-child">
                                                    {blog.type}
                                                </Link>
                                                <p className="blog__card-body-type-date mb-0 ms-2">{blog.date}</p>
                                            </div>
                                            <Link to="/blogs/1" className="blog__card-body-title">
                                                {blog.title}
                                            </Link>
                                            <p className="blog__card-body-text">
                                               {blog.des}
                                            </p>
                                            <Link to="/blogs/1" className="blog__card-body-link">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </article>
                <PaginationClient 
                    data = {data} show ={10}  
                    onChangePage = {(start, end) => handleChangePage(start, end)}
                />
            </section>
        </>
    );
}

export default Blog;