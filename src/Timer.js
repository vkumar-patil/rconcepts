import React, { useRef, useState } from "react";

function Timer() {
  const newDate = useRef(new Date());
  const [currunthours, setcurruntHours] = useState(newDate.current.getHours());
  const [curruntminutes, setcurruntMinutes] = useState(
    newDate.current.getMinutes()
  );
  const [curruntsecond, setcurruntSecond] = useState(
    newDate.current.getSeconds()
  );
  setInterval(() => {
    newDate.current = new Date();
    setcurruntHours(newDate.current.getHours());
    setcurruntMinutes(newDate.current.getMinutes());
    setcurruntSecond(newDate.current.getSeconds());
  }, 1000);
  const livedate = `${currunthours}:${curruntminutes}:${curruntsecond}`;
  return <div>{livedate}</div>;
}

export default Timer;
