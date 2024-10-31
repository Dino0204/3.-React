import React from "react";
import styled from "styled-components";


const ProfileWrap = styled.div`
  grid-area:b;
  justify-self:end;
  display:flex;
  align-items:center;
  justify-content:center;
  
  
  width:35px;
  height:35px;
  padding:5px;
  border-radius:50%;


  &:has(#profileBtn:checked) ~ #profilePopup{
    display:block;
  }

  &:hover{
    background-color: rgba(1,1,1,0.5);
  }
`;


const Profile = styled.input`
  appearance: none;
  
  margin:0px;
  width:35px;
  height:35px;
  
  border-radius:inherit;
  background-color:blue;
`;

const ProfilePopup = styled.div`
  display:none;
  grid-area:c;
  position:relative;
  justify-self:end;


  // 좌상 우상 우하 좌하
  border-radius: 0px 0px 10px 10px;

  width:200px;
  height:300px;


  background-color:whitesmoke;
`;

const Account = () =>{
  return(
    <>
      <ProfileWrap>
        <Profile type="checkbox"id="profileBtn"/>
      </ProfileWrap>
      <ProfilePopup id="profilePopup"/>
    </>
  ) 
}

export default Account;