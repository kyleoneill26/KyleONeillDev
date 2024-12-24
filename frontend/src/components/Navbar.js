import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">DEV</Link>
      </div>
      
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 