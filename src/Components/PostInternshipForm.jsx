import React, { useState } from "react";


const PostInternshipForm = (props) => {

    const [post_data, set_post_data] = useState({
        name: "",
        title: "",
    })

    const InputEvent = (event) => {

        const { name, value } = event.target;

        set_post_data((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });

    };
    const addEvent= () => {
        props.createPost(post_data);

    }

    return (
        <>
            <div className="internship-create-form">
                <h4 className="sign-in-heading">Post Internship</h4>

                <form role="form" className="form-center-allignment" >

                    <div className="form-group">
                        <input type="text" value={post_data.name} name="name" onChange={InputEvent} className="sign-up-input-color " placeholder="Company Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" value={post_data.title} name="title" onChange={InputEvent} className="sign-up-input-color " placeholder="Title" required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="sign-up-input-color " placeholder="Internship Period" required />
                    </div>
                    <div className="form-group">
                        <select className="sign-up-input-color">
                            <option value="" defaultValue>Internship Type</option>
                            <option value="Government">Paid</option>
                            <option value="Private">Unpaid</option>
                        </select>
                    </div>
                    <textarea className="sign-up-input-color " rows="4" cols="7" placeholder="Description..">
                    </textarea>

                    <div className="mt-3" >
                        <button onClick={addEvent} className="purple-button purple-button-width">Post</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default PostInternshipForm;


