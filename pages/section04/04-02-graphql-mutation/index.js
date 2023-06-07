import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATEBOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setwriter] = useState("");
  const [title, settitle] = useState("");
  const [contents, setcontents] = useState("");

  const [createBoard] = useMutation(CREATEBOARD);

  const onchangewriter = (event) => {
    setwriter(event.currentTarget.value);
  };

  const onchangetitle = (event) => {
    settitle(event.currentTarget.value);
  };

  const onchangecontents = (event) => {
    setcontents(event.currentTarget.value);
  };

  const onCLickSUbmit = async () => {
    const result = await createBoard({
      variables: {
        writer,
        title,
        contents,
      },
    });
    alert(result.createBoard.message);
    console.log(result);
  };
  return (
    <>
      <div>
        성명:
        <input onChange={onchangewriter} type="text" />
      </div>
      <div>
        제목:
        <input onChange={onchangetitle} type="text" />
      </div>
      <div>
        내용:
        <input onChange={onchangecontents} type="text" />
      </div>
      <button onClick={onCLickSUbmit}>Grahql-API 요청하기 </button>;
    </>
  );
}
