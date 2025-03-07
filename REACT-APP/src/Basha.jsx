import React, { useState } from "react";
import Book from "./conditionalRendering/Book";

const Basha = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}> INCREMENT</button>
      <button onClick={()=>setCount(count-1)}> DECREMENT</button>
      <button onClick={()=>setCount(0)}> RESET</button>
<Book/>
    </div>
  );
};

export default Basha;
