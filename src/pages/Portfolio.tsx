import React from 'react'
import { portfolioData } from '../data/portfolioData'

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Portfolio</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-grid">
        <div className="container">
          <div className="row">
            {portfolioData.map((item, index) => (
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
        </div>
      </section>
    </div>
  )
}

export default Portfolio
