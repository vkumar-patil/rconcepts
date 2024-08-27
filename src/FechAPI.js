import axios from "axios";
import React, { useEffect, useState } from "react";

function FechAPI() {
  const [info, setInfo] = useState([]);
  async function informetion() {
    await axios
      .get("https://freetestapi.com/api/v1/students?limit=5")
      .then((response) => setInfo(response.data));
  }
  useEffect(() => {
    informetion();
  }, []);
  return (
    <div>
      {info.map((ele) => {
        console.log(ele);
        return (
          <>
            <image src={ele.image} />
            <h4 key={ele.id}>
              Name: {ele.name} {ele.address.city}
            </h4>
          </>
        );
      })}
    </div>
  );
}

export default FechAPI;
