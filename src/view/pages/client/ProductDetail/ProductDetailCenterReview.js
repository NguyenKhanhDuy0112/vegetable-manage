import ReactStars from "react-rating-stars-component";
import UserReview from "../../../../shared/components/UserReview/UserReview";

function ProductDetailCenterReview() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <article className="productDetail__center-review">
            <div className="productDetail__center-content-des">
                <div className="row g-3">
                    <div className="col-12">
                        <UserReview />
                    </div>
                    <div className="col-12">
                        <UserReview />
                    </div>
                    <div className="col-12">
                        <UserReview />
                    </div>
                </div>
                <p className="mb-2">Your email address will not be published. Required fields are marked <span className="text-danger">*</span></p>
                <div className="mb-2 d-flex align-items-center">
                    <p className="mb-0">Your rating <span className="text-danger">*</span></p>
                    <p className="mb-0 ms-3">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </p>
                </div>
                <textarea rows={10} placeholder="Review *" className="productDetail__center-review-input mb-4"></textarea>
                <div className="d-lg-flex mb-4">
                    <div className="me-lg-2 mb-lg-0 mb-4 me-0 w-100">
                        <input placeholder="Name *" className="productDetail__center-review-input" />
                    </div>
                    <div className="ms-lg-2 ms-0 w-100">
                        <input placeholder="Email *" type="email" className="productDetail__center-review-input" />
                    </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" className="ms-2 text-secondary">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>
                <div>
                    <button className="productDetail__center-review-btn">Submit</button>
                </div>
            </div>

        </article>
    );
}

export default ProductDetailCenterReview;