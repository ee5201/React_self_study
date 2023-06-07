import { useState } from "react";

export default function SignupState() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const OnchangeInputemail = (event) => {
    setemail(event.target.value);
  };

  const OnchangeInputpassword = (event) => {
    setpassword(event.target.value);
  };

  const onCLicksignup = (event) => {
    // console.log(email.includes("@"));
    if (email.includes("@") === false) {
      alert("이메일이 올바르지 않습니다. ");
    } else {
      console.log(email);
      console.log(password);
      alert("회원가입을 축하합니다.");
    }
  };

  return (
    <>
      이메일:
      <input onChange={OnchangeInputemail} type="text" />
      비밀번호:
      <input onChange={OnchangeInputpassword} type="password" />
      <button onClick={onCLicksignup}>회원가입</button>
    </>
  );
}
