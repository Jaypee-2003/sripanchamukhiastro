import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Solutions from "./components/Solutions";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div style={styles.app}>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
          <Solutions />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />

      {/* WhatsApp Button (Left Side) */}
      <a href="https://wa.me/+919538757791" target="_blank" rel="noopener noreferrer" style={{ ...styles.button, ...styles.whatsapp }}>
        <FaWhatsapp size={24} color="#fff" />
      </a>

      {/* Call Button (Right Side) */}
      <a href="tel:+919538757791" style={{ ...styles.button, ...styles.call }}>
        <FaPhone size={24} color="#fff" />
      </a>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to bottom, #f9f3e6, #fffaf0)",
    color: "#333",
    minHeight: "100vh",
    scrollBehavior: "smooth",
  },
  button: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    textDecoration: "none",
    position: "fixed",
    bottom: "20px",
    transition: "transform 0.3s ease-in-out",
    animation: "float 2s infinite alternate ease-in-out",
  },
  whatsapp: {
    left: "20px",
    backgroundColor: "#25D366",
  },
  call: {
    right: "20px",
    backgroundColor: "#007bff",
  },
};

// Adding keyframes for animation in JavaScript
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes float {
    from { transform: translateY(0px); }
    to { transform: translateY(-8px); }
  }
`, styleSheet.cssRules.length);

export default App;
