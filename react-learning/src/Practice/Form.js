import React, { useState } from "react";

const Form = () => {
    const [value, setValue] = useState("");
    const handleInput = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
        alert(value ? "form is submitted" : "please enter input");
        event.preventDefault();
        console.log("form data", value);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={value} onChange={(e) => handleInput(e)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};
export default Form;
