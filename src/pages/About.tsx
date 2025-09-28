import React from 'react'
import { aboutData } from '../data/aboutData'

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{aboutData.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="about-text">
                {aboutData.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return null
                  
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="about-subtitle">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  
                  return (
                    <p key={index} className="about-paragraph">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-image">
                <img src={aboutData.authorImage} alt="Ian Donahue" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>{aboutData.cvExperience.title}</h2>
            </div>
          </div>
          <div className="row">
            {aboutData.cvExperience.items.map((item, index) => (
              <div key={index} className="col-lg-12 mb-4">
                <div className="experience-item">
                  <div className="experience-logo">
                    <img src={item.logo} alt={item.company} />
                  </div>
                  <div className="experience-content">
                    <h3>{item.title}</h3>
                    <h4>
                      {item.companySite ? (
                        <a href={item.companySite} target="_blank" rel="noopener noreferrer">
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                    </h4>
                    <p className="experience-duration">{item.duration}</p>
                    <p className="experience-description">{item.descriptionLong}</p>
                    {item.caseStudy && (
                      <a href={item.caseStudyUrl} className="case-study-link">
                        View Case Study
                      </a>
                    )}
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

export default About
