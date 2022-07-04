function CheckoutOrder() {
    return (
        <article className="checkout__order">
            <h3 className="mb-0 checkout__order-title text-center">Your Order</h3>
            <div className="row">
                <div className="col-12">
                    <div className="checkout__order-table">
                        <div className="checkout__order-table-line">
                            <div className="border-bottom pb-3">
                                <div className="row">
                                    <div className="col">
                                        <h6 className="text-uppercase mb-0">Product</h6>
                                    </div>
                                    <div className="col-auto">
                                        <h6 className="mb-0 text-uppercase mb-0">Subtotal</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="row">
                                    <div className="col">
                                        <h6 className="text-secondary mb-0">Broccoli X 1</h6>
                                    </div>
                                    <div className="col-auto">
                                        <h6 className="text-secondary mb-0">$60.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="row">
                                    <div className="col">
                                        <h6 className="mb-0">Subtotal</h6>
                                    </div>
                                    <div className="col-auto">
                                        <h6 className="mb-0 text-heading">$60.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="row">
                                    <div className="col">
                                        <h6 className="mb-0">Shipping</h6>
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
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="text-uppercase mb-0">Total</h5>
                                    </div>
                                    <div className="col-auto">
                                        <h5 className="text-heading fw-bold mb-0">$60.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-3">
                    <div className="form-check p-0">
                        <input className="" type="radio" name="payment"
                            id="transfer" />
                        <label className="form-check-label ms-2" htmlfor="transfer">
                            Direct bank transfer
                        </label>
                    </div>
                    <div className="form-check p-0">
                        <input className="" type="radio" name="payment"
                            id="payment" checked />
                        <label className="form-check-label ms-2" htmlfor="payment">
                            Check payments
                        </label>
                    </div>
                    <div className="form-check p-0">
                        <input className="" type="radio" name="payment"
                            id="cash" checked />
                        <label className="form-check-label ms-2" htmlfor="cash">
                            Cash on delivery
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="cart__coupon-btn fw-bold w-100" type="button">
                        Place Order
                    </button>
                </div>
            </div>
        </article>
    );
}

export default CheckoutOrder;