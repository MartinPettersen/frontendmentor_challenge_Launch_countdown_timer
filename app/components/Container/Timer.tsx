import React from "react";

type Prop = {
  label: String;
};

const Timer = ({ label }: Prop) => (
  <div className="bg-pink-200 flex flex-col items-center justify-center">
    <div>14</div>
    <div>{label}</div>
  </div>
);

export default Timer;
