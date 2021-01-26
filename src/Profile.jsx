import React from "react";
import 'react-bootstrap';
import Internee from "./Images/internee.svg"
import Company from "./Images/company.svg"
import Navbar from "./Components/Navbar"



const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="row justify-content-center">
                <div className="col-lg-4 order-1 order-lg-1 mx-2 image-margin-top margin-top-small"  >
                    <img src={Internee} className="img-fluid login-pic-one my-auto mx-auto d-block" alt="Internee" />
                    <div className="mt-lg-5 mt-3">
                        <h1 href="/InterneeLogin" className="Main-Name-Heading mx-auto d-block text-center">Abaad Murtaza</h1>
                    </div>

                </div>


                <div className="col-lg-5 order-2 order-lg-1 mx-5" >
                    <div className="internship-create-form">
                        <h4 className="sign-in-heading">Details</h4>

                        {/* <label className="show-details">Email: <i className="Sub-Heading show-data">abaadmurtaza105@gmail.com</i></label><br />
                        <label className="show-details">Phone Number: <i className="Sub-Heading show-data">0342-0020734</i></label><br />
                        <label className="show-details">Gender: <i className="Sub-Heading show-data">Male</i></label><br />
                        <label className="show-details">CNIC: <i className="Sub-Heading show-data">61101-0108134-9</i></label><br />
                        <label className="show-details">Education: <i className="Sub-Heading show-data">Undergraduate</i></label><br />
                        <label className="show-details">City: <i className="Sub-Heading show-data">Karachi</i></label><br />
                        <label className="show-details">Address: <i className="Sub-Heading show-data">E-193 Kausar Town Malir</i></label><br />
                        <label className="show-details">About: <i className="Sub-Heading show-data"></i></label><br /> */}

                        <table>
                            <tr>
                                <td className="show-details">Email:</td>
                                <td className="Sub-Heading show-data">abaadmurtaza105@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="show-details">Phone #:</td>
                                <td className="Sub-Heading show-data">0342-0020734</td>
                            </tr>
                            <tr>
                                <td className="show-details">Gender:</td>
                                <td className="Sub-Heading show-data">Male</td>
                            </tr>
                            <tr>
                                <td className="show-details">CNIC:</td>
                                <td className="Sub-Heading show-data">61101-0108134-9</td>
                            </tr>
                            <tr>
                                <td className="show-details">Education:</td>
                                <td className="Sub-Heading show-data">Undergraduate</td>
                            </tr>
                            <tr>
                                <td className="show-details">City:</td>
                                <td className="Sub-Heading show-data">Karachi</td>
                            </tr>
                            <tr>
                                <td className="show-details">Address:</td>
                                <td className="Sub-Heading show-data">E-193 Kausar Town Malir</td>
                            </tr>
                            <tr>
                                <td className="show-details">About:</td>
                                <td className="Sub-Heading show-data text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a 
                                type specimen book. It has survived not only five centuries, but also the 
                                leap into electronic typesetting.
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Profile;