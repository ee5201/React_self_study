import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"

const CREATE_BOARD = gql`
  mutation createBoard($writer:String,$title:String,$contents:String){
    createBoard(writer:$writer,title:$title,contents:$contents){
      _id
    number
    message
    }
   
  }
`

export default function DynamicroutingMutation () {
  const [CREATBOARD] = useMutation(CREATE_BOARD)
  const router = useRouter()

  const onCLickBtn = async() =>{
    const result = await  CREATBOARD({
      variables:{
        writer:"훈",
        title:"안녕",
        contents:"반갑"
      }
    })
    console.log(result)
    router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
  }
  return(
    <>
    <button onClick={onCLickBtn}>graphql-api요청</button>    
    </>
  )
}