import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router";
import billsService from "../../../../services/billsService";
import OrderTable from "./OrderTable";
import productService from "../../../../services/productService"
import couponsService from "../../../../services/couponsService"
import billDetailService from "../../../../services/billDetail"
import customersService from "../../../../services/customersService";

function OrderSearch() {
    const [orders, setOrders] = useState([])
    const [customers, setCustomers] = useState([])
    const [billDetails, setBillDetails] = useState([])
    const [bills, setBills] = useState([])
    const [coupons, setCoupons] = useState([])
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
       handleLoadAll()
    },[])

    useEffect(() => {
        handleLoadData()
    },[coupons])

    const handleLoadAll = async () => {
        let customers = []
        let products = []
        let coupons = []
        let billDetail = []
        let bills = []
        await customersService.list().then(res => customers = res.data)
        await productService.list().then(res => products = res.data)
        await billDetailService.list().then(res => res.data).then(data => {
            const newData = []
            data.forEach((bill) => {
                const product = products.find(pro => bill.sku === pro.sku)
                const billProduct = {...bill, product: product}
                newData.push(billProduct)
            })
            billDetail = newData
        })
        await couponsService.list().then(res => coupons = res.data)
        await billsService.getByType('X').then(res => bills = res.data)
        setCustomers(customers)
        setBillDetails(billDetail)
        setProducts(products)
        setBills(bills)
        setCoupons(coupons)
    }

    const handleLoadData = () => {
        if(bills.length > 0){
            const newData = bills.map((imp) => {
                const customer = customers.find(pro => pro.id === imp.customer)
    
                const billsLoop = billDetails.filter((bill) => imp.id === bill.bill)
    
                const coupon = coupons.find(cou => cou.id === imp.coupon)
                let total = 0
                total = billsLoop.reduce((total, current) => total + (current.price * current.quantity) - (current.price * current.quantity * (current.product.salePrice)/100),0)
                total -= total * (coupon.percent/100)
                return {...imp, customer: customer,  coupon: coupon, billDetail:  billsLoop, total: total}
            });
            setOrders(newData)
        }
    }


    return (
        <>
            <div className="searchAdmin p-3 mb-3">
                <div className="row g-3">
                    <div className="col-md">
                        <input placeholder="Search by id/phone" type="search" className="searchAdmin__input" />
                    </div>
                    <div className="col-md">
                        <select className="searchAdmin__input" placeholder="Status">
                            <option hidden>Status</option>
                            <option>Delivered</option>
                            <option>Pending</option>
                            <option>Cancel</option>
                            <option>Processing</option>
                        </select>
                    </div>
                    <div className="col-md">
                        <input placeholder="From Date" type="date" className="searchAdmin__input" />
                    </div>
                    <div className="col-md">
                        <input placeholder="To Date" type="date" className="searchAdmin__input" />
                    </div>
                    <div className="col-md-2">
                        <button className="searchAdmin__btn" onClick={() => navigate("/admin/order/add")}>
                            <HiOutlinePlus className="me-2" />Add Order
                        </button>
                    </div>
                </div>
            </div>
            <OrderTable
                orders={orders}
            />

        </>
    );
}

export default OrderSearch;