import React from "react";

type Props = {
  oldTime: number;
};

const BottomBackCard = ({ oldTime }: Props) => (
    <div className="rounded-md border-t-2 pb-[5px] sm:pb-4 text-orange-300 border-[hsl(234,_17%,_12%)] overflow-clip sm:rounded-xl flex items-end bg-[hsl(237,21%,26%)] justify-center  w-[70px] h-[32px] sm:w-[148px] sm:h-[75px] shadow-2xl shadow-[hsl(235,_16%,_14%)]">
      {oldTime}
    </div>
  );

export default BottomBackCard;
