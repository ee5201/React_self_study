import { useRouter } from "next/router"

export default function StaticRoutingPage () {
  const router = useRouter()
  const onClickRouter = () =>{
    router.push("/section05/05-01-static-routing-moved")

  }
return(
  <>
    <button onClick={onClickRouter}>이동하기</button>
  </>
)
}