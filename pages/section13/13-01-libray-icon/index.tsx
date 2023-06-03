import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 60px;
`;

export default function LibraryIcon() {
  const OnclickDeleteBtn = (event: MouseEvent<HTMLDivElement>): void => {
    alert(event.currentTarget.id);
  };
  return (
    <div>
      <MyIcon id="삭제" onClick={OnclickDeleteBtn} />
    </div>
  );
}
