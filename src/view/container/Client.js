import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import FooterClient from "../../layout/footer/FooterClient";
import HeaderClient from "../../layout/header/headerClient/HeaderClient";
import NavMobile from "../../layout/navigation/navigationClient/NavMobile";
import { hideModal } from "../../modules/modalProductItem/modalProduct";
import routeClient from "../../routes/routeClient";
import ProductItemModal from "../../shared/components/ProductItem/ProductItemModal";

function Client() {
    const showModal = useSelector(state => state.modalProduct.status)
    const dispatch  = useDispatch()
    
    const handleClose = () => dispatch(hideModal(false))

    return ( 
        <>
            <HeaderClient/>
            <Routes>
                {routeClient.map((route,index) => <Route key={index} path = {route.path} element = {route.component}/>)}
            </Routes>
            <ProductItemModal onShow={showModal} handleClose = {handleClose}/>
           
            <FooterClient/>
            <NavMobile/>
        </>
     );
}

export default Client;