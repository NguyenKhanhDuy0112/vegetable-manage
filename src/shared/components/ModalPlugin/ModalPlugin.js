import { MdClose } from "react-icons/md";

function ModalPlugin({ children, position, show, onHide, header, width, background, noneContainer }) {
    return (
        <>
            <div className={`overlay ${show ? "active" : ""}`} onClick={onHide}></div>
            <div className={`modalPlugin ${position} ${show ? "active" : ""}`} style={{ width: `${width}vh`, backgroundColor: `${background ? background : "#fff"}` }}>
                {position !== "center" &&
                    <div className={`${header ? "modalPlugin__header" : ""}`}>
                        <div className={`justify-content-between align-items-center ${position === "center" ? "d-inline-flex" : "d-flex"} ${noneContainer ? "px-2" : "container"}`}>
                            <h5 className="mb-0 modalPlugin__header-title">{header}</h5>
                            <h5 onClick={onHide} className="modalPlugin__header-icon mb-0 p-2 cursor-pointer"><MdClose /></h5>
                        </div>
                    </div>
                }
                {position === "center" && <h5 onClick={onHide} className="d-inline-block position-absolute top-0 end-0 mb-0 p-2 cursor-pointer"><MdClose /></h5>}
                {position === "center" ?
                    children
                    : <div className={`${noneContainer ? "px-1" : "container mt-2"} h-100`}>
                        {children}
                    </div>
                }
            </div>
        </>
    );
}

export default ModalPlugin;