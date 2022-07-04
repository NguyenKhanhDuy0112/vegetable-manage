import CouponSearch from "./CouponSearch";

function CouponAdmin() {
    return (
        <>
            <div className="container">
                <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Coupon</h6>
                <CouponSearch/>
            </div>
        </>
    );
}

export default CouponAdmin;