import { FaShoppingBag } from 'react-icons/fa'
import { FiCompass, FiSettings, FiShoppingBag, FiUsers } from 'react-icons/fi';
import { IoLogOutOutline } from 'react-icons/io5'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { GoGift, GoNote } from 'react-icons/go'
import { BsBarChart } from "react-icons/bs"

import LinkAdmin from '../../../shared/components/LinkAdmin/LinkAdmin';
function NavigationAdmin({ isShow, onShow }) {

    const handleCloseNavigation = () => {
        onShow(false)
    }
    return (
        <>
            <nav className= {`navigationAdmin shadow-sm ${isShow ? "active" : ""}`}>
            <div className="container h-100">
                <div className='row navigationAdmin__container h-100 flex-nowrap'>
                    <div className='col-auto p-0'>
                        <div className="navigationAdmin__top d-flex align-items-center px-4">
                            <FaShoppingBag className='headerAdmin__mode-icon mb-1 me-2 fs-5' />
                            <h4 className="navigationAdmin__top-title mb-0 fw-bolder">Dashtar</h4>
                        </div>
                    </div>
                    <div className='col p-0'>
                        <ul className='navigationAdmin__list list-unstyled mb-0'>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = {<MdOutlineDashboard/>} 
                                    text = "Dashboard" 
                                    to ="/admin/dashboard"
                                />
                            </li>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = {<FiShoppingBag/>} 
                                    text = "Product" 
                                    to ="/admin/products"
                                />
                            </li>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = {<AiOutlineBars/>} 
                                    text = "Category" 
                                    to ="/admin/category"
                                />
                            </li>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = {<FiUsers/>} 
                                    text = "Customers" 
                                    to ="/admin/customer"
                                />
                            </li>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = {<FiCompass/>} 
                                    text = "Order" 
                                    to ="/admin/order"
                                />
                            </li>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = {<GoNote/>} 
                                    text = "Blog" 
                                    to ="/admin/blog"
                                />
                            </li>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = {<GoGift/>} 
                                    text = "Coupons" 
                                    to ="/admin/coupon"
                                />
                            </li>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = {<BsBarChart/>} 
                                    text = "Statistical" 
                                    to ="/admin/satistical"
                                />
                            </li>
                            <li onClick={handleCloseNavigation} className='navigationAdmin__item'>
                                <LinkAdmin 
                                    icon = { <FiSettings/>} 
                                    text = "Setting" 
                                    to ="/admin/setting"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className='col-auto w-100 px-4'>
                        <button className="btn btn-success w-100 my-4">
                            <span className='me-2'><IoLogOutOutline/></span>
                            Log out
                        </button>
                    </div>
                </div>

            </div>
        </nav>
        </>
    );
}

export default NavigationAdmin;