import React, { useState } from "react";
import 'react-bootstrap';
import Navbar from "./Components/Navbar"
import Posts from "./Components/Posts"
import PostInternshipForm from "./Components/PostInternshipForm"




const EmployerNewsfeed = (props) => {
    const [addItem, setAddItem] = useState([]);


    const addPost = (post_data) => {
        setAddItem((prevData) => {
            return [...prevData, post_data]
        })
    }



    return (
        <>
            <Navbar />
            <div className="row justify-content-center">
                <div className=" col-lg-9 employer-left-posts order-2 justify-content-around" id="leftdiv">

                    {addItem.map((val, index) => {
                        return <Posts
                            key={index}
                            id={index}
                            title={val.title}
                            name={val.name}

                        />
                    })}


                </div>
                <div className="col-lg-3 employer-right-posts order-1">
                    <PostInternshipForm createPost={addPost} />
                </div>
            </div>




        </>
    );
}

export default EmployerNewsfeed;