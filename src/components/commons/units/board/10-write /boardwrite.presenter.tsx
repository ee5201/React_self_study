import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { IBoardWriterPresenter } from "./boardwirte.interface"


export default function BoardWriterPresenter (props:IBoardWriterPresenter) {


  return(
  <>
    작성자:<input type="text" onChange={props.onchangeWriter} defaultValue={props.data?.fetchBoard?.writer}/>
      제목: <input type="text" onChange={props.onCHangetitle}
      defaultValue={props.data?.fetchBoard?.title }/>
      내용:<input type="text" onChange={props.onChangecontents}
      defaultValue={props.data?.fetchBoard?.contents }/>
      <button onClick={props.isEdit ? props.onClickupdate :props.onClickSubmit}>{props.isEdit ? "수정" : "등록"}하기</button>
  </>
  )
}