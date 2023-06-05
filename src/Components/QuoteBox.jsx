import React, { useState } from "react";
import Quotes from "../quotes.json";

const QuoteBox = () => {
  const randomIndex = Math.floor(Math.random() * Quotes.length - 1);
  const [index, setIndex] = useState(Math.abs(randomIndex));
  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length - 1);
    setIndex(Math.abs(randomIndex));
  };
  //? color
  const matiz = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightNessText = Math.floor(Math.random() * 50) + 30;
  const lightNess = Math.floor(Math.random() * 60);
  document.body.style.background = `hsl(${matiz}, ${saturation}%, ${lightNess}%)`;
  return (
    <div className=" bg-white mx-3 mt-[30vh] px-3 py-5 flex flex-col items-center shadow-xl shadow-black sm:max-w-[700px] sm:mx-auto">
      {/* <h1 className=" text-2xl font-sans mb-5">Do you prefer?</h1> */}
      <div className="flex items-center justify-evenly mb-5 gap-3">
        {/* <button className="border-4 rounded-sm border-double active:border-solid flex items-center gap-2 px-2 py-2">
          <i className="fa-regular fa-money-bill-1 fa-2x"></i>1 Dolar
        </button>
        <span>OR</span> */}
        <button
          className="border-4 rounded border-double border-orange-600 active:border-solid flex gap-2 px-2 items-center active:text-orange-600"
          onClick={randomQuote}
        >
          <i className="fa-regular fa-thumbs-up fa-2x"></i>
          <span className="text-lg">
            consejo <br /> de vida
          </span>
        </button>
      </div>
      <p
        style={{
          color: `hsl(${matiz + 120}, ${saturation}%, ${lightNessText}%)`,
        }}
      >
        {Quotes[index].quote}
      </p>
      <div className=" flex items-center self-end mt-5 mr-4 gap-2">
        <p>-{Quotes[index].author}</p>
        <i
          className="fa-solid fa-marker fa-2x"
          style={{
            color: `hsl(${matiz + 240}, ${saturation}%, ${lightNessText}%)`,
          }}
        ></i>
      </div>
    </div>
  );
};

export default QuoteBox;
