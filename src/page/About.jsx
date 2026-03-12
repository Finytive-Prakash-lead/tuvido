import React from 'react'
import HeroBanner from '../component/about/AboutHero'
import StudentMobileApp from '../component/StudentMobileApp'
import UDRHPSection from '../component/about/MissionVission'

export default function About()  {
  return (
    <div>
        <HeroBanner/>
        <UDRHPSection/>
        <StudentMobileApp/>
    </div>
  )
}
