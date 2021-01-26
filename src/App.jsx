import React, {useState, useEffect} from "react";
import fire from "./fire"
// import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import IntEmp from "./IntEmp";
import InterneeLogin from "./InterneeLogin"
import EmployeeLogin from "./EmployeeLogin"
import InterneeSignup from "./InterneeSignup"
import EmployeeSignup from "./EmployeeSignup"
import InterneeNewsfeed from "./InterneeNewsfeed";
import EmployerNewsfeed from "./EmployerNewsfeed";
import Profile from "./Profile";



const App = () => {
    


    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/IntEmp" component={IntEmp} />
                    <Route exact path="/InterneeLogin" component={InterneeLogin} />
                    <Route exact path="/EmployeeLogin" component={EmployeeLogin} />
                    <Route exact path="/InterneeSignup" component={InterneeSignup} />
                    <Route exact path="/EmployeeSignup" component={EmployeeSignup} />
                    <Route exact path="/InterneeNewsfeed" component={InterneeNewsfeed} />
                    <Route exact path="/EmployerNewsfeed" component={EmployerNewsfeed} />
                    <Route exact path="/Profile" component={Profile} />






                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;