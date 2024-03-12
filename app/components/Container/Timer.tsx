import React, { useEffect, useState } from "react";
import BackCards from "./(flip)/BackCards";
import TimeLabel from "./(flip)/TimeLabel";
import FlipMechanic from "./(flip)/FlipMechanic";

type Prop = {
  label: String;
  time: number;
  flipp: boolean;
};

const Timer = ({ label, time, flipp }: Prop) => {
  const [flip, setFlip] = useState(false);

  const [timeTemp, setTime] = useState(14);

  useEffect(() => {
    setFlip(flipp);

    setTime(time);
  }, [time]);

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4 ">
      <div className="flex sm:text-6xl text-[hsl(345,_95%,_68%)]  flex-col items-center justify-center transform w-[70px] h-[71px] sm:w-[148px] sm:h-[150px]">
        <FlipMechanic time={timeTemp} flip={flip} />
        <BackCards time={timeTemp} />
        <div className="z-10 fixed flex w-full justify-between">
          <div className="w-[12px] rounded-full h-[12px] bg-[hsl(234,_17%,_12%)]"/>
          <div className="w-[12px] rounded-full h-[12px] bg-[hsl(234,_17%,_12%)]"/>
        </div>
      </div>
      <TimeLabel label={label} />
    </div>
  );
};

export default Timer;
