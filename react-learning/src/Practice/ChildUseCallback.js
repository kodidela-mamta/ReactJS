import React, { useEffect, useState } from "react";

const ChildCallback = ({ calculateNumber }) => {
    const [row, setRow] = useState([])

    useEffect(() => {
        console.log('child called in useCallback');
        setRow(calculateNumber)
    }, [calculateNumber])
    return (
        <>
            {row.map(obj => (<span>{obj}</span>))}
        </>
    )
}
export default ChildCallback;