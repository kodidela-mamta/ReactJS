import React, { useState, useEffect, useRef } from "react";
import Counter from "./Counter";
import FormsHandling from "./FormsHandling";
import DataFetching from "./DataFetching";
// import ContextApi from "./ContextApi";
import FocusInput from "./FocusInput";
import CounterRef from "./CounterRef";
import MyInput from "./Forwardref";
import Form from "./Form";
import useFetch from "../CustomHooks/useFetch";
import '../../src/styles.css'
function PropsExample(props) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <span>DefaultProps Example</span>: Hello {props.name}
    </div>
  );
}
function ArrayRendering(props) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      Render List Items Example :
      {props?.array?.map((obj) => {
        return <span key={obj}>{obj}</span>;
      })}
    </div>
  );
}
function FunctionalBasedExample() {
  let array = [1, 2, 3, 4, 5];
  const [count, setCounter] = useState(0);
  const [incrementCount, setIncrementCount] = useState(0);
  const [name, setName] = useState("");
  // const [value, setValue] = useState("Hello World");
  useEffect(() => { }, []); // if dependency array is empty, the useEffect run only once on render ,similar as componentmount()
  useEffect(() => { }, [name]); // if dependency array is not empty, then useEffect runs whenever dependency updates , similar like componentDidUpdate()
  useEffect(() => {
    return () => { }; // this is like component unmount in class based component, similar like componentUnmount()
  }, []);
  const counterRef = useRef(0);
  const inputForwardRef = useRef(null);
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users")
  console.log(data, loading, 'mamta')
  const incrementCountUsingRef = () => {
    console.log(counterRef.current);
    setIncrementCount((counterRef.current = counterRef.current + 1));
  };
  const handleClick = () => {
    setCounter(count + 1);
  };

  const handleInput = (value) => {
    setName(value);
  };
  const handleForwardRef = () => {
    inputForwardRef.current.focus();
  };
  return (
    <>
      <h3>Functional Based Examples</h3>
      <div className="mainContianer">
        <div className="subContainer">
          <PropsExample name="mamta" />
          {/*   default props are used for default value for null name , here name props didn't have value so default used */}
          <Counter count={count} incrementCount={handleClick} />
          {/* render list if items  */}
          <ArrayRendering array={array} />
          {/* handle input example component */}
          <FormsHandling
            name={name}
            handleChange={(e) => handleInput(e.target.value)}
          />
          {/* // Data Fetching Example  */}
          <DataFetching />
        </div>

        <div className="subContainer">
          {/* <PropDrilling  /> */}
          {/* context api example  */}
          {/* <ContextApi /> */}
          {/* useref example  */}
          <FocusInput />
          {/* count increment using useRef  */}
          <CounterRef
            counterRef={incrementCount}
            incrementCountUsingRef={incrementCountUsingRef}
          />
          {/* count increment using forwardRef  */}
          <MyInput ref={inputForwardRef} handleForwardRef={handleForwardRef} />
          {/* simple form */}
          <Form />
          {/* useFetch custom hook and data fetching  */}
          {loading && <h3>loading....</h3>}
          {data && data.length}
        </div>


      </div></>
  );
}
PropsExample.defaultProps = {
  name: "Guest", // default props are used for default value for null name , here name props didn't have value so default used
};
export default FunctionalBasedExample;
