import React from "react";
import 'react-bootstrap';
import Navbar from "./Components/Navbar"
import Posts from "./Components/Posts"




const InterneeNewsfeed = () => {
    return (
        <>
            <Navbar />
            <Posts
            Title="Hello"
            Details="Hello jeee"

             />
            
           
        </>
    );
}

export default InterneeNewsfeed;