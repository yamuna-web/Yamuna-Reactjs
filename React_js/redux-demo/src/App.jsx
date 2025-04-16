import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./Component/Users";
import Employees from "./Component/Employees";
import Students from "./Component/Students";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Users/>
      <hr />
     <Employees/>
      <hr />
      <Students/>
    </>
  );
}

export default App;
