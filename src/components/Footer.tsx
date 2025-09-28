import React from 'react'
import { siteConfig } from '../data/siteConfig'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="footer-copyright">
              {siteConfig.copyright}
            </p>
          </div>
          <div className="col-lg-6">
            <div className="footer-social">
              {siteConfig.social.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
