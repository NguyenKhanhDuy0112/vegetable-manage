import Banner from "../../../../shared/components/Banner";
import CheckoutBillDetail from "./CheckoutBillDetail";
import CheckoutOrder from "./CheckoutOrder";

function Checkout() {
    return ( 
        <>
            <section className="checkout">
                <Banner title = "Checkout"/>
                <div className="container-plugin my-5">
                    <div className="row g-5">
                        <div className="col">
                            <CheckoutBillDetail/>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12">
                            <CheckoutOrder/>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Checkout;