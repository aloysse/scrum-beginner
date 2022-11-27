import React from "react";
import hero from "../assets/img/hero.svg";
import cardBack from "../assets/img/card-back.svg";
import ProgressBar from "../components/ProgressBar";

const Hero = () => {
  return (
    <div className="bg-main bg-center bg-cover h-full p-3 text-center">
      <div class="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-between items-center">
        <div>
          <h1 className="text-P1 text-6xl text-center font-thin mb-6">
            Scrum 新手村
          </h1>
          <div className="text-P1 flex items-center justify-center">
            <div>01</div>
            <ProgressBar />
            <div>09</div>
          </div>
        </div>
        <div className="flex justify-center max-w-[800px] mb-5">
          <img className=" rotate-[340deg] w-[20%]" src={cardBack} alt="" />
          <img className="w-[50%]" src={hero} alt="" />
          <img className=" rotate-[20deg] w-[20%]" src={cardBack} alt="" />
        </div>
        <div>
          <button className="border-btn tracking-widest text-P1 py-1 px-16 text-xl">
            開始
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
