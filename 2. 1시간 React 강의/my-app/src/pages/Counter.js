import React,{useState} from 'react';

const Counter = () =>{
  const [num,setNum] = useState(0);

  return(
    <div>
      <button onClick={()=>{
        setNum(num + 1)
      }}>➕</button>
      <button onClick={()=>{
        setNum(num-1)
      }}>➖</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;
