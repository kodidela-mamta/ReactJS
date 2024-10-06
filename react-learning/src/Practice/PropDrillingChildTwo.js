import React from "react";

const PropDrillingChildTwo = ({ courseDetails }) => {
    console.log("PropDrillingChildTwo", courseDetails);
    return (
        <div>
            <span>Course Name: {courseDetails.name}</span>
            <span>Course Price: {courseDetails.price}</span>
        </div>
    );
};

export default PropDrillingChildTwo;
