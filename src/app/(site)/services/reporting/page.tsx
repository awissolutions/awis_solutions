import CallToAction from '@/components/CallToAction'
import Breadcrumb from '@/components/Common/Breadcrumb'
import ReportingBenefits from '@/components/services/Reporting/Benefits'
import Features from '@/components/services/Reporting/Features'
import HeroReporting from '@/components/services/Reporting/HeroReporting'
import ReportingFaq from '@/components/services/Reporting/ReportingFaq'
import ReportTypes from '@/components/services/Reporting/ReportTypes'
import { Cat } from 'lucide-react'
import React from 'react'

function page() {
  return (
<>
<Breadcrumb pageName='Reporting services'/>
<HeroReporting/>
<ReportTypes/>
<Features/>
<ReportingBenefits/>
<ReportingFaq/>
<CallToAction/>
</>  )
}

export default page