import { useState } from 'react';

function Navbar({ setCurrentPage, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu when navigating
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <button 
          onClick={() => handleNavClick('home')} 
          className="nav-logo"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          🎂 Birthday App
        </button>
        
        {/* Mobile menu button */}
        <button 
          className="nav-toggle"
          onClick={toggleMenu}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Desktop navigation */}
        <div className="nav-links desktop-nav">
          <button 
            onClick={() => handleNavClick('home')} 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('add')} 
            className={`nav-link ${currentPage === 'add' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Add Person
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            About
          </button>
        </div>

        {/* Mobile navigation */}
        <div className={`nav-links mobile-nav ${isMenuOpen ? 'show' : ''}`}>
          <button 
            onClick={() => handleNavClick('home')} 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('add')} 
            className={`nav-link ${currentPage === 'add' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Add Person
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 