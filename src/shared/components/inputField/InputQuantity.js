import { useState } from "react";

function InputQuantity() {
    const [quantity, setQuantity] = useState(1)
    return (
        <div className="inputQuantity">
            <button 
                className="inputQuantity__btn minus" 
                onClick={() => setQuantity(prev => prev - 1 < 1 ? prev : prev -1 )}
            >
                -
            </button>
            <input className="inputQuantity__input" value={quantity}/>
            <button 
                className="inputQuantity__btn plus"
                onClick={() => setQuantity(prev => prev + 1)}
            >
                +
            </button>
        </div>
    );
}

export default InputQuantity;