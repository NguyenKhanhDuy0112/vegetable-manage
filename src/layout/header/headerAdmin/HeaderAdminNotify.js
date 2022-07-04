import { useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import CardNotify from "../../../shared/components/cardNotify-admin/CardNotify";

function HeaderAdminNotify() {
    const [show, setShow] = useState(false);
    return (
        <div className='headerAdmin__notify'>
            <span className='headerAdmin__notify-icon' onClick={() => setShow(!show)}>
                <BsFillBellFill />
            </span>
            <ul className={`headerAdmin__notify-list m-0 list-unstyled ${show && "active"}`}>
                <li className='headerAdmin__notify-item'>
                    <CardNotify
                        title="Strawberry"
                        img="https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
                        date="12 December 2021-12:40pm"
                        status="Stock out"
                    />
                </li>
                <li className='headerAdmin__notify-item'>
                    <CardNotify
                        title="Strawberry"
                        img="https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
                        date="12 December 2021-12:40pm"
                        status="Stock out"
                    />
                </li>
                <li className='headerAdmin__notify-item'>
                    <CardNotify
                        title="Strawberry"
                        img="https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
                        date="12 December 2021-12:40pm"
                        status="Stock out"
                    />
                </li>
                <li className='headerAdmin__notify-item'>
                    <CardNotify
                        title="Strawberry"
                        img="https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
                        date="12 December 2021-12:40pm"
                        status="Stock out"
                    />
                </li>
                <li className='headerAdmin__notify-item'>
                    <CardNotify
                        title="Strawberry"
                        img="https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
                        date="12 December 2021-12:40pm"
                        status="Stock out"
                    />
                </li>
                <li className='headerAdmin__notify-item'>
                    <CardNotify
                        title="Strawberry"
                        img="https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
                        date="12 December 2021-12:40pm"
                        status="Stock out"
                    />
                </li>
            </ul>
        </div>
    );
}

export default HeaderAdminNotify;