import React from 'react'
import { Link } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'
import { homepageData } from '../data/homepageData'

const PortfolioSection: React.FC = () => {
  const displayedItems = portfolioData.slice(0, homepageData.portfolio.itemShow)

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>{homepageData.portfolio.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {displayedItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="portfolio-item">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h3>{item.title}</h3>
                      <div className="portfolio-categories">
                        {item.categories.map((category, catIndex) => (
                          <span key={catIndex} className="category-tag">
                            {category}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={item.projectUrl} 
                        className="portfolio-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
