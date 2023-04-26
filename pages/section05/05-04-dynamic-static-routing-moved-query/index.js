import { useRouter } from "next/router"

export default function StaticRoutingPage () {
  const router = useRouter()

  
  const onClickRouter = () =>{
    router.push("/section05/05-04-dynamic-static-routing-moved-board-query/22999")

  }
  const onClickRouter1 = () =>{
     router.push("/section05/05-04-dynamic-static-routing-moved-board-query/33222")

  }

  const onClickRouter2 = () =>{
 router.push("/section05/05-04-dynamic-static-routing-moved-board-query/3")
  }
return(
  <>
    <button onClick={onClickRouter}>1번 이동하기</button>
    <button onClick={onClickRouter1}>2번 이동하기</button>
    <button onClick={onClickRouter2}>3번 이동하기</button>

  </>
)
}