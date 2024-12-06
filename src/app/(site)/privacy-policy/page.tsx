import PrivacyPolicy from '@/components/PrivacyPolicy'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title:
    "Privacy Policy | Awis Solutions",
  description: "Privacy Policy page, Awis Solutions",
};

function page() {
  return (
    <PrivacyPolicy/>
  )
}

export default page