import { useEffect, useState } from "react";
import Status from "../Status/Status";

function CardNotify({img, title, status, date}) {
    const [statusType, setStatusType] = useState('');
    useEffect(() => {
        const sta = status.toLowerCase()
        if(sta === "stock out"){
            setStatusType('cancel')
        }
        else{
            setStatusType('delivered')
        }
    },[status])
    
    return ( 
        <>
            <div className="card__notify">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <img className="card__notify-img" src={img} alt = ""/>
                    </div>
                    <div className="col">
                        <h6 className="card__notify-title mb-1">{title}</h6>
                        <div className="card__notify-content d-flex align-items-center">
                            <Status status={status} type={statusType}/>
                            <small className="card__notify-content-date">{date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default CardNotify;