import React from "react";

function Counter(props) {
  //Component
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex gap-[32px] flex justify-center">
        <button
          type="button"
          onClick={props.mins}
          className="h-[32px] w-[32px] bg-[#FF8900]"
        >
          -
        </button>
        <div className="count">{props.data}</div>
        <button
          type="button"
          onClick={props.plus}
          className="h-[32px] w-[32px] bg-[#FF8900]"
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
