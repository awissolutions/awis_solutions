import Breadcrumb from '@/components/Common/Breadcrumb'
import CTA from '@/components/services/Erp/CTA'
import Hero from '@/components/services/Erp/Hero'
import Implementation from '@/components/services/Erp/Implementation'
import ServicesOverview from '@/components/services/Erp/ServicesOverview'
import Testimonials from '@/components/services/Erp/Testimonial'
import { Cat } from 'lucide-react'
import React from 'react'

function page() {
  return (
<>
<Breadcrumb pageName='ERP-implementation'/>
<Hero/>
<ServicesOverview/>
<Implementation/>
<Testimonials/>
<CTA/>
</>  )
}

export default page
