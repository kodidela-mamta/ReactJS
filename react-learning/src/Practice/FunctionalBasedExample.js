import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Counter from "./Counter";
import FormsHandling from "./FormsHandling";
import DataFetching from "./DataFetching";
// import ContextApi from "./ContextApi";
import FocusInput from "./FocusInput";
import CounterRef from "./CounterRef";
import MyInput from "./Forwardref";
import Form from "./Form";
import useFetch from "../CustomHooks/useFetch";
import "../../src/styles.css";
import ComponentRender from "../CustomComponents/ComponentRender";

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
function DataFetchRender(props){
  return(
    <div style={{ display: 'flex' }}>{props.data && props.data.map((obj) => <p>{obj.id}{',  '}</p>)}</div>
  )
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
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(data, loading, "mamta");
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
  const navigate = useNavigate();
  function handleRedirect() {
    navigate(`/classComponent`)
  }
  return (
    <>
      <h3>Functional Based Examples</h3>
      <button onClick={handleRedirect}>Go to Class Component Example Page</button>
      {/* <Navigation /> */}
      <div className="mainContainer">
        <div className="subContainer">
          <ComponentRender title='Props' description='default props are used for default value for null name , here name props did not have value so default used' componentRender={<PropsExample name="mamta" />} />
          <ComponentRender title='Counter' componentRender={<Counter count={count} incrementCount={handleClick} />}/>
          <ComponentRender title='render list if items' description='render list if items' componentRender={<ArrayRendering array={array} />} />
          <ComponentRender title='handle input example component' description='handle input example component' componentRender={
            <FormsHandling
            name={name}
            handleChange={(e) => handleInput(e.target.value)}
          />} />
          <ComponentRender title='Data Fetching Example' description='Data Fetching Example' componentRender={<DataFetching />} />
          <ComponentRender title='useFetch custom hook and data fetching' description='useFetch custom hook and data fetching' componentRender=
{<DataFetchRender />} />
        </div>

        <div className="subContainer">
          <ComponentRender title='useref example' description='useref example' componentRender={<FocusInput />} />
          {/* <PropDrilling  /> */}
          {/* context api example  */}
          {/* <ContextApi /> */}
          <ComponentRender title='count increment using useRef' description='count increment using useRef' componentRender={<CounterRef
            counterRef={incrementCount}
            incrementCountUsingRef={incrementCountUsingRef}
          />} />
          <ComponentRender title='count increment using forwardRef' description='count increment using forwardRef' componentRender={<MyInput ref={inputForwardRef} handleForwardRef={handleForwardRef} />} />
          <ComponentRender title='simple form' description='Simple form' componentRender={<Form />} />
        </div>
      </div>
    </>
  );
}
PropsExample.defaultProps = {
  name: "Guest", // default props are used for default value for null name , here name props didn't have value so default used
};
export default FunctionalBasedExample;
