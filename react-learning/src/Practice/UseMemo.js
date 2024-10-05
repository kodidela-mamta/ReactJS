import React, { useState, useMemo } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);
    const style = {
        display: 'flex',
        flexDirection: 'column',
        backGroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    const expensiveValue = useMemo(() => {
        return expensiveCalculation(count);
    }, [count]);

    function expensiveCalculation(value) {
        console.log("Use Memo");
        for (let i = 0; i > 1000; i++) { }
        return value;
    }
    return (
        <div style={style}>
            <input type="number" value={count} onChange={() => setCount(count + 1)} />
            <p>Expensive Value : {expensiveValue}</p>
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    );
};
export default UseMemo;
