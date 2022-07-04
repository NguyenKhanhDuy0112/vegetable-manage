import About from "../view/pages/client/About";
import Blog from "../view/pages/client/Blog";
import BlogDetail from "../view/pages/client/BlogDetail";
import Contact from "../view/pages/client/Contact";
import Home from "../view/pages/client/Home";
import Shop from "../view/pages/client/Shop";
import ProductDetail from "../view/pages/client/ProductDetail"
import Cart from "../view/pages/client/Cart";
import Wishlist from "../view/pages/client/Wishlist";
import Login from "../view/pages/client/Login/Login";
import Register from "../view/pages/client/Login/Register";
import Checkout from "../view/pages/client/Checkout";

const routeClient = [
    {path: "/", component: <Home/>},
    {path: "/home", component: <Home/>},
    {path: "/shop", component: <Shop/>},
    {path: "/blogs", component: <Blog/>},
    {path: "/about", component: <About/>},
    {path: "/contact", component: <Contact/>},
    {path: "/blogs/:id", component: <BlogDetail/>},
    {path: "/shop/:type/:id", component: <ProductDetail />},
    {path: "/cart" , component: <Cart/>},
    {path: "/wishlist", component: <Wishlist/>},
    {path: "/login", component: <Login/>},
    {path: "/register", component: <Register/>},
    {path: "/checkout", component : <Checkout />}

]

export default routeClient