import React from "react";

type Prop = {
  label: String;
  time: number;
};

// transform rotate-x-30

const Timer = ({ label, time }: Prop) => (
  <div className="flex flex-col items-center gap-2 sm:gap-6">
    <div className="flex sm:text-6xl text-[hsl(345,_95%,_68%)] flex-col items-center justify-center transform w-[70px] h-[71px] sm:w-[148px] sm:h-[150px]">
      <div className="fixed flex flex-col group transform hover:rotate-x-180 duration-1000">
        <div className="rounded-md sm:rounded-xl flex w-[70px] bg-[hsl(237,20%,21%)] group-hover:bg-[hsl(236,_21%,_26%)] duration-1000 h-[32px] sm:w-[148px] sm:h-[75px] items-center justify-center ">
          <div className="hidden group-hover:block transform group-hover:rotate-x-180">
            {time}
          </div>
          <div className="block group-hover:hidden">{time}</div>
        </div>
        <div className="w-[70px]  h-[32px] sm:w-[148px] sm:h-[75px]" />
      </div>
      <div>
        <div className="rounded-md sm:rounded-xl flex flex-col items-end bg-[hsl(236,_21%,_26%)] justify-center  w-[70px] h-[32px] sm:w-[148px] sm:h-[75px] shadow-2xl shadow-[hsl(235,_16%,_14%)] " >
            
            <div className="h-[50%] w-full bg-green-300"/>
            <div className="h-[50%] w-full bg-pink-300 flex items-end justify-center">{time}</div>

            </div>
        <div className="rounded-md sm:rounded-xl flex items-center bg-[hsl(236,_21%,_26%)] justify-center  w-[70px] h-[32px] sm:w-[148px] sm:h-[75px] shadow-2xl shadow-[hsl(235,_16%,_14%)]"/>
      </div>
    </div>
    <div className="text-[hsl(237,_18%,_59%)] tracking-widest text-xs sm:text-md">
      {label}
    </div>
  </div>
);

export default Timer;
