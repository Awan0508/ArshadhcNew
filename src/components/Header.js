"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/header.module.css';

const Header = () => {
  const [showDiseases, setShowDiseases] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const diseases = [
    { name: 'IBS', path: '/homeopathic-ibs-treatment' },
    { name: 'IBD', path: '/homeopathic-ibd-treatment' },
    { name: 'Ulcer', path: '/peptic-ulcer-treatment' },
    { name: 'PCOS', path: '/pcos-treatment' },
    { name: 'Sciatica', path: '/sciatica-treatment' },
    { name: 'Thyroids', path: '/thyroid-treatment' },
    { name: 'Fatty Liver', path: '/fatty-liver-treatment' },
    { name: 'Anal Fistula', path: '/anal-fistula-treatment' },
    { name: 'Ovarian Cyst', path: '/ovarian-cyst-treatment' },
    { name: 'Kidney Stone', path: '/kidney-stone-treatment' },
    { name: 'Rheu. Arthritis', path: '/rheumatoid-arthritis-treatment' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setShowDiseases(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Close dropdowns when route changes
    setShowDiseases(false);
    setMenuOpen(false);
    document.body.classList.remove('menuOpen');
  }, [pathname]);

  useEffect(() => {
    if (isMobile && menuOpen) {
      document.body.classList.add('menuOpen');
    } else {
      document.body.classList.remove('menuOpen');
    }
    
    return () => {
      document.body.classList.remove('menuOpen');
    };
  }, [menuOpen, isMobile]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDiseases(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setShowDiseases(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowDiseases(false);
  };

  const handleTreatmentClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setShowDiseases(!showDiseases);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img src="/images/AHCLogo2.png" alt="Arshad Homeopathic Clinic" className={styles.logoImage} />
        </Link>

        {/* Hamburger Button */}
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-hidden={!menuOpen && isMobile}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink} onClick={closeMenu}>
                Home
              </Link>
            </li>
            
            <li className={styles.navItem}>
              <Link href="/aboutUs" className={styles.navLink} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            
            <li 
              className={styles.navItem}
              ref={dropdownRef}
              onMouseEnter={!isMobile ? () => setShowDiseases(true) : undefined}
              onMouseLeave={!isMobile ? () => setShowDiseases(false) : undefined}
            >
              <Link 
                href={isMobile ? "#" : "/treatments"} 
                className={styles.navLink}
                onClick={handleTreatmentClick}
                aria-haspopup="true"
                aria-expanded={showDiseases}
              >
                Treatments
                <span className={`${styles.arrow} ${showDiseases ? styles.rotated : ''}`}>▼</span>
              </Link>
              
              <ul className={`${styles.dropdownMenu} ${showDiseases ? styles.dropdownOpen : ''}`} role="menu">
                {diseases.map((disease) => (
                  <li key={disease.path} className={styles.dropdownItem} role="none">
                    <Link 
                      href={disease.path} 
                      className={styles.dropdownLink}
                      onClick={closeMenu}
                      role="menuitem"
                    >
                      {disease.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.navItem}>
              <Link href="/Testimonials" className={styles.navLink} onClick={closeMenu}>
                Testimonials
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/VideoContent" className={styles.navLink} onClick={closeMenu}>
                Videos
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/contactUs" className={styles.navLink} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Overlay when menu is open on mobile */}
      {menuOpen && isMobile && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;