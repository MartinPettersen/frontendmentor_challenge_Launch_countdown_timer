'use client'

import React, { useState } from 'react'
import Timer from './Timer'

const Clock = () => {

    
    const [seconds, setSeconds] = useState(14);
    const [minutes, setMinutes] = useState(14);
    const [hours, setHours] = useState(14);
    const [days, setDays] = useState(14);

    const handleDays = () => {
        setDays(days - 1)
    }

    const handleHours = () => {
        if (hours === 0) {
            setHours(24)
            handleDays()

        } else {
            setHours(hours -1)
        }
    }

    const handleMinutes = () => {
        if (minutes === 0) {
            setMinutes(60)
            handleHours()

        } else {
            setMinutes(minutes -1)
        }
    }

    setInterval(() => {
        if (seconds === 0) {
            setSeconds(60)
            handleMinutes()
        } else {
            setSeconds(seconds -1)
        }
    },1000)
    const flipp = true;
    return (

    
    <div className='flex justify-center gap-6'>
        <Timer label="DAYS" time={days} flipp={flipp}/>
        <Timer label="HOURS" time={hours} flipp={flipp}/>
        <Timer label="MINUTES" time={minutes} flipp={flipp}/>
        <Timer label="SECONDS" time={seconds} flipp={flipp}/>

    </div>
  )}

export default Clock