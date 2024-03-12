import React from 'react'

type Props = {
    label: String
}

const TimeLabel = ({label}: Props) => (
    <div className="text-[hsl(237,_18%,_59%)] tracking-[5.92px] text-xs sm:text-md">
    {label}
  </div>
  )

export default TimeLabel