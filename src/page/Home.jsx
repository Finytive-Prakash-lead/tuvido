import React from 'react'
import HeroBanner from '../component/hero/HeroBanner'
import StatsSection from '../component/stats/StatsSection'
import ModulesPreview from '../component/modulespreview/ModulesPreview'
import WhyTuvido from '../component/whyTuvido/WhyTuvido'
import Navbar1 from '../component/navbar/trend'
import StudentMobileApp from '../component/StudentMobileApp'
import VideoResource from '../component/video'
import { FaShapes } from 'react-icons/fa'
import FashionHero from '../component/WhoWeAre'
import FAQSection from '../component/features/Faq'
import WhyTrustSection from '../component/WhyTrustSection'
import BenefitsPerks from '../component/BenefitsPerks'
import HowItWorks from '../component/HowItsWork'




const Home = () => {
  return (
    <div>

      <HeroBanner />
      <WhyTrustSection />
      <ModulesPreview />

      <WhyTuvido />
      {/* <FashionHero /> */}

      <BenefitsPerks />
<HowItWorks/>

      {/* <VideoResource /> */}
      <FAQSection />
      <StudentMobileApp />

    </div>
  )
}

export default Home
