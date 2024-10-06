import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State";

const Shop = () => {
    const dispatch = useDispatch()
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
    const balance = useSelector(state => state.amount)
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-primary" onClick={() => withdrawMoney(100)}>-</button>
            <span>
                Update Balance : {balance}
            </span>
            <button className="btn btn-primary" onClick={() => depositMoney(100)}>+</button>
        </div>
    );
};

export default Shop;
