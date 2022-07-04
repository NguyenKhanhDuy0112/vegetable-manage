import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useEffect, useState } from "react";
function PaginationAdmin({ arrData, onChangePage }) {
    const [arr, setArr] = useState([])
    const [pageCurrent, setPageCurrent] = useState(0)
    const [pagination, setPagination] = useState({ start: 1, end: 8, totalElement: arr.length, numberPage: Math.ceil(arr.length / 8) })
   
    useEffect(() => {
        setArr(arrData)
    }, [arrData])

    useEffect(() => {
        setPagination(prev => ({ ...prev, totalElement: arr.length, numberPage: Math.ceil(arr.length / 8) }))
    }, [arr])


    useEffect(() => {
        onChangePage(pagination.start, pagination.end)
    }, [pagination.end, pagination.start])

    const handleChangePage = (page) => {   
        if (page >= 0 && page <= pagination.numberPage - 1) {
            setPageCurrent(page)
            setPagination(prev => ({ ...prev, start: (page * 8) + 1, end: ((page + 1) * 8) > prev.totalElement ? prev.totalElement : ((page + 1) * 8) }))
        }
    }

    return (
        <>
            <div className="paginationAdmin px-3 py-3 mb-4">
                <div className="row align-items-center">
                    <div className="col">
                        <p className="mb-lg-0 mb-2 text-uppercase paginationAdmin__text">Showing {pagination.start}-{pagination.end} of {arr.length}</p>
                    </div>
                    <div className="col-auto">
                        <ul className="paginationAdmin__list list-unstyled d-flex align-items-center m-0">
                            <li className="paginationAdmin__list-item">
                                <button 
                                    className="paginationAdmin__list-item-btn" 
                                    onClick={() => handleChangePage(pageCurrent - 1)}
                                >
                                    <IoIosArrowBack />
                                </button>
                            </li>
                            {pagination.numberPage > 0 && Array.from({ length: pagination.numberPage }).map((item, index) => {
                                return (
                                    <li key={index} className="paginationAdmin__list-item">
                                        <button
                                            onClick={() => handleChangePage(index)}
                                            className={`paginationAdmin__list-item-btn ${index === pageCurrent ? "active" : ""}`}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                )
                            })}
                            <li className="paginationAdmin__list-item">
                                <button 
                                    onClick={() => handleChangePage(pageCurrent + 1)} 
                                    className="paginationAdmin__list-item-btn"
                                >
                                    <IoIosArrowForward />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaginationAdmin;