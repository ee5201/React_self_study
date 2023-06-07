import axios from "axios";
export default function RestGetPage() {
  const onCLickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };
  const onCLickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };
  return (
    <>
      <button onClick={onCLickAsync}>(비동기)요청하기</button>
      <button onClick={onCLickSync}>(동기)요청하기</button>
    </>
  );
}
