import React from 'react'
import Headline from './Headline'
import Clock from './Clock'

const Container = () => (
    <div className='flex flex-col gap-[104px]'>
        <Headline />
        <Clock />
    </div>
  )

export default Container