import{gql, useQuery} from "@apollo/client"


const FetchBoard = gql`
  query{
    fetchBoard(number:2999){
    number
    writer
    title
    contents
  }

  }

`

export default function staticRoutingMovedPage () {
  const {data} = useQuery(FetchBoard)
  console.log(data&& data) 
  //data && 조건부 렌더링 이라고 한다 데이터가 있으면 데이터를 보내줘
  // 옵셔널 체이닝 (optional-chaining) => data?. .... 
  
  //nullish-coalescing => data || ..... 거짓이면 ... 실행해줘 아니면 data실행
  // data ?? .... 비어있으면 .... 실행시켜줘 아니면 data 실행해줘 

  return(
    <div>
      <div>1번 페이지 이동이 완료 하였습니다.</div>
      <div>작성자:{data?.fetchBoard.writer}</div>
      <div>내용:{data ? data.fetchBoard.contents : "로딩중입니다."}</div>
      <div>제목:{data && data.fetchBoard.writer}</div> 
      
      


    </div>
  )
}