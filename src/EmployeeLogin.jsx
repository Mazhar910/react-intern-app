import React from "react";
import 'react-bootstrap';
import EmpMember from "./Images/employeemember.svg"




const EmployeeLogin = () => {
    return (
        <>
                       <div className="margins-login">
                <div className="row justify-content-center">
                
                    <div className="col-lg-5 pt-5 pt-lg-0 order-1 order-lg-1 text-center" >
                        <h1>
                            <strong className="sign-in-heading">Already Registered?</strong>
                        </h1>
                        <img src={EmpMember} className="img-fluid intern-login-pic" alt="EmployeeMember" />
                    </div>
                    
                    <div className="col-lg-5 order-2 order-lg-1 ">
                        <div className="row justify-content-center">
                            <div className="col-7 form-box pb-5">

                                <h4 className="sign-in-heading">Sign In</h4>
                                <form role="form" action="EmployerNewsfeed" className="form-center-allignment" >
                                    <div className="form-group">
                                        <input type="email" className="input-color " placeholder="Enter Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="input-color" placeholder="Enter Password" required />
                                    </div>
                                    <div className="mt-2" >
                                        <button type="submit" className="purple-button purple-button-width">Login</button>
                                    </div>
                                </form>
                                <div>
                                    <p className="Sub-Heading-login mt-3 text-right">Not registered yet? <a href="/EmployeeSignup" className="sign-up-link">Register Now</a></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeLogin;