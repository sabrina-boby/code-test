import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const countDown = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: "2px solid red",
  };
  return (
    <div style={counterStyle}>
      <h3>count : {count}</h3>
      <button onClick={countDown}>add</button>
    </div>
  );
}
