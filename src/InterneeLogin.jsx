import React, { useState, useEffect } from "react";
import fire from "./fire"
import 'react-bootstrap';
import Member from "./Images/member.svg"
import LoginInterneeForm from "./Components/LoginInterneeForm"
import Navbar from "./Components/Navbar"
import InterneeNewsfeed from "./InterneeNewsfeed";



const InterneeLogin = () => {

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



    return (
        <>
            <div className="margins-login">
                <div className="row justify-content-center">

                    <div className="col-lg-5 pt-5 pt-lg-0 order-1 order-lg-1 text-center" >
                        <h1>
                            <strong className="sign-in-heading">Already a Member?</strong>
                        </h1>
                        <img src={Member} className="img-fluid intern-login-pic" alt="Member" />
                    </div>

                            <LoginInterneeForm
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                handleLogin={handleLogin}
                                handleSignup={handleSignup}
                                hasAccount={hasAccount}
                                setHasAccount={setHasAccount}
                                emailError={emailError}
                                passwordError={passwordError}
                            />




                </div>
            </div>
        </>
    );
}

export default InterneeLogin;