import React from "react";
import Counter from "./component/Counter";

function App() {
  const [num, setNum] = React.useState(0);
  function mins() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  function plus() {
    if (num < 10) {
      setNum(num + 1);
    }
  }
  return (
    <div className="">
      <Counter data={num} plus={plus} mins={mins} />
    </div>
  );
}
export default App;
