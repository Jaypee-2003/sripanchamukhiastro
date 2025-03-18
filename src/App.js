import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Scroll to the section when URL contains a hash (e.g., #about, #services)
    const handleHashChange = () => {
      const id = window.location.hash.substring(1); // Remove the '#' symbol
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Run on initial load
    handleHashChange();

    // Listen for hash changes
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
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to bottom, #f9f3e6, #fffaf0)", // Light gradient
    color: "#333",
    minHeight: "100vh",
    scrollBehavior: "smooth",
  },
};

export default App;
