import React, { useState } from "react";
import MemoChild from "./MemoChild";

const MemoComponent = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);
    const style = {
        color: dark ? 'white' : 'black',
        backgroundColor: dark ? 'black' : 'white'
    }
    return (
        <>
            <p>Count :{count}</p>
            <MemoChild value={count} />
            <button onClick={() => setCount(count + 1)}>Counter</button>
            <button style={style} onClick={() => setDark(!dark)}>Toggle</button>

        </>
    )
}
export default MemoComponent;