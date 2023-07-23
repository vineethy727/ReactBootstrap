import {useRef} from "react";

const Events1=()=>{

    const fun_one=()=>{
        alert("login succussfull")
    }

    return(
        <button className="btn btn-info mt-5" onClick={fun_one}>click Me</button>
    )


}
export default Events1;