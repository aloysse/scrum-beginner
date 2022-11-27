import React from "react";
import ProgressBar from "../components/ProgressBar";

const End = () => {
  return (
    <div className="bg-main bg-center bg-cover h-full p-3 text-center">
      <div class="border-main h-full pt-20 pb-16 px-10 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-P1 text-6xl text-center font-thin mb-6">
            Congratulations
          </h1>
          <div className="text-P1 flex items-center justify-center">
            <div>01</div>
            <ProgressBar />
            <div>09</div>
          </div>
        </div>
        <div className="flex leading-8 justify-center mt-10 text-xl text-white">
          <p>
            恭喜通過 Scrum新手村！
            <br />
            正式加入六角資訊的開發 A 組
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default End;
