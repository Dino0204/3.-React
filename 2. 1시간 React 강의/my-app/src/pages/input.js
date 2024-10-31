import React,{useState} from 'react';

const Input = () =>{
  const [textValue,setText] = useState('');
  const inputChange = (e) =>{
    setText(e.target.value);
  };

  return(
    <div>
      <input type='text' value={textValue} onChange={inputChange}></input>
      <br></br>
      <p>{textValue}</p>
    </div>
  );
};

export default Input;
