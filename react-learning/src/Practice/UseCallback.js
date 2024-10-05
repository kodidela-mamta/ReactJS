import React, { useState, useCallback } from "react";
import ChildCallback from "./ChildUseCallback";

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);
    const style = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    // useCallback(() => {
    //     return calculateNumber(count)
    // }, [calculateNumber])

    const calculateNumber = useCallback(() => {
        return [count * 1, count * 2];
    }, [count]);

    return (
        <div style={style}>
            <input type="number" value={count} onChange={() => setCount(count + 1)} />
            <ChildCallback calculateNumber={calculateNumber} />
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    );
};
export default UseCallback;
