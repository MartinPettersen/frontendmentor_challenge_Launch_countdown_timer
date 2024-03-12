import React from 'react'

type Props = {
    label: String
}

const TimeLabel = ({label}: Props) => (
    <div className="text-[hsl(237,_18%,_59%)] tracking-[2.96px] sm:tracking-[5.92px] text-[7px] sm:text-[14px]">
    {label}
  </div>
  )

export default TimeLabel