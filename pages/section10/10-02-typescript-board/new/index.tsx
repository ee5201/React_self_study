import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriterContainer from "../../../../src/components/commons/units/board/10-write /boardwrite.container";

export default function GraphqlMutation() {
  return (
    <div>
      <BoardWriterContainer isEdit={false} />
    </div>
  );
}
