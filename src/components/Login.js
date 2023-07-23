import {useRef, useState} from "react";

const Login=()=>{
    const uname=useRef(``);
    const upswd=useRef(``);

    const [res, setRes]=useState(``);

    const my_fun=()=>{     

        if(uname.current.value==`vineeth`&& upswd.current.value==`vineeth@123`)
        {
            setRes(`login succefull`);
        }
        else{
            setRes(`login failed`);
        }

    }
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            UserName<input type={"text"} ref={uname} className="form control"></input>
                        </div>
                        <div className="form-group mt-3">
                            password<input type={"password"} ref={upswd} className="form control"></input>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-info" onClick={my_fun}>login</button>
                         </div>

                         
                    </div>
                   
                </div>
                <h1 className="text text-success">{res}</h1>
            </div>
        </>
    )
}
export default Login;