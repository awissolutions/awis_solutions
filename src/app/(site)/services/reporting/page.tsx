import Breadcrumb from '@/components/Common/Breadcrumb'
import Features from '@/components/services/Reporting/Features'
import HeroReporting from '@/components/services/Reporting/HeroReporting'
import ReportTypes from '@/components/services/Reporting/ReportTypes'
import React from 'react'

function page() {
  return (
<>
<Breadcrumb pageName='Reporting services'/>
<HeroReporting/>
<ReportTypes/>
<Features/>
</>  )
}

export default page