import React from 'react';

const User = ({userData}) => {
  return(
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
}

const UserList = () => {
  const users = [
    {email:'loli@gmail.com',name:'김민준'},
    {email:'jjun@gmail.com',name:'김준혁'},
    {email:'fish@gmail.com',name:'김지훈'},
    {email:'gtoy@gmail.com',name:'나현욱'},
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th> 
        </tr>
      </thead>
      <tbody>
        {users.map(user => <User key={user.email} userData={user}/>)}
      </tbody>
    </table>
  )
}

export default UserList;