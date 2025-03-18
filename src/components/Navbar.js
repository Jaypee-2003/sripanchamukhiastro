import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
        <motion.h1 style={styles.logo}>🔱 Sri Panchamukhi Astro</motion.h1>
        {!isMobile && (
          <ul style={styles.navList} className="desktop-nav">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                style={styles.navItem}
              >
                <a href={`#${item.toLowerCase()}`} style={styles.navLink}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        )}
        {isMobile && (
          <motion.button
            className="menu-btn"
            style={styles.menuBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </motion.button>
        )}
      </motion.nav>
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="full-screen-menu"
            style={styles.fullScreenMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.button style={styles.closeBtn} onClick={() => setIsOpen(false)}>✖</motion.button>
            <ul style={styles.fullScreenNavList}>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={styles.fullScreenNavItem}
                >
                  <a href={`#${item.toLowerCase()}`} style={styles.navLink} onClick={() => setIsOpen(false)}>
                    {item}
                  </a>
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
  },
  navItem: {
    fontSize: "18px",
    fontWeight: "500",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  menuBtn: {
    fontSize: "24px",
    color: "#fff",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "block",
    zIndex: 1100,
  },
  fullScreenMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(255, 87, 34, 0.95)",
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
  fullScreenNavList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },
  fullScreenNavItem: {
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default Navbar;
