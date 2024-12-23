import Breadcrumb from '@/components/Common/Breadcrumb'
import Features from '@/components/services/electronic-design-automation/Features'
import Hero from '@/components/services/DemandProcedure/Hero'
import React from 'react'
import Benefits from '@/components/services/electronic-design-automation/Benefits'
import Process from '@/components/services/electronic-design-automation/Process'
import CallToAction from '@/components/CallToAction'
import FAQ from '@/components/services/electronic-design-automation/FAQ'

function page() {
  return (
<>
<Breadcrumb pageName='electronic-design-automation'/>
<Hero/>
<Features/>
<Process/>
<Benefits/>
<FAQ/>
<CallToAction/>
</>
  )
}

export default page