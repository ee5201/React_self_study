export default function PropsChildrenExample(props) {
  return (
    <>
      <div>
        <div>안녕하세요 영희입니다.</div>
        <div>{props.school}</div>
        <div>{props.children}</div>
        <div>안녕하세요 철수입니다.</div>
      </div>
    </>
  );
}
