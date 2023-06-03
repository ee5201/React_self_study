export default function CheckBox () {

  const qqq2 = ()=>{
    alert("2번 클릭")
  }
  const qqq3 = (event)=>{
    alert("3번 클릭")
    event.stopPropagation()
  }
  return(
    <>
      <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3}/>
        </span>
    </>
  )
}