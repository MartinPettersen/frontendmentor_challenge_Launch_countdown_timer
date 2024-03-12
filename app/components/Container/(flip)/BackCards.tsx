import React from "react";

type Props = {
  time: number;
};

const BackCards = ({ time }: Props) => (
    <div className="flex flex-col">
        <div className="h-[100%] w-full z-1 fixed opacity-0 flex items-center justify-center">
          {time}
        </div>
      <div className="rounded-md sm:rounded-xl text-pink-300 pt-1 sm:pt-3 flex flex-col items-center justify-start bg-[hsl(237,20%,21%)]   w-[70px] h-[32px] sm:w-[148px] sm:h-[75px] shadow-2xl shadow-[hsl(235,_16%,_14%)] " >
          {time}

      </div>
      <div className="rounded-md border-t-2 pb-[5px] sm:pb-4 text-orange-300 border-[hsl(234,_17%,_12%)] overflow-clip sm:rounded-xl flex items-end bg-[hsl(237,21%,26%)] justify-center  w-[70px] h-[32px] sm:w-[148px] sm:h-[75px] shadow-2xl shadow-[hsl(235,_16%,_14%)]" > 
        {time}
      </div>
    </div>
  );

export default BackCards;
