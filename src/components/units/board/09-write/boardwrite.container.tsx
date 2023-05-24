import { useState } from "react"
import BoardWriterPresenter from "./boardwrite.presenter"
import { CREATEBOARD, UPDATEBOARD } from "./boardwrite.queries"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"

interface IProsBoardWriterCOntainer{
  isEdit:boolean
  data?:String
}
export default function BoardWriterContainer (props:IProsBoardWriterCOntainer) {
  const [writer,setWriter] = useState("")
  const [title,settitle] = useState("")
  const [contents,setContent] = useState("")
  const [CreateBoard] = useMutation(CREATEBOARD)
  const [updateBoard]= useMutation(UPDATEBOARD)
  const router = useRouter()


  const onchangeWriter = (event) =>{
    setWriter(event.target.value)
  }
  const onCHangetitle = (event) =>{
    settitle(event.target.value)
  }
  const onChangecontents = (event) =>{
    setContent(event.target.value)
  }
  const onClickSubmit = async() =>{
    const result = await CreateBoard({
      variables:{
        writer:writer,
        title:title,
        contents:contents
      }
    })
    console.log(result)
    router.push(`/section10/10-02-typescript-board/${result.data.createBoard.number}`)


  }

  const onClickupdate = async() =>{
    const myvariables = {number:Number(router.query.number)}
    if(writer) myvariables.writer = writer
    if(title) myvariables.title = title
    if(contents) myvariables.contents = contents
    const result = await updateBoard({
      variables:myvariables
      
    })
    router.push(`/section10/10-02-typescript-board/${result.data.updateBoard.number}`)
    
  }


  return(
    <>
    <BoardWriterPresenter
    onchangeWriter={onchangeWriter}
    onCHangetitle={onCHangetitle}
    onChangecontents={onChangecontents}
    onClickSubmit={onClickSubmit}
    isEdit={props.isEdit}
    onClickupdate={onClickupdate}
    data={props.data}
    />
    </>
  )
}