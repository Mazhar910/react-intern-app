import React from "react";
import 'react-bootstrap';
import Internee from "./Images/internee.svg"
import Company from "./Images/company.svg"



const IntEmp = () => {
    return (
        <>
        

            <div className="margins">
                <div className="row justify-content-center">
                    <div className="col-lg-4 order-2 order-lg-1 mx-5 margin-top-small"  >
                        <img src={Internee} className="img-fluid login-pic-one mx-auto d-block" alt="Internee" />
                        <div className="mt-lg-5 mt-3">
                            <a href="/InterneeLogin" className="purple-button mx-auto d-block text-center">Login as Internee</a>
                        </div>

                    </div>


                    <div className="col-lg-4 order-1 order-lg-1 mx-5" >
                        <img src={Company} className="img-fluid login-pic-two mx-auto d-block" alt="Company" />
                        <div className="mt-lg-5 mt-3">
                            <a href="/EmployeeLogin" className="purple-button mx-auto d-block text-center">Login as Employer</a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default IntEmp;