'use client'

import React, { useState } from 'react'
import Timer from './Timer'

const Clock = () => {

    
    const [seconds, setSeconds] = useState(14);
    const [oldSeconds, setOldSeconds] = useState(14);

    const [minutes, setMinutes] = useState(14);
    const [oldMinutes, setOldMinutes] = useState(14);

    const [hours, setHours] = useState(14);
    const [oldHours, setOldHours] = useState(14);

    const [days, setDays] = useState(14);
    const [oldDays, setOldDays] = useState(14);

    const handleDays = () => {
        setOldDays(days)
        setDays(days - 1)
    }

    const handleHours = () => {
        setOldHours(hours)
        if (hours === 0) {
            setHours(24)
            handleDays()

        } else {
            setHours(hours -1)
        }
    }

    const handleMinutes = () => {
        if (minutes === 0) {
            setOldMinutes(minutes)
            setMinutes(60)
            handleHours()

        } else {
            setOldMinutes(minutes)
            setMinutes(minutes -1)
        }
    }

    setInterval(() => {
        if (seconds === 0) {
            setOldSeconds(seconds)
            setSeconds(60)
            handleMinutes()
        } else {
            setOldSeconds(seconds)
            setSeconds(seconds -1)
        }
    },1000)
    const flipp = true;
    return (

    
    <div className='flex justify-center gap-4 sm:gap-8'>
        <Timer label="DAYS" time={days} oldTime={oldDays} flipp={flipp}/>
        <Timer label="HOURS" time={hours} oldTime={oldHours} flipp={flipp}/>
        <Timer label="MINUTES" time={minutes} oldTime={oldMinutes} flipp={flipp}/>
        <Timer label="SECONDS" time={seconds} oldTime={oldSeconds} flipp={flipp}/>

    </div>
  )}

export default Clock