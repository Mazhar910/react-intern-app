import React from "react";
import 'react-bootstrap';
import HomeImage from "./Images/home_image.svg"


const Home = () => {
    return (
        <>
            <div className="margins">
                <div className="row justify-content-center mx-auto">
                    <div className="col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1" >
                        <h1>
                            <strong className="Main-Heading">InternsHub</strong>
                        </h1>
                        <h3 className="my-3 Sub-Heading">
                            A Platform that connects talent with opportunity.
                            InternsHub provides services to the internship seekers and
                            employers by providing them one platform for internship
                            searching and hiring, respectively.<br />
                        </h3>
                        <h3 className="my-1 Sub-Heading">
                            <strong>Join us and gain work experience and kick start your career!</strong>
                        </h3>
                        <div className="mt-4">
                            <a href="/IntEmp" className="purple-button">Get Started</a>
                        </div>

                    </div>
                    <div className="col-lg-5 order-1 order-lg-1" >
                        <img src={HomeImage} className="img-fluid" alt="Home" />

                    </div>

                </div>
            </div>





        </>
    );
}

export default Home;