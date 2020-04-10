import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const batas = 15;
  return (
    <div>
      <h1>{count}</h1>
      <div
        class="btn-group btn-group-lg mb-3"
        role="group"
        aria-label="Large button group"
      >
        <button
          className="btn btn-info"
          disabled={count >= batas}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="btn btn-info"
          disabled={count < 1}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
