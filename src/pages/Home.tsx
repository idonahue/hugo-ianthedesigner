import React from 'react'
import Hero from '../components/Hero'
import PortfolioSection from '../components/PortfolioSection'

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <PortfolioSection />
    </div>
  )
}

export default Home
