import React from "react";
import Quotes from "../quotes.json";

const QuoteBox = ({ BtnRandom, RandomIndx, RandomRgb }) => {
  let ReceiveRgb = RandomRgb();
  document.body.style = `background:${ReceiveRgb}`;
  return (
    <div className="Content--Quote-card" style={{ color: ReceiveRgb }}>
      <div className="Content--fhrase-marks">
        <i className="fa-solid fa-marker fa-3x"></i>{" "}
        <p>{Quotes[RandomIndx].quote}</p>
      </div>
      <p>{Quotes[RandomIndx].author}</p>
      <button
        className="button--Next-Quote"
        onClick={BtnRandom}
        style={{ color: ReceiveRgb }}
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
};

export default QuoteBox;
