import React from "react";

type Props = {
    time: number,
}

const TopBackCard = ({time}: Props) => (
    <div className="rounded-md sm:rounded-xl  pt-1 sm:pt-3 flex flex-col items-center justify-start bg-[hsl(237,20%,21%)]   w-[70px] h-[32px] sm:w-[148px] sm:h-[75px] shadow-2xl shadow-[hsl(235,_16%,_14%)] ">
      {time}
    </div>
  );

export default TopBackCard;
