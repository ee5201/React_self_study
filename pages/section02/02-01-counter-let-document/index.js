export default function CounterLetDocumentPage() {
  const OnClickUP = () => {
    const countUp = Number(document.getElementById("qqq").innerHTML) + 1;
    document.getElementById("qqq").innerText = countUp;
  };
  const OnClickDown = () => {
    const countDown = Number(document.getElementById("qqq").innerHTML) - 1;
    document.getElementById("qqq").innerText = countDown;
  };

  return (
    <>
      <div id="qqq">0</div>
      <button onClick={OnClickUP}>올리기</button>
      <button onClick={OnClickDown}>내리기</button>
    </>
  );
}
