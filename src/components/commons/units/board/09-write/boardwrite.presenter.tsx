import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardWriterPresenter({
  onchangeWriter,
  onCHangetitle,
  onChangecontents,
  onClickSubmit,
  isEdit,
  onClickupdate,
  data,
}) {
  return (
    <>
      작성자:
      <input
        type="text"
        onChange={onchangeWriter}
        defaultValue={data?.fetchBoard?.writer}
      />
      제목:{" "}
      <input
        type="text"
        onChange={onCHangetitle}
        defaultValue={data?.fetchBoard?.title}
      />
      내용:
      <input
        type="text"
        onChange={onChangecontents}
        defaultValue={data?.fetchBoard?.contents}
      />
      <button onClick={isEdit ? onClickupdate : onClickSubmit}>
        {isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
