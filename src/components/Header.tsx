import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="navigation fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          Ian Donahue
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse text-center ${isMenuOpen ? 'show' : ''}`} id="navigation">
          <ul className="navbar-nav ml-auto">
            {siteConfig.menu.map((item) => (
              <li key={item.url} className="nav-item">
                <Link 
                  className={`nav-link ${isActive(item.url) ? 'active' : ''}`}
                  to={item.url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
