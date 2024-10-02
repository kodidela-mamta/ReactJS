import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);
  const handleFocusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <span>useRef Example</span>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocusInput}>Click me</button>
    </>
  );
}
