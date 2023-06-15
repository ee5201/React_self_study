export default function BoardComponent ({name}) {
  return (
  <div>
      <h1>{name ? "등록" : "수정"}페이지</h1>
      제목: <input type="text"/>
      내용: <input type="text"/>
      <button >{name ? "등록" : " 수정"}하기</button>

  </div>
  ) 
}