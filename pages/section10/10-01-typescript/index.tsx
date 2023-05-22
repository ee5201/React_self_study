export default function TypescriptPage =() => {
  let aaa:string = '안녕하세요'
    aaa = "안녕하세요"
  let bbb: number | string = 1000
  bbb = "안녕"

  function add = (num1:TU,num2:TI,num3:TQ):<TU,TI,TQ> => {
    return num1,num2,num3
  }
  const result = add(100,"dkdkdk",false)
  return(
    <>
    <div> {bbb}</div>
    </>
  )
  
}