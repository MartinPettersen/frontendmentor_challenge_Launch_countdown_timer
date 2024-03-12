import React from "react";

type Props = {
  time: number;
};

const BackCards = ({ time }: Props) => (
    <div className="flex flex-col">
        <div className="h-[100%] w-full z-1 fixed opacity-10 flex items-center justify-center">
          {time}
        </div>
      <div className="rounded-md sm:rounded-xl flex flex-col items-end bg-[hsl(237,20%,21%)] justify-center  w-[70px] h-[32px] sm:w-[148px] sm:h-[75px] shadow-2xl shadow-[hsl(235,_16%,_14%)] " />
      <div className="rounded-md border-t-2 border-[hsl(234,_17%,_12%)] sm:rounded-xl flex items-center bg-[hsl(237,21%,26%)] justify-center  w-[70px] h-[32px] sm:w-[148px] sm:h-[75px] shadow-2xl shadow-[hsl(235,_16%,_14%)]" />
    </div>
  );

export default BackCards;
