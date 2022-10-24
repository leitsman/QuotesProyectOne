import { useState } from "react";
import "./App.css";
import QuoteBox from "./Components/QuoteBox";
import quotes from "../src/quotes.json";

function App() {
  // ===================== RANDOM INDEX =====================
  const IndexRndm = Math.floor(Math.random() * (quotes.length - 1));
  const [RandomIndx, setRandomIndx] = useState(IndexRndm);
  const BtnRandom = () => {
    const OtherRndm = Math.floor(Math.random() * (quotes.length - 1));
    setRandomIndx(OtherRndm);
  };
  // ====================== RANDOM RGB ==================
  const RandomRgb = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };
  return (
    <div className="App">
      <QuoteBox
        BtnRandom={BtnRandom}
        RandomIndx={RandomIndx}
        RandomRgb={RandomRgb}
      />
    </div>
  );
}

export default App;
