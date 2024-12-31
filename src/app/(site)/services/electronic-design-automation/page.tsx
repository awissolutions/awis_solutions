import Breadcrumb from '@/components/Common/Breadcrumb'
import Features from '@/components/services/electronic-design-automation/Features'
import Hero from '@/components/services/electronic-design-automation/Hero'
import React from 'react'
import Benefits from '@/components/services/electronic-design-automation/Benefits'
import Process from '@/components/services/electronic-design-automation/Process'
import FAQ from '@/components/services/electronic-design-automation/FAQ'
import CTA from '@/components/services/electronic-design-automation/CTA'

function page() {
  return (
<>
<Breadcrumb pageName='electronic-design-automation'/>
<Hero/>
<Features/>
<Process/>
<Benefits/>
<FAQ/>
<CTA/>
</>
  )
}

export default page