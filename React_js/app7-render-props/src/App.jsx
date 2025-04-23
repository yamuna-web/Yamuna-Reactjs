import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FuncHoverCouter from "./funcComponents/FuncClickCounter";
import FuncClickCounter from "./funcComponents/FuncHoverCouter";
import FuncRenderPropsDemo from "./funcComponents/FuncRenderPropsDemo";


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <FuncRenderPropsDemo
        render={(count, handleIncrement, handleDecrement, handleReset) => (
          <FuncHoverCouter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
          />
        )}
      />
      <FuncRenderPropsDemo
        render={(count, handleIncrement, handleDecrement, handleReset) => (
          <FuncClickCounter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
          />
        )}
      />
    </>
  );
}

export default App;
