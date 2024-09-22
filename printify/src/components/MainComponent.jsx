import React from 'react'
import MainBanner from './MainBanner'
import Features from './Features'

const MainComponent = () => {
  return (
    <main className='w-full h-auto  mt-32'>
      <MainBanner />
      <Features />
    </main>
  )
}

export default MainComponent