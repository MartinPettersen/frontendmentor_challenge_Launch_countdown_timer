import React from 'react'

type Props = {
    flip: boolean,
    time: number
}

const FlipMechanic = ({flip, time}: Props) => (
<div
          className={`fixed flex flex-col group transform ${
            flip ? "rotate-x-180 duration-1000" : ""
          }`}
        >
          <div
            className={`rounded-md sm:rounded-xl flex w-[70px]  ${
              flip ? "bg-[hsl(236,_21%,_26%)] border-b-2 border-[hsl(234,_17%,_12%)] duration-1000" : "bg-[hsl(237,20%,21%)]"
            } h-[32px] sm:w-[148px] sm:h-[75px] items-center justify-center `}
          >
            <div
              className={`${
                flip ? "block transform rotate-x-180 flex flex-col" : "hidden "
              } w-[70px] h-[32px] sm:w-[148px] sm:h-[75px]`}
            >
              <div className="h-[100%] w-full text-sky-300 overflow-clip flex items-end pb-[5px] sm:pb-[18px] justify-center">
                {time}
              </div>
              <div className="h-[70%] w-full " />
            </div>
            <div
              className={`${
                flip ? "hidden" : ""
              } flex flex-col w-[70px] h-[32px] sm:w-[148px] sm:h-[75px]`}
            >
              <div className="h-[50%] w-full " />
              <div className="h-[50%] w-full text-green-300 overflow-clip pt-2 sm:pt-9 flex items-center justify-center">
                {time}
              </div>
            </div>
          </div>
          <div className="w-[70px]  h-[32px] sm:w-[148px] sm:h-[75px]" />
        </div>
  )

export default FlipMechanic