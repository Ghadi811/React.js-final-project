import React from "react";
const User = (props) => {
    var name=props.name;
    var dep=props.dep;
    var list=props.list;
    return (<>
    <h1>from user</h1>
     {list.map((e)=>(
     <div>
         {e.id} -
         {e.namee}
     </div>
    ))}
    {name} - {dep}
    </> );
}
 
export default User;