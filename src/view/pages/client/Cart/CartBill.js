import { useNavigate } from "react-router";

function CartBill() {

    const navigate = useNavigate()

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="fw-bold pb-3">Cart Totals</h4>
                <div className="row">
                    <div className="col fw-bold">
                        <h6>Sub total</h6>
                    </div>
                    <div className="col-auto">
                        <p className="mb-0 text-heading fw-bold">$60.00</p>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="row">
                    <div className="col">
                        <h6>Shipping</h6>
                    </div>
                    <div className="col-auto">
                        <div className="form-check">
                            <input className="" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1" />
                            <label className="form-check-label ms-2" htmlfor="flexRadioDefault1">
                                Flat rate
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2" checked />
                            <label className="form-check-label ms-2" htmlfor="flexRadioDefault2">
                                Free shipping
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault3" checked />
                            <label className="form-check-label ms-2" htmlfor="flexRadioDefault3">
                                Local pickup
                            </label>
                        </div>
                        <a href="#/">Change adress <i
                            className=" mr-1 fas fa-map-marker-alt"></i></a>
                    </div>

                </div>
                <hr className="my-2" />
                <div className="row">
                    <div className="col">
                        <h5>Total</h5>
                    </div>
                    <div className="col-auto fw-bold">
                        <h5 className="text-heading fw-bold">$60.00</h5>
                    </div>
                </div>
                <div className="d-grid gap-2 my-2">
                    <button onClick={() => navigate("/checkout")} className="cart__coupon-btn fw-bold" type="button">PROCEED TO
                        CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default CartBill;