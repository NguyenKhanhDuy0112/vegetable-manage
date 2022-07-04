import Banner from "../../../../shared/components/Banner";
import { IoCloseSharp } from "react-icons/io5";
import InputQuantity from "../../../../shared/components/inputField/InputQuantity"
import CartBill from "./CartBill";

function Cart() {
    return (
        <section className="cart">
            <Banner title="Cart" />
            <div className="container-plugin my-5">
                <div className="row">
                    <div class="col-lg-8 col-12">
                        <div className="table-responsive">
                            <table className="table cart__table">
                                <thead>
                                    <th className="py-2"></th>
                                    <th className="py-2"></th>
                                    <th className="py-2">PRODUCT</th>
                                    <th className="py-2">PRICE</th>
                                    <th className="py-2" >QUANTITY</th>
                                    <th className="text-end py-2">SUBTOTAL</th>
                                </thead>
                                <tbody>
                                    <tr className="cart__table-tr">
                                        <td className="cart__table-td py-3">
                                            <span className="cart__table-td-icon cursor-pointer"><IoCloseSharp /></span>
                                        </td>
                                        <td className="cart__table-td py-3"> <img src="image/R.jfif" width='100px' alt="" /></td>
                                        <td className="cart__table-td py-3">The Tomato Vine 250g</td>
                                        <td className="cart__table-td mr-auto text-heading">$60.00</td>
                                        <td className="cart__table-td py-3">
                                            <InputQuantity />
                                        </td>
                                        <td className="cart__table-td text-end text-heading fw-bold">$60.00</td>
                                    </tr>
                                    <tr className="cart__table-tr">
                                        <td className="cart__table-td py-3">
                                            <span className="cart__table-td-icon cursor-pointer"><IoCloseSharp /></span>
                                        </td>
                                        <td className="cart__table-td py-3"> <img src="image/R.jfif" width='100px' alt="" /></td>
                                        <td className="cart__table-td py-3">The Tomato Vine 250g</td>
                                        <td className="cart__table-td mr-auto text-heading">$60.00</td>
                                        <td className="cart__table-td py-3">
                                            <InputQuantity />
                                        </td>
                                        <td className="cart__table-td text-end text-heading fw-bold">$60.00</td>
                                    </tr>
                                    <tr className="cart__table-tr">
                                        <td className="cart__table-td py-3">
                                            <span className="cart__table-td-icon cursor-pointer"><IoCloseSharp /></span>
                                        </td>
                                        <td className="cart__table-td py-3"> <img src="image/R.jfif" width='100px' alt="" /></td>
                                        <td className="cart__table-td py-3">The Tomato Vine 250g</td>
                                        <td className="cart__table-td mr-auto text-heading">$60.00</td>
                                        <td className="cart__table-td py-3">
                                            <InputQuantity />
                                        </td>
                                        <td className="cart__table-td text-end text-heading fw-bold">$60.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <div className="d-flex w-100">
                                    <input type="text" className="d-block cart__coupon-input flex-grow-1" placeholder="Coupon Code" />
                                    <button className="cart__coupon-btn d-block h-100 ms-2" type="button">APPLY COUPON</button>
                                </div>
                            </div>
                            <div className="col">
                                <button className="cart__coupon-btn float-end" type="button">UPDATE CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg col-12 ms-lg-2 ms-0">
                        <CartBill />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;