import React from "react";
import style from "../css/Test.module.css" 

const Test = () => {
  return(
    <div>
      <label htmlFor="glassBox">BackGround</label>
      <input type="checkbox" id={style.glassBox}></input>
      
      <div className={style.cssTestField}>
        <div className={style.Modal} id={style.shadowModal}>
          <h1>Hover Shadow</h1>
        </div>

        <div className={style.Modal} id={style.checkModal}>
          <label htmlFor="checkBox">My Label</label>
          <input type="checkbox" id={style.checkBox}></input>
          <h1 id={style.container} >Checked Box</h1>
        </div>

        <div className={style.Modal} id={style.sizeModal}>
          <h1>Size Modal</h1>
        </div>

        <div className={style.Modal} id={style.glassModal}>
          <h1>Glass Modal</h1>
        </div>
        

      </div>
    </div>
  );
}

export default Test;