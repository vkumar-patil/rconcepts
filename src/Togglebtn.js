import React, { useState } from "react";

function Togglebtn() {
  const [swich1, setSwich1] = useState("off");
  function handleClick(){
    if(swich1==="off"){setSwich1("on")}else { setSwich1("off")}
  }
  return (
    <div>
      <h3>{swich1}</h3>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default Togglebtn;
