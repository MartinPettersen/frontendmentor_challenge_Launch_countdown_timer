import React, { useEffect, useState } from "react";
import BackCards from "./(flip)/(backcards)/BackCards";
import TimeLabel from "./(flip)/TimeLabel";
import FlipMechanic from "./(flip)/FlipMechanic";

type Prop = {
  label: String;
  time: number;
  oldTime: number;

  flipp: boolean;
};

const Timer = ({ label, time, oldTime, flipp }: Prop) => {
  const [flip, setFlip] = useState(false);

  const [timeTemp, setTime] = useState(14);

  useEffect(() => {
    setFlip(flipp);

    setTime(time);
  }, [time]);

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4 ">
      <div className="flex text-[36px] tracking-[-1.08px] sm:tracking-[-2.4px] sm:text-[80px] text-[hsl(345,_95%,_68%)]  flex-col items-center justify-center transform w-[70px] h-[71px] sm:w-[148px] sm:h-[150px]">
        <FlipMechanic time={timeTemp} oldTime={oldTime} flip={flip} />
        <BackCards time={timeTemp} oldTime={oldTime}/>
        <div className="z-10 fixed flex w-full justify-between">
          <div className="w-[6px]  h-[6px] sm:w-[12px]  sm:h-[12px] rounded-full bg-[hsl(234,_17%,_12%)]"/>
          <div className="w-[6px]  h-[6px] sm:w-[12px]  sm:h-[12px] rounded-full bg-[hsl(234,_17%,_12%)]"/>
        </div>
      </div>
      <TimeLabel label={label} />
    </div>
  );
};

export default Timer;
