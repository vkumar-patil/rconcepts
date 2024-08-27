import React, { useState } from "react";

function Count() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h5>Count:{count}</h5>
      <button onClick={() => setcount(count + 1)}>Incriment</button>
      <button onClick={() => setcount(count - 1)}>Dicriment</button>
    </div>
  );
}

export default Count;
