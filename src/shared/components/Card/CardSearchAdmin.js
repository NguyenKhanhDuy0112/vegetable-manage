
function CardSearchAdmin({ img,title , code, quantity, price }) {
    return (
        <>
            <div className="container">
                <div className="cardSearchAdmin d-flex align-items-center p-2">
                    <div className="cardSearchAdmin__img">
                        <img 
                            className="rounded-circle cardSearchAdmin__img-child" 
                            src = {img} 
                            alt = ""
                        />
                    </div>
                    <div className="cardSearchAdmin__content ms-2 w-100">
                        <div className="row">
                            <div className="col">
                                <p className="cardSearchAdmin__content-title mb-2">{title}</p>
                                <p className="cardSearchAdmin__content-id mb-1">ID: {code}</p>
                                <p className="cardSearchAdmin__content-quantity mb-1">Quantity: {quantity}</p>
                            </div>
                            <div className="col-auto">
                                <p className="cardSearchAdmin__content-price">${price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CardSearchAdmin;