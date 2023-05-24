export interface Iprofile {
  name: string
  age: number
  school: string
  hobby?: string
}

//1. Partial 타입
type aaa = Partial<Iprofile>

//2. Requried 타입
type bbb = Required<Iprofile>

//3. Pick 타입
type ccc = Pick<Iprofile, 'name' | 'hobby'>

//4. omit 타입
type ddd = Omit<Iprofile,'school'>

//5. Record 타입 
type eee = '철수' | '영희' | '훈이'
let child1:eee = "철수"
let child2:string= '사과'

type fff = Record<eee,Iprofile>

//6. 객체의 keyemffh Union타입 만들기 
type ggg = keyof Iprofile
let myprofile:ggg = 'age'

//7. type vs interface 차이 => 선업병합
export interface Iprofile{
  candy: number  // 선언병합으로 추가 
}

let profile:Partial<Iprofile>={
candy: 10
  
}