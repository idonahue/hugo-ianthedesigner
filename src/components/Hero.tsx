import React from 'react'
import { homepageData } from '../data/homepageData'

const Hero: React.FC = () => {
  return (
    <section className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content">
              <h1 
                className="hero-title"
                dangerouslySetInnerHTML={{ __html: homepageData.banner.title }}
              />
              <p className="hero-subtitle">{homepageData.banner.subTitle}</p>
              <p className="hero-description">{homepageData.banner.miniBio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
