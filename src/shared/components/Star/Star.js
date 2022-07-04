import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Star({ value, size }) {
    return ( 
        <p className={`mb-0 fs-${size ? size : "5"}`}>
            {Array.from({length: 5}).map((item,index) => {
                return value > index ?  <span key = {index} style={{color: "rgb(244,195,64)"}}><AiFillStar/></span> :<span key = {index} style = {{color:"rgb(219,219,219)"}}><AiOutlineStar/></span> 
            })}
        </p>
     );
}

export default Star;