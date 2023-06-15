import { useState } from "react"
import BoardWriterPresenter from "./boardwrite.presenter"
import { CREATEBOARD } from "./boardwrite.queries"
import { useMutation } from "@apollo/client"

export default function BoardWriterContainer () {
  const [writer,setWriter] = useState("")
  const [title,settitle] = useState("")
  const [contents,setContent] = useState("")
  const [CreateBoard] = useMutation(CREATEBOARD)
  const [isActive,setIsActive] = useState(false)


  const onchangeWriter = (event) =>{
    setWriter(event.target.value)
    if(
      event.target.value !=="" &&
      title !== " " &&
      contents !== "" ) {
      setIsActive(true)
    }else{
      setIsActive(false);

    }
  }
  const onCHangetitle = (event) =>{
    settitle(event.target.value)
    if(
      writer !=="" &&
      event.target.value !== " " &&
      contents !== "" ) {
      setIsActive(true)
    }else{
      setIsActive(false);

    }
  }
  const onChangecontents = (event) =>{
    setContent(event.target.value)
    if(
      writer !=="" &&
      title !== " " &&
      event.target.value  !== "" ) {
      setIsActive(true)
    }else{
      setIsActive(false);

    }
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
    isActive={isActive}
    onchangeWriter={onchangeWriter}
    onCHangetitle={onCHangetitle}
    onChangecontents={onChangecontents}
    onClickSubmit={onClickSubmit}
    />
    </>
  )
}