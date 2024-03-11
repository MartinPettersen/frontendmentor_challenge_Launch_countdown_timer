import React from 'react'
import Timer from './Timer'

const Clock = () => (
    <div className='flex justify-center gap-2'>
        <Timer label="DAYS"/>
        <Timer label="HOURS"/>
        <Timer label="MINUTES"/>
        <Timer label="SECONDS"/>

    </div>
  )

export default Clock