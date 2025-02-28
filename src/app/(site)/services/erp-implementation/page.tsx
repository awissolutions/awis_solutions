import Breadcrumb from '@/components/Common/Breadcrumb'
import Benefits from '@/components/services/Erp/Benefits'
import CTA from '@/components/services/Erp/CTA'
import ERPFaq from '@/components/services/Erp/ERPFaq'
import Hero from '@/components/services/Erp/Hero'
import Implementation from '@/components/services/Erp/Implementation'
import ServicesOverview from '@/components/services/Erp/ServicesOverview'
// import Testimonials from '@/components/services/Erp/Testimonial'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: "Services | ERP  ",
  description: "ERP services",
};




function page() {
  return (
<>
<Breadcrumb pageName='ERP-implementation'/>
<Hero/>
<ServicesOverview/>
<Implementation/>
{/* <Testimonials/> */}
<Benefits/>
<ERPFaq/>
<CTA/>
</>  )
}

export default page
