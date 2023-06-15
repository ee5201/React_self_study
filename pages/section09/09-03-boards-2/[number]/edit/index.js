import { gql, useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import BoardWriterContainer from "../../../../../src/components/units/board/09-write/boardwrite.container"
import { useRouter } from "next/router"

const FetchBoard = gql`
  query fetchBoard($number:Int){
    fetchBoard(number:$number){
    number
    writer
    title
    contents
  }

  }

`




export default function GraphqlMutation () {
  const router= useRouter()
  const {data}= useQuery(FetchBoard,{
    variables:{
      number: Number(router.query.number)
    }
  })


  return(
    <div>
      <BoardWriterContainer isEdit ={true} data={data}/>
    
    </div>
  )
}