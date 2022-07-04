import { useEffect, useState } from "react"
import { HiOutlinePlus } from "react-icons/hi"
import { useNavigate } from "react-router"
import billDetailService from "../../../../services/billDetail"
import billsService from "../../../../services/billsService"
import couponsService from "../../../../services/couponsService"
import productService from "../../../../services/productService"
import providersService from "../../../../services/providersService"
import ImportGoodTable from "./ImportGoodTable"

function ImportGoodSearch() {
    const [imports, setImports] = useState([])
    const [providers, setProviders] = useState([])
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
        let providers = []
        let products = []
        let coupons = []
        let billDetail = []
        let bills = []
        await providersService.list().then(res => providers = res.data)
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
        await billsService.getByType('N').then(res => bills = res.data)
        setProviders(providers)
        setBillDetails(billDetail)
        setProducts(products)
        setBills(bills)
        setCoupons(coupons)
    }

    const handleLoadData = () => {
        if(bills.length > 0){
            const newData = bills.map((imp) => {
                const provider = providers.find(pro => pro.id === imp.provider)
    
                const billsLoop = billDetails.filter((bill) => imp.id === bill.bill)
    
                const coupon = coupons.find(cou => cou.id === imp.coupon)
                let total = 0
                total = billsLoop.reduce((total, current) => total + (current.price * current.quantity) - (current.price * current.quantity * (current.product.salePrice)/100),0)
                total -= total * (coupon.percent/100)
                return {...imp, provider: provider,  coupon: coupon, billDetail:  billsLoop, total: total}
            });
            setImports(newData)
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
                        <input placeholder="From Date" type="date" className="searchAdmin__input" />
                    </div>
                    <div className="col-md">
                        <input placeholder="To Date" type="date" className="searchAdmin__input" />
                    </div>
                    <div className="col-md-2">
                        <button className="searchAdmin__btn" onClick={() => navigate("/admin/import")}>
                            <HiOutlinePlus className="me-2" />Add Import Good
                        </button>
                    </div>
                </div>
            </div>
            <ImportGoodTable
                imports={imports}
            />

        </>
    );
}

export default ImportGoodSearch;