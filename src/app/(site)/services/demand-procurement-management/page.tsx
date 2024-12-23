import CallToAction from '@/components/CallToAction'
import Breadcrumb from '@/components/Common/Breadcrumb'
import Benefits from '@/components/services/DemandProcedure/Benefits'
import Faq from '@/components/services/DemandProcedure/FAQ'
import Features from '@/components/services/DemandProcedure/Features'
import Hero from '@/components/services/DemandProcedure/Hero'
import Process from '@/components/services/DemandProcedure/Process'
import React from 'react'

function page() {
  return (
    <div>
      <Breadcrumb pageName='Demand-procurement-management'/>
      <Hero/>
      <Features/>
      <Benefits/>
      <Process/>
      <Faq/>
      <CallToAction/>
    </div>
  )
}

export default page