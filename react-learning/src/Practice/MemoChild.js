import React from "react";

function MemoChild({ value }) {
    // this React.memo means only when props : value changes this component renders, else not
    console.log("child in memo");
    return <p>{value}</p>;
}
export default React.memo(MemoChild);
