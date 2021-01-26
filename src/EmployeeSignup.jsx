import React from "react";
import 'react-bootstrap';


const EmployeeSignup = () => {
    return (
        <>

            <div className="col-lg-8 order-2 order-lg-1 mx-auto d-block sign-up-form-box">
                <div className="row justify-content-center marging-top">
                    <div className="col-8 form-box pb-5 ">

                        <h4 className="sign-in-heading">Register Here</h4>
                        <form role="form" action="EmployerNewsfeed" className="form-center-allignment" >

                            <div className="form-group">
                                <input type="text" className="sign-up-input-color " placeholder="Company Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="sign-up-input-color " placeholder="Company Email" required />
                            </div>
                            <div className="form-group">

                                <input type="tel" className="sign-up-input-color" placeholder="Enter Phone No" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="sign-up-input-color" placeholder="Company Address" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="sign-up-input-color " placeholder="Enter City" required />
                            </div>
                            <div className="form-group">
                                <select className="sign-up-input-color">
                                    <option value="" defaultValue>Company Type</option>
                                    <option value="Government">Government</option>
                                    <option value="Private">Private</option>
                                    <option value="Semi-Government">Semi-Government</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="password" className="sign-up-input-color" placeholder="Enter Password" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="sign-up-input-color" placeholder="Confirm Password" required />
                            </div>

                            <div className="mt-5" >
                                <button type="submit" className="purple-button purple-button-width">Sign Up</button>
                            </div>
                        </form>

                    </div>
                </div>
                </div>







        </>
    );
}

export default EmployeeSignup;