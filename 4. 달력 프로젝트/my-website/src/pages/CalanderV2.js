import React, { useState } from "react";
import style from '../css/CV2.module.css';


const CalanderV2 = () =>{
  
  const date = new Date(); // date 객체 생성
  const today = date.getDate();
  const todayYoil = date.getDay();

  const [year,setYear] = useState(date.getFullYear());
  const [month,setMonth] = useState(date.getMonth());

  const firstYoil = new Date(year,month,1).getDay();
  const lastDay = new Date(year,month + 1, 0).getDate();


  const weekNames = ['일','월','화','수','목','금','토']

  const NoneDays = []
  for(let i = 1 ; i <= firstYoil;i++){NoneDays[i] = i;}

  const days = []
  for(let i = 1 ; i <= lastDay;i++){days[i] = i;}

  const Increase = () =>{
    if(month + 1 >= 12){
      setYear(year+1);
      setMonth(0);
    }else{
      setMonth(month+1);
    }
  }
  
  const Decrease = () =>{
    if(month - 1 <= 1){
      setYear(year-1);
      setMonth(11);
    }else{
      setMonth(month-1);
    }
  }


  const CreateWeekName = ({nameData}) =>{
    return(
      <span className={style.weekKorName}>
        <h4>{nameData}</h4>
      </span>
    );
  }
  
  const CreateNoneDay = ({noneData}) => {
    return(
      <div id={noneData} className={style.date}>
      </div>
    );
  }
  
  const CreateDaysOfWeek = ({dayData}) =>{

    const Yoil = new Date(year,month,dayData).getDay();
    const weekNameId = ['sun','mon','tue','wed','thu','fri','sat'];
  
    return(
      <div id={dayData} className={style.date}>
        <h3 className={style[`${weekNameId[Yoil]}`]}>{dayData}</h3>
      </div>
    );
  }

  return( 
    <div className={style.calanderWrap}>
      <div className={style.todayName}>{today}일 {weekNames[todayYoil]}요일</div>
      <div className={style.calanderV2}>
        <div className={style.calanderHead}>
          <img id={style.leftBtn} onClick={Decrease}  src={require("../imgs/arrow.png")} alt="left"></img >
          {year}년 {month+1}월
          <img id={style.rightBtn} onClick={Increase} src={require("../imgs/arrow.png")} alt="right"></img >
        </div>
        <header className={style.weekHead}>
          {weekNames.map(weekName => <CreateWeekName key={weekName} nameData={weekName}/>)}
        </header>
        <div className={style.month}>
          {NoneDays.map(NoneDay => <CreateNoneDay key={NoneDay} noneData={NoneDay}/>)}
          {days.map(day => <CreateDaysOfWeek key={day} dayData={day}/>)}
        </div>
      </div>
    </div>
  );
}

export default CalanderV2;