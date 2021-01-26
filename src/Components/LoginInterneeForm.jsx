import React from "react";



const LoginInterneeForm = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, 
        handleSignup,hasAccount, setHasAccount, emailError, passwordError } = props;


    return (
        <>
            <div className="col-lg-5 order-2 order-lg-1">
                <div className="row justify-content-center marging-top">
                    <div className="col-7 form-box pb-5">

                        <h4 className="sign-in-heading" >Sign In</h4>
                        <form role="form" action="InterneeNewsfeed" className="form-center-allignment" >
                            <div className="form-group">
                                <input type="email" className="input-color" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required />
                                <p>{emailError}</p>
                            </div>
                            <div className="form-group">
                                <input type="password" className="input-color" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required />
                                <p>{passwordError}</p>
                            </div>
                            <div className="mt-2" >
                                <button type="submit" onClick={handleLogin} className="purple-button purple-button-width">Login</button>
                            </div>
                        </form>
                        <div>
                            <p className="Sub-Heading-login mt-3 text-right">Not a member? <a href="/InterneeSignup" className="sign-up-link">Sign Up</a></p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default LoginInterneeForm;


