import React, { useState, useEffect } from "react";
import fire from "./fire"
import 'react-bootstrap';


const InterneeSignup = (props) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }
    const clearError = () => {
        setEmailError("");
        setPasswordError("");
    }



    const handleLogin = () => {
        clearError()
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    }

    const handleSignup = () => {
        clearError()
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    }

    const handleLogout = () => {
        fire
            .auth()
            .signOut();
    }

    const authListner = () => {
        fire
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    clearInputs();
                    setUser(user);
                } else {
                    setUser("");
                }
            });
    }

    useEffect(() => {
        authListner();
    }, [])

    // const {email, setEmail, password, setPassword, handleLogin, 
    //     handleSignup,hasAccount, setHasAccount, emailError, passwordError } = props;
    return (
        <>

            <div className="col-lg-8 order-2 order-lg-1 mx-auto d-block sign-up-form-box">
                <div className="row justify-content-center forms-border">
                    <div className="col-8 form-box pb-5 ">

                        <h4 className="sign-in-heading">Sign up</h4>
                        
                        <form role="form" action="InterneeNewsfeed" className="form-center-allignment" >

                            <div className="form-group">
                                <input type="text" className="sign-up-input-color " placeholder="First Name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="sign-up-input-color " placeholder="Last Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="sign-up-input-color "  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="sign-up-input-color" placeholder="Enter Phone No" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="sign-up-input-color"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required />
                            </div>
                            <div className="form-group">

                                <input type="password" className="sign-up-input-color" placeholder="Confirm Password" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="sign-up-input-color" placeholder="Enter CNIC" required />
                            </div>

                            <div className="form-group">
                                <input type="text" className="sign-up-input-color " placeholder="Enter City" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="sign-up-input-color " placeholder="Enter Education" required />
                            </div>
                            <div className="form-group">
                                <select className="sign-up-input-color">
                                    <option value="" defaultValue>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group ">
                                <label className="file-label-styling">Upload your Picture:</label>
                                <input type="file" className="input-color-file" id="myfile" name="myfile" />

                            </div>
                            <div className="form-group ">
                                <label className="file-label-styling">Upload your Resume:</label>
                                <input type="file" className="input-color-file" id="myfile" name="myfile" />

                            </div>
                            <div className="mt-2" >
                                <button type="submit" onClick={handleSignup} className="purple-button purple-button-width">Sign Up</button>
                            </div>

                        </form>
                    </div>
                </div></div>







        </>
    );
}

export default InterneeSignup;