function CheckoutBillDetail() {
    return (
        <article className="checkout__billDetail">
            <h4>Billing Detail</h4>
            <div className="row g-3">
                <div className="col-12">
                    <div className="row">
                        <div className="col">
                            <div className="checkout__billDetail-form">
                                <label htmlFor="firstName" className="checkout__billDetail-form-label">
                                    First name <span className="text-danger">*</span>
                                </label>
                                <input id="firstName" className="checkout__billDetail-form-input" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="checkout__billDetail-form">
                                <label htmlFor="lastName" className="checkout__billDetail-form-label">
                                    Last name <span className="text-danger">*</span>
                                </label>
                                <input id="lastName" className="checkout__billDetail-form-input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="checkout__billDetail-form">
                        <label htmlFor="company" className="checkout__billDetail-form-label">
                            Company name
                        </label>
                        <input id="company" className="checkout__billDetail-form-input" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="checkout__billDetail-form">
                        <label htmlFor="country" className="checkout__billDetail-form-label">
                            Country / Region <span className="text-danger">*</span>
                        </label>
                        <input id="country" className="checkout__billDetail-form-input" />
                    </div>
                </div>

                <div className="col-12">
                    <div className="checkout__billDetail-form">
                        <label htmlFor="street" className="checkout__billDetail-form-label">
                            Street Address <span className="text-danger">*</span>
                        </label>
                        <input id="street" className="checkout__billDetail-form-input" />
                    </div>
                </div>

                <div className="col-12">
                    <div className="checkout__billDetail-form">
                        <label htmlFor="town" className="checkout__billDetail-form-label">
                            Town / City <span className="text-danger">*</span>
                        </label>
                        <input id="town" className="checkout__billDetail-form-input" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="checkout__billDetail-form">
                        <label htmlFor="phone" className="checkout__billDetail-form-label">
                            Phone <span className="text-danger">*</span>
                        </label>
                        <input id="phone" className="checkout__billDetail-form-input" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="checkout__billDetail-form">
                        <label htmlFor="email" type = "email" className="checkout__billDetail-form-label">
                            Email Address <span className="text-danger">*</span>
                        </label>
                        <input id="email" className="checkout__billDetail-form-input" />
                    </div>
                </div>
                {/* <div className="col-12">
                    <div className="checkout__billDetail-form d-flex align-items-center">
                        <input className="checkout__billDetail-form-label d-inline-block me-2" id = "create" type = "checkbox"/>
                        <label htmlFor="create" className="checkout__billDetail-form-label">Create a account</label>
                    </div>
                </div> */}
                 <div className="col-12">
                    <div className="checkout__billDetail-form">
                        <label htmlFor="email" type = "email" className="checkout__billDetail-form-label">
                            Order note <span className="text-danger">*</span>
                        </label>
                        <textarea placeholder="Note about your order,..." className="checkout__billDetail-form-input" rows="5">
                            
                        </textarea>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default CheckoutBillDetail;