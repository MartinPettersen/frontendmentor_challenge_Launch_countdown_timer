import React from "react";
import TopBackCard from "./TopBackCard";
import BottomBackCard from "./BottomBackCard";

type Props = {
  time: number;
  oldTime: number;
};

const BackCards = ({ time, oldTime }: Props) => (
  <div className="flex flex-col">
    <TopBackCard time={time} />
    <BottomBackCard oldTime={oldTime} />
  </div>
);

export default BackCards;
