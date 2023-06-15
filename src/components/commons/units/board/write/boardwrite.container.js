import { useState } from "react"
import BoardWriterPresenter from "./boardwrite.presenter"
import { CREATEBOARD } from "./boardwrite.queries"
import { useMutation } from "@apollo/client"

export default function BoardWriterContainer () {
  const [writer,setWriter] = useState("")
  const [title,settitle] = useState("")
  const [contents,setContent] = useState("")
  const [CreateBoard] = useMutation(CREATEBOARD)


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


  }


  return(
    <>
    <BoardWriterPresenter
    onchangeWriter={onchangeWriter}
    onCHangetitle={onCHangetitle}
    onChangecontents={onChangecontents}
    onClickSubmit={onClickSubmit}
    />
    </>
  )
}