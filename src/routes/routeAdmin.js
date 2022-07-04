import CategoryAdmin from "../view/pages/admin/Category"
import CouponAdmin from "../view/pages/admin/Coupon"
import CustomerAdmin from "../view/pages/admin/Customer"
import Dashboard from "../view/pages/admin/Dashboard"
import OrderAdmin from "../view/pages/admin/Order"
import ProductAdmin from "../view/pages/admin/Product"
import SettingAdmin from "../view/pages/admin/Setting"
import Invoice from "../view/pages/admin/Invoice"
import ProductAdInfo from "../view/pages/admin/ProductAdInfo"
import AddOrder from "../view/pages/admin/AddOrder"
import Satistical from "../view/pages/admin/Satistical"
import BlogAdmin from "../view/pages/admin/BlogAdmin"
import AddImport from "../view/pages/admin/AddImport"

const routeAdmin = [
    {path: "/dashboard", component : <Dashboard/>},
    {path:"/products", component: <ProductAdmin/>},
    {path: "/products/:id", component: <ProductAdInfo/>},
    {path: "/category",component : <CategoryAdmin/>},
    {path: "/customer" , component : <CustomerAdmin/>},
    {path : "/order", component : <OrderAdmin/>},
    {path: "/coupon", component: <CouponAdmin/>},
    {path: "/setting", component: <SettingAdmin/>},
    {path: "/order/:id", component: <Invoice/>},
    {path: "/order/add", component: <AddOrder/>},
    {path: "/import", component: <AddImport/>},
    {path: "/satistical", component: <Satistical/>},
    {path: "/blog", component: <BlogAdmin/>}
]

export default routeAdmin