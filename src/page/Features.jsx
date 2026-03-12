import React from 'react'
import EcosystemDiagram from '../component/features/OverViewTuvido'
import WorkflowSection from "../component/features/WorkFlow"
import FAQSection from '../component/features/Faq'
import FeaturesContainer from '../component/features/FeatureDetailSection'
import FeatureBanner from '../component/features/FeatureBanner'
export default function Features () {
  return (
    <div>

      <FeatureBanner/>
                      <FeaturesContainer/>

        <EcosystemDiagram/>
        <WorkflowSection/>

    </div>
  )
}
