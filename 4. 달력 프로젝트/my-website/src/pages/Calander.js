import React, { useState } from 'react';
import style from '../css/CV1.module.css';


const CreateDate = ({dateData}) =>{
  return(
    <div className={style.date} id={dateData}>
      <h3>{dateData}</h3>
    </div>
  )
}
const CreateDay = ({dayData}) =>{
  return(
    <span className={style.day} id={dayData}>
      <h4>{dayData}</h4>
    </span>
  )
}

const Calander = () =>{
  const date = new Date(); // date 객체 생성
  const [year,setYear] = useState(date.getFullYear()); // 이번 년도 구하기
  const [month,setMonth] = useState(date.getMonth()+1); // 이번 월 구하기
  const lastDay = new Date(year,month,0).getDate(); // 월말 구하기
  const currentDay = new Date().getDate(); // 오늘 날짜 구하기
  const today = date.getDay(); // 오늘 요일 구하기

  const monthEngs = [
    'Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec'
  ]

  const dayEngs = [
    '일','월','화','수',
    '목','금','토'
  ]

  const days = []
  for(let i = 1 ; i <= lastDay;i++){days[i] = i;}
  

  const IncreaseM = () =>{ 
    if(month + 1 > 12){
      setYear(year+1);
      setMonth(1);
    }else{
      setMonth(month+1);
    }
  }
  
  const DecreaseM = () =>{
    if(month - 1 < 1){
      setYear(year-1);
      setMonth(12);
    }else{
      setMonth(month-1);
    }  
  }

  return(
    <div className={style.contentWrap}>
      <div className={style.calander}>
        <header className={style.monthHeader}>
          <button onClick={DecreaseM}>⪡</button>
          <div className={style.yearDate}>{monthEngs[month-1]} • {currentDay} • {year} </div>
          <button onClick={IncreaseM}>⪢</button>
        </header>
        <nav className={style.weekName}>{dayEngs.map( dayEng => <CreateDay key={dayEng} dayData={dayEng}/>)}</nav>
        <main className={style.month}>
          {days.map( day => <CreateDate key={day} dateData={day}/>)}
        </main>
      </div>
      
      {/* <div className='today'>
        <h2>{dayEngs[today]}</h2>
      </div> */}
    </div>
  );
}

export default Calander;  