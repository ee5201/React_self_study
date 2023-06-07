import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);
  const OnClickUP = () => {
    setCount(count + 1);
  };
  const OnClickDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={OnClickUP}>올리기</button>
      <button onClick={OnClickDown}>내리기</button>
    </>
  );
}
