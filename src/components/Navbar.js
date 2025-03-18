import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateActiveSection();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-btn")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  // Update Active Section Based on Scroll Position
  const updateActiveSection = () => {
    const sections = ["home", "about", "services", "contact"];
    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
          break;
        }
      }
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        style={{
          ...styles.nav,
          background: isScrolled ? "rgba(255, 87, 34, 0.9)" : "rgba(255, 140, 0, 0.85)",
          boxShadow: isScrolled ? "0 4px 15px rgba(255, 87, 34, 0.5)" : "none",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.h1 style={styles.logo}>🔱 Sri Panchamukhi Astro</motion.h1>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul style={styles.navList} className="desktop-nav">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  ...styles.navItem,
                  color: activeSection === item.toLowerCase() ? "#FFD700" : "#fff", // Highlight active section
                }}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <motion.button
            className="menu-btn"
            style={styles.menuBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing when clicking button
              setIsOpen(!isOpen);
            }}
          >
            ☰
          </motion.button>
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="mobile-menu"
            style={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>✖</button>
            <ul style={styles.mobileNavList}>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    ...styles.mobileNavItem,
                    color: activeSection === item.toLowerCase() ? "#FFD700" : "#fff",
                  }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: "15px",
    left: "0",
    right: "0",
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "12px 18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    zIndex: 1000,
    transition: "all 0.4s ease",
    backdropFilter: "blur(8px)",
  },
  logo: {
    fontSize: "22px",
    color: "#fff",
    fontWeight: "bold",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    cursor: "pointer",
  },
  navItem: {
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  menuBtn: {
    fontSize: "24px",
    color: "#fff",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "250px",
    height: "100vh",
    background: "rgba(255, 87, 34, 0.95)",
    padding: "20px",
    boxShadow: "0 0 15px rgba(255, 87, 34, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "20px",
    fontSize: "24px",
    color: "#fff",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  mobileNavList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  mobileNavItem: {
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Navbar;
