import { ChangeEvent, useState } from "react"
import BoardWriterPresenter from "./boardwrite.presenter"
import { CREATEBOARD, UPDATEBOARD } from "./boardwrite.queries"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { IBoardWriterContainer, IMyvariables } from "./boardwirte.interface"


export default function BoardWriterContainer (props:IBoardWriterContainer) {
  const [writer,setWriter] = useState("")
  const [title,settitle] = useState("")
  const [contents,setContent] = useState("")
  const [CreateBoard] = useMutation(CREATEBOARD)
  const [updateBoard]= useMutation(UPDATEBOARD)
  const router = useRouter()


  const onchangeWriter = (event:ChangeEvent<HTMLInputElement>) =>{
    setWriter(event.currentTarget.value)
  }
  const onCHangetitle = (event:ChangeEvent<HTMLInputElement>) =>{
    settitle(event.currentTarget.value)
  }
  const onChangecontents = (event:ChangeEvent<HTMLInputElement>) =>{
    setContent(event.currentTarget.value)
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
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`)
 

  }

  const onClickupdate = async() =>{
    const myvariables:IMyvariables = {number:Number(router.query.number)}
    if(writer) myvariables.writer = writer
    if(title) myvariables.title = title
    if(contents) myvariables.contents = contents
    const result = await updateBoard({
      variables:myvariables
      
    })
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
    
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