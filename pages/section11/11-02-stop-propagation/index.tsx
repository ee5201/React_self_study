import { gql, useQuery } from "@apollo/client"
import CheckBox from "./checkbox"




const FETCHBOARD = gql`
  query{
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`


export default function EventBubling () {
  const {data} = useQuery(FETCHBOARD)
  console.log(data?.fetchBoards)

  // const onclickAert = (event) => {
  //   alert(event.currentTarget.id)
  // }\
  
  const qqq1 = ()=>{
    alert("1번 클릭")
  }
  const qqq4 = ()=>{
    alert("4번 클릭")
  }
return (
  <div>
  <div>dkdk</div>
    {data?.fetchBoards.map((el:any)=> (
      <div id={el.writer}onClick={qqq1}>
        <CheckBox/>
        <span style={{margin: "10px"}} onClick={qqq4}>{el.number}</span>
        <span style={{margin: "10px"}}>{el.title}</span>
        <span style={{margin: "10px"}}>{el.writer}</span>
      </div>
    ))}
  
  </div>
) 
}