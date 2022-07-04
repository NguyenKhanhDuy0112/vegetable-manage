import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
function PaginationClient({ data, show, onChangePage}) {
    const [arr, setArr] = useState([])

    const [pagination, setPagination] = useState(
        {
            start: 0,
            end: show,
            totalElement: arr.length,
            totalPage: Math.ceil(arr.length / show)
        }
    )

    const [pageCurrent, setPageCurrent] = useState(0)

    useEffect(() => {
        setArr(data)
    },[data])

    useEffect(() => setPagination(prev => ({...prev, totalElement: arr.length, totalPage : Math.ceil(arr.length / show)})), [arr])

    useEffect(() => {
        onChangePage(pagination.start, pagination.end)
    },[pagination.start, pagination.end])

    const handleChangePage = (page) => {
        setPageCurrent(page)
        setPagination(prev => ({...prev,start: (page * show) + 1, end: (page + 1) * show > prev.totalElement ? prev.totalElement : (page+1) * show}))
    }

    return (
        <>
            <ul className="paginationClient d-flex m-0 p-0 list-unstyled pt-5 py-5 justify-content-center align-items-center">
                {Array.from({ length: pagination.totalPage }).map((item, index) => {
                    return (
                        <li key = {index} className="py-2 px-1">
                            <button onClick={() => handleChangePage(index)} className={`paginationClient__child ${index === pageCurrent ? "active" : ""}`}>{index + 1}</button>
                        </li>
                    )
                })}

                <li className="py-2 px-1">
                    <button className="paginationClient__child next">
                        Next <span className="me-1"><MdOutlineKeyboardArrowRight /></span>
                    </button>
                </li>
            </ul>
        </>
    );
}

export default PaginationClient;