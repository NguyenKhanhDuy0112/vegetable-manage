import { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../../shared/components/Banner"
function BlogDetail() {
    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    return (
        <section className="blogDetail">
            <Banner title="" />
            <div className="container-plugin my-5">
                <div className="blogDetail__content">
                    <div className="blog__card-body-type">
                        <Link to="/blogs/1" className="blog__card-body-type-child">
                            Vegetables
                        </Link>
                        <p className="blog__card-body-type-date mb-0 ms-2">October 12, 2021</p>
                    </div>

                    <h1 className="blogDetail__content-title mb-5">Benefits of Sushi: Is Raw Fish Safe to Eat?</h1>

                    <p className="blogDetail__content-des">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugaitLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                    </p>

                    <p className="blogDetail__content-des mb-5">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugaitLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                    </p>

                    <div className="blogDetail__content-pagination mb-5">
                        <Link to="/blogs/1" className="blogDetail__content-pagination-link d-block">
                            <div className="row">
                                <div className="col border-right py-4">
                                    <small className="d-block mb-3 blogDetail__content-pagination-link-child">Previous post</small>
                                    <p className="mb-0 blogDetail__content-pagination-link-text">Chocolate and Its Health Benefit</p>
                                </div>
                                <div className="col py-4">
                                    <small className="d-block text-end mb-3 blogDetail__content-pagination-link-child">Next post</small>
                                    <p className="mb-0 text-end blogDetail__content-pagination-link-text">How to choose the freshest product</p>
                                </div>
                            </div>

                        </Link>
                    </div>

                    <h1 className="blogDetail__content-title">Leave a Reply</h1>
                    <p className="blogDetail__content-des mb-4">
                        Your email address will not be published. Required fields are marked <span className="text-danger">*</span>
                    </p>
                    <textarea className="blogDetail__content-input d-block w-100 mb-4" placeholder="Comment" rows="4"></textarea>
                    <input className="blogDetail__content-input d-block w-100 mb-4" placeholder="Your Name *" />
                    <input className="blogDetail__content-input d-block w-100 mb-4" type="email" placeholder="Email *" />
                    <div className="d-flex align-items-center mb-4">
                        <input type="checkbox" id = "remember"/>
                        <label className="ms-2 blogDetail__content-des" htmlFor="remember">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                    <div className="blogDetail__content-post">
                        <button className="blogDetail__content-post-btn">
                            Post Comment
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default BlogDetail;