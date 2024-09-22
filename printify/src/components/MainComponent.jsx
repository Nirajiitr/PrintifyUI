import React from 'react'
import FeatureSection from './FeatureSection'
import BannerSection from './BannerSection'
import WorkSection from './WorkSection'
import ConnectStoreSection from './ConnectStoreSection'
import SaleStoreSection from './SaleStoreSection'
import SocialProofSection from './SocialProofSection'
import FinancialSection from './financialSection'

const MainComponent = () => {
  return (
    <main className='w-full h-auto  mt-32'>
      <BannerSection />
      <FeatureSection />
      <WorkSection />
      <ConnectStoreSection />
      <SaleStoreSection />
      <SocialProofSection />
      <FinancialSection />
    </main>
  )
}

export default MainComponent