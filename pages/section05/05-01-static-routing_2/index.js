import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onclickRouting = () => {
    router.push(`/section05/05-01-static-routing-moved_2`);
  };
  return (
    <>
      <button onClick={onclickRouting}>페이지 이동하기</button>
    </>
  );
}
