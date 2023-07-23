import {useRef, useState} from "react";

const Register=()=>{
    const uname=useRef(``);
    const umail=useRef(``);
    const umobile=useRef(``);
    const ucity=useRef(``);
    
    
    const [name,setName]=useState(``);
    const [mail,setMail]=useState(``);
    const [mobile,setMobile]=useState(``);
    const [city,setCity]=useState(``);

    const my_fun=()=>{
        setName(uname.current.value);
        setMail(umail.current.value);
        setMobile(umobile.current.value);
        setCity(ucity.current.value);
    }
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            UserName<br></br><input type={"text"} ref={uname} className="form-control"></input>
                        </div>

                        <div className="form-group mt-3">
                            UserEmail<br></br><input type={"email"} ref={umail} className="form-control"></input>
                        </div>

                        <div className="form-group mt-3">
                            UserMobile<br></br><input type={"number"} ref={umobile} className="form-control"></input>
                        </div>

                        <div className="form-group mt-3">
                            UserCity<br></br><input type={"text"} ref={ucity} className="form-control"></input>
                        </div>
                        
                        <div className="form-group mt-5">
                            <button className="btn btn-info" onClick={my_fun}>login</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <table border={2}
                                aligh={"center"}
                                cellSpacing={50}
                                cellPadding={10}>
                           <tbody>
                           <tr>
                                <td>Name</td><td>{name}</td>
                                
                            </tr>
                            <tr>
                            <td>Mail</td><td>{mail}</td>
                                
                            </tr>
                            <tr>
                            <td>Mobile</td><td>{mobile}</td>
                                
                            </tr>
                            <tr>
                            <td>City</td><td>{city}</td>
                            </tr>
                           </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;