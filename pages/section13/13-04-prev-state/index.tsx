import { useState } from "react";

export default function PreStatePage() {
  const [state, setState] = useState(0);

  const countUP = () => {
    // setState(state + 1);
    // setState(state + 1);
    // setState(state + 1);
    // setState(state + 1);
    // setState(state + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
  };
  // const countDown = () => {
  //   setState(state - 1);
  // };
  return (
    <div>
      <div>{state}</div>
      <button onClick={countUP}>올리기</button>
      {/* <button onClick={countDown}>내리기</button> */}
    </div>
  );
}
