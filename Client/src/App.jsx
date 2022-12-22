import { useState } from "react";
import "./App.css";
import Heart from "./components/Heart";
import Result from "./components/Result";
import UserCard from "./components/UserCard";

function App() {
  const [found1, setFound1] = useState(false);
  const [found2, setFound2] = useState(false);
  const [percentaje, setPercentaje] = useState(0);
  const [done, setDone] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>
          INSTAGRAM
          <br />
          LOVE CALCULATOR
        </h1>
      </header>
      <div className="cards">
        <UserCard setPercentaje={setPercentaje} setFound={setFound1} />
        <Heart enable={found1} enable2={found2} setDone={setDone} setPercentaje={setPercentaje} percentaje={percentaje}/>
        <UserCard setPercentaje={setPercentaje} setFound={setFound2}/>
      </div>
      <Result enable={found1} enable2={found2} done={done} percentaje={percentaje} />
    </div>
  );
}

export default App;
