import React,{useState} from 'react';

const Input2 = () =>{
  const [inputs,setInputs] = useState({
    user:"",
    email:"",
    tel:"",
  });

  // ECMA6 분해기법
  const {user,email,tel} = inputs;

  const textChange = (e) =>{
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  return(
    <div>
      <div>
        <label>이름</label>
        <input type='text' id='user' value={user} onChange={textChange}></input>
      </div>
      <div>
        <label>이메일</label>
        <input type='email' id='email' value={email} onChange={textChange}></input>
      </div>
      <div>
        <label>전화번호</label>
        <input type='tel' id='tel' value={tel} onChange={textChange}></input>
      </div>
      <p>Name  : {user}</p>
      <p>Email : {email}</p>
      <p>Tel   : {tel}</p>
    </div>
  );
};

export default Input2;
