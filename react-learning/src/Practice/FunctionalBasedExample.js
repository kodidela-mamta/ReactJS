import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import FormsHandling from "./FormsHandling";
import FocusInput from "./FocusInput";
import CounterRef from "./CounterRef";
import MyInput from "./ForwardRef";
import Form from "./Form";
import useFetch from "../CustomHooks/useFetch";
import "../../src/styles.css";
import ComponentRender from "../CustomComponents/ComponentRender";
import UseCallback from "./UseCallback";
import UseMemo from "./UseMemo";
import MemoComponent from "./MemoComponent";
import ContextApi from "./ContextApi";
import PropDrilling from "./PropDrilling";

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
  useEffect(() => { }, []); // if dependency array is empty, the useEffect run only once on render ,similar as componentMount()
  useEffect(() => { }, [name]); // if dependency array is not empty, then useEffect runs whenever dependency updates , similar like componentDidUpdate()
  useEffect(() => {
    return () => { }; // this is like component unmount in class based component, similar like componentUnmount()
  }, []);
  const counterRef = useRef(0);
  const inputForwardRef = useRef(null);
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  // const navigate = useNavigate();
  function handleRedirect() {
    // navigate(`/classComponent`);
  }
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
      <button onClick={handleRedirect}>
        Go to Class Component Example Page
      </button>
      {/* <Navigation /> */}
      <div className="mainContainer">
        <div className="subContainer">
          <ComponentRender
            title="Props"
            description="Default props are used for default value for null name , here name props did not have value so default used"
            componentRender={<PropsExample name="Props" />}
          />
          <ComponentRender
            title="Counter"
            componentRender={
              <Counter count={count} incrementCount={handleClick} />
            }
          />
          <ComponentRender
            title="Prop Drilling"
            componentRender={
              <PropDrilling />
            }
          />
          <ComponentRender
            title="Context Api Example"
            description={'Context api is used to avoid prop drilling, or alternative and effective way of data sharing between components'}
            componentRender={
              <ContextApi />
            }
          />
          <ComponentRender
            title="Render list if items"
            description="Render list if items"
            componentRender={<ArrayRendering array={array} />}
          />
          <ComponentRender
            title="Handle input example component"
            description="Handle input example component"
            componentRender={
              <FormsHandling
                name={name}
                handleChange={(e) => handleInput(e.target.value)}
              />
            }
          />
          <ComponentRender
            title="UseFetch custom hook and data fetching"
            description="UseFetch custom hook and data fetching"
            componentRender={
              <div style={{ display: "flex" }}>
                {data &&
                  data.map((obj) => (
                    <p>
                      {obj.id}
                      {",  "}
                    </p>
                  ))}
              </div>
            }
          />
        </div>
        <div className="subContainer">
          <ComponentRender
            title="UseRef example"
            description="UseRef example"
            componentRender={<FocusInput />}
          />
          <ComponentRender
            title="Count increment using useRef"
            description="Count increment using useRef"
            componentRender={
              <CounterRef
                counterRef={incrementCount}
                incrementCountUsingRef={incrementCountUsingRef}
              />
            }
          />
          <ComponentRender
            title="Count increment using forwardRef"
            description="Count increment using forwardRef"
            componentRender={
              <MyInput
                ref={inputForwardRef}
                handleForwardRef={handleForwardRef}
              />
            }
          />
          <ComponentRender
            title="Simple form"
            description="Simple form"
            componentRender={<Form />}
          />
          <ComponentRender
            title="UseCallback"
            description="UseCallback is used to memoize functions,in above example component update and render only when function dependency value updates , when toggle happens function is not updated because of useCallback"
            componentRender={<UseCallback />}
          />
          <ComponentRender
            title="UseMemo"
            description="UseMemo is used to memoize value,in above example component update and render only when value updates , when toggle happens value is not updated because of useMemo"
            componentRender={<UseMemo />}
          />
          <ComponentRender
            title="React.Memo"
            description=" "
            componentRender={<MemoComponent />}
          />
        </div>
      </div>
    </>
  );
}
PropsExample.defaultProps = {
  name: "Guest", // default props are used for default value for null name , here name props didn't have value so default used
};
export default FunctionalBasedExample;
