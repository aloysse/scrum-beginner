import React from "react";
import hero from "../assets/img/hero.svg";
import cardBack from "../assets/img/card-back.svg";
import ProgressBar from "../components/ProgressBar";
import { Progress } from "../context/ProgressContext";

const Hero = ({ rate }) => {
  const { gotoPage } = Progress();

  return (
    <div className="bg-main bg-center bg-cover h-full p-3 text-center">
      <div className="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center overflow-y-scroll">
        <div>
          <h1 className="text-P1 text-6xl text-center font-thin mb-6">
            Scrum 新手村
          </h1>
          <div className="text-P1 flex items-center justify-center">
            <ProgressBar rate={rate} />
          </div>
        </div>
        <div className="flex justify-center max-w-[800px] mb-5">
          <img className=" rotate-[340deg] w-[20%]" src={cardBack} alt="" />
          <img className="w-[50%]" src={hero} alt="" />
          <img className=" rotate-[20deg] w-[20%]" src={cardBack} alt="" />
        </div>
        <div>
          <button
            onClick={() => gotoPage("Intro")}
            className="border-btn tracking-widest text-P1 py-1 px-16 text-xl"
          >
            開始
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
