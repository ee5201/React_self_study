import { gql, useMutation, useQuery } from "@apollo/client"
import { useState } from "react"



const FETCHBOARD = gql`
  query fetchBoards{
    fetchBoards{
      number
      writer
      contents
      title
    }
  }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number:$number){
      message
    }
  }
`

export default function MapBoard () {
  const {data}= useQuery(FETCHBOARD)
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const [DeleteNum,setDeleteNum] = useState("")

  const onClickInput =  (event) => {
    const deleteNum = Number(event.target.id)
    setDeleteNum(deleteNum)

  }

  const onClickDelete = async () =>{
    const result = await deleteBoard({
      variables:{
        number: DeleteNum
      },
      refetchQueries:[{query:FETCHBOARD }]
    })
    return result
  }

  return(
    <>
    <div>
      {data?.fetchBoards.map((el)=> (
        <div key={el.number}>
          <span>
              <input id={el.number} onClick={onClickInput} type="checkbox"/>
          </span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.number}</span>
          <span>
            <button onClick={onClickDelete}>삭제</button>
          </span>
        </div>
      ))}

    </div>

    </>
  )
}