import * as S from "./boardwrite.style"


export default function BoardWriterPresenter ({onchangeWriter,onCHangetitle,onChangecontents,onClickSubmit,isActive}) {
  return(
  <>
    작성자:<S.RedInput type="text" onChange={onchangeWriter}/>
      제목: <S.RedInput type="text" onChange={onCHangetitle}/>
      내용:<S.RedInput type="text" onChange={onChangecontents}/>
      <S.BlueButton onClick={onClickSubmit}
      isActive={isActive}>Graphql-API 요청하기</S.BlueButton>
  </>
  )
}