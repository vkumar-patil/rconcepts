import React from "react";

function Usercard({ user }) {
  return (
    <div>
      <div style={{ border: "black solid 2px", width: "200px" }}>
        <img src={user.img} style={{ height: "120px", width:"200px" }} />

        <p>Name :{user.Name}</p>
        <p>Email :{user.email}</p>
        <p>Number: {user.Number}</p>
      </div>
    </div>
  );
}

export default Usercard;
