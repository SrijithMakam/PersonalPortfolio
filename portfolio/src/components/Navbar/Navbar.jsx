import React, { useState, useEffect } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a className={styles.title} href="/">
        <span className={styles.brandName}>Srijith Makam</span>
        <span className={styles.brandSubtitle}>Portfolio</span>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
          </li>
          <li>
            <a href="#education" onClick={(e) => handleSmoothScroll(e, '#Education')}>Education</a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}>Experience</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a>
          </li>
          <li>
            <a href="#Awards" onClick={(e) => handleSmoothScroll(e, '#Awards')}>Recognitions</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1bJvUxugzWfJv20QbHlgjPzrgG2ObetG8/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
