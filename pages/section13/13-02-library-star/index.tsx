import React, { useState } from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function LibraryStarPage() {
  const [value, setValue] = useState(2);

  // const onChange = (value: number): void => {
  //   setValue(value);
  // }; // 1단계

  // const onChange = (value) => setValue(value); // 2단계

  return (
    // <Rate onChange={onChange} value={value} /> // 1단계
    // <Rate onChange={onChange} value={value} /> // 2단계

    //   <Rate onChange={setValue} setvalue={value} /> //3단계
    //   {value ? <span>{desc[value - 1]}</span> : ""}
    <Rate onChange={setValue} value={value} tooltips={desc} /> // 4단계
  );
}
// tooltips={desc} // 위에 뜨게 작성하는것
