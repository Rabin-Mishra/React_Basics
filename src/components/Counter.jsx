import { useState } from "react";

export default function Counter() {
  // use of the concept of single and multiple state variables
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function Increment() {
    setCount(count + incrementBy);
  }
  function Decrement() {
    setCount(count - incrementBy);
  }
  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseDecrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count Vlaue is :{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>

      <h2>Increment and Decrement By:{incrementBy}</h2>
      <button onClick={increaseIncrement}>Increment By</button>
      <button onClick={decreaseDecrement}>Decrement By</button>
    </div>
  );
}
