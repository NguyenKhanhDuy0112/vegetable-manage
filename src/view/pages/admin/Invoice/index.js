import Status from "../../../../shared/components/Status/Status";
import { FaShoppingBag } from "react-icons/fa";
import TableAdmin from "../../../../shared/components/TableAdmin";
import { AiOutlinePrinter } from "react-icons/ai";
import { useEffect, useMemo, useState } from "react"
import billsService from "../../../../services/billsService";
import { useParams } from "react-router";
import providersService from "../../../../services/providersService";
import billDetailService from "../../../../services/billDetail";
import productService from "../../../../services/productService";
import couponsService from "../../../../services/couponsService";
import customersService from "../../../../services/customersService";

function Invoice() {
    const { id } = useParams()
    const [invoice, setInvoice] = useState({})
    const [billDetail, setBillDetails] = useState({})

    useEffect(() => {
        handleLoadBillDetail()
    }, [])

    useEffect(() => {
        handleLoadData()
    }, [billDetail])

    const handleLoadData = async () => {
        let bill ;
        let provider;
        let coupon;
        await billsService.get(id).then(res => {
            bill = res.data
        })

        await couponsService.get(`${bill.coupon}`).then(res => {
            coupon = res.data
        })

        if(bill.type === 'N'){
            await providersService.get(bill.provider).then(res => {
                provider = res.data
                const newData = { ...bill, billDetail: billDetail, provider: provider, coupon: coupon}
                setInvoice(newData)
            })
        }
        else{
            await customersService.get(bill.customer).then(res => {
                provider = res.data
                const newData = { ...bill, billDetail: billDetail, provider: provider, coupon: coupon}
                setInvoice(newData)
            })
        }
    }

    const handleCalcAmount = useMemo(() => {
        let total = 0;
        if(typeof invoice.coupon === 'object' && invoice.billDetail.length > 0){
            total = invoice.billDetail.reduce((total, current) => total + (current.quantity * current.price) - (current.quantity * current.price * (current.product.salePrice/100)),0)
            total -= total * (invoice.coupon.percent/100)
        }
        return total
    },[invoice])

    const handleLoadBillDetail = async () => {
        await billDetailService.getBill(id).then(res => {
            const newData = []
            const data = res.data
            data.forEach(async (bill, index) => {
                await productService.get(bill.sku).then(res => {
                    const product = { ...bill, product: res.data }
                    newData.push(product)
                    if (index === data.length - 1) {
                        setBillDetails(newData)
                    }
                })
            });

        })
    }
    
    return (
        <>
            <div className="container">
                <h6 className="fw-bold py-4 mb-0 dashboard__title margin-top-3">Invoice</h6>
                <div className="invoiceAdmin p-3">
                    <div className="row g-3 mb-3">
                        <div className="col-md">
                            <h5 className="text-uppercase">INVOICE</h5>
                            <p className="invoiceAdmin__title-text">
                                Status: <Status status="pending" type="pending" />
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-5 text-md-end text-start">
                            <h5 className="d-flex justify-content-md-end justify-content-start align-items-center">
                                <FaShoppingBag className="text-success" /> Dashtar
                            </h5>
                            <p className="invoiceAdmin__text">
                                Cecilia Chapman, 561-4535 Nulla LA, United States 96522
                            </p>
                        </div>
                    </div>
                    <div className="row g-3 mb-3">
                        <div className="col-md">
                            <h6 className="invoiceAdmin__title">DATE</h6>
                            <p className="invoiceAdmin__text">{invoice.date ? invoice.date : ""}</p>
                        </div>
                        <div className="col-md">
                            <h6 className="invoiceAdmin__title">INVOICE NO.</h6>
                            <p className="invoiceAdmin__text">#{invoice.id ? invoice.id : ""}</p>
                        </div>
                        <div className="col-xl-3 col-lg-5 col-md-4 text-md-end text-start">
                            <h6 className="invoiceAdmin__title">INVOICE TO.</h6>
                            <p className="invoiceAdmin__text">
                                {typeof invoice.provider === 'object' ? invoice.provider.address : ""}
                            </p>
                        </div>
                    </div>
                    <TableAdmin rows={["SR.", "PRODUCT NAME", "QUANTITY", "ITEM PRICE", "DISCOUNT", "AMOUNT"]}>
                        {billDetail.length > 0 && billDetail.map((bill, index) => {
                            return (
                                <tr key = {index} className="tableAdmin__tr">
                                    <td className="tableAdmin__td">{index + 1}</td>
                                    <td className="tableAdmin__td">{bill.product.title}</td>
                                    <td className="tableAdmin__td">{bill.quantity}</td>
                                    <td className="tableAdmin__td">${bill.price}</td>
                                    <td className="tableAdmin__td">{bill.product.salePrice}%</td>
                                    <td className="tableAdmin__td">${((bill.quantity * bill.price) - (bill.quantity * bill.price * (bill.product.salePrice/100))).toFixed(2)}</td>
                                </tr>
                            )
                        })}

                    </TableAdmin>
                    <div className="invoiceAdmin__total p-4 mt-5">
                        <div className="row align-items-center g-4">
                            <div className="col-lg">
                                <h6 className="invoiceAdmin__title">PAYMENT METHOD</h6>
                                <p className="invoiceAdmin__title-text mb-0">COD</p>
                            </div>
                            <div className="col-lg">
                                <h6 className="invoiceAdmin__title">SHIPPING COST</h6>
                                <p className="invoiceAdmin__title-text mb-0">$00.00</p>
                            </div>
                            <div className="col-lg">
                                <h6 className="invoiceAdmin__title">DISCOUNT</h6>
                                <p className="invoiceAdmin__title-text mb-0">{typeof invoice.coupon === 'object' && invoice.coupon.percent}%</p>
                            </div>
                            <div className="col-lg-auto">
                                <h6 className="invoiceAdmin__title">TOTAL AMOUNT</h6>
                                <p className="invoiceAdmin__title-text invoiceAdmin__title-text-danger mb-0">${handleCalcAmount.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 d-flex justify-content-end">
                    <button className="btn btn-success" onClick={() => window.print()}>
                        Print Invoice <AiOutlinePrinter />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Invoice;