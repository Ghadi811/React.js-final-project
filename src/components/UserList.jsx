import React from "react";
import User from "./User";
const UserList = (props) => {
    const list=
      [{'id':1, 'namee':'hoi'},
      {'id':3, 'namee':'hw'}
]
    
    return (<>
    <h1>from user list</h1>
    <User name="omar" dept="account" list={list} ></User>
    
    </>  );
}
 
export default UserList;