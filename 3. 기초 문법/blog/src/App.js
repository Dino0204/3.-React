import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let date = "9월 19일"
  let [logo,setLogo]= useState(['title1','title2','title3']);
  let [like,clickLike] = useState(0);

  return (
    <div className="App">
      <div className="test">
        <h2>리엑트 테스트용 웹 <button onClick={()=>{
          let cpy = [...logo];
          cpy[0] = 'Title1'
          setLogo(cpy);
          }}>🤖글 수정</button>
        </h2>
      </div>
      
      <div className="list">
        <h4>{logo[0]} <span onClick={() => {clickLike(like+1)}}>👍</span> {like} </h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{logo[1]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{logo[2]}</h4>
        <p>{date}</p>
      </div>
      <Modal></Modal>
      <Modal2/>
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

const Modal2 = () =>{
  return(
    <div className='modalBackground'>
      <div className='modalBody'> 
        <h4>Title</h4>
        <p>This Popup is ModalPopup</p>
        <span>❌</span>
      </div>
    </div>
  )
}

export default App;
