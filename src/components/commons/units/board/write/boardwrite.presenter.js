export default function BoardWriterPresenter ({onchangeWriter,onCHangetitle,onChangecontents,onClickSubmit}) {
  return(
  <>
    작성자:<input type="text" onChange={onchangeWriter}/>
      제목: <input type="text" onChange={onCHangetitle}/>
      내용:<input type="text" onChange={onChangecontents}/>
      <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
  </>
  )
}