import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  function updateVal() {
    if(counter<21) {
        setCounter(++counter);
    }
  }
  function decreseVal() {
    if(counter) {
        setCounter(--counter);
    }
  }
  return (
    <>
      <h3>Hello from counter compoonent!</h3>
      {counter}
      <br />
      <button onClick={updateVal}>INCREMENT</button>
      <button onClick={decreseVal}>DECREMENT</button>
    </>
  );
}
export default Counter;
